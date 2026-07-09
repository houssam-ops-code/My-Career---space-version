import { useEffect } from "react";

function useGlobeAnimation(containerRef, svgRef) {
  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;

    if (!container || !svg) return;

    svg.innerHTML = "";

    const svgNS = "http://www.w3.org/2000/svg";

    const cx = 150;
    const cy = 150;
    const R = 100;

    const strokeColor = getComputedStyle(
      document.documentElement
    )
      .getPropertyValue("--primary-color")
      .trim();

    const defs = document.createElementNS(svgNS, "defs");

    const clipPath = document.createElementNS(svgNS, "clipPath");
    clipPath.setAttribute("id", "globeClip");

    const clipCircle = document.createElementNS(svgNS, "circle");
    clipCircle.setAttribute("cx", cx);
    clipCircle.setAttribute("cy", cy);
    clipCircle.setAttribute("r", R - 1);

    clipPath.appendChild(clipCircle);
    defs.appendChild(clipPath);

    svg.appendChild(defs);

    const lines = document.createElementNS(svgNS, "g");
    lines.setAttribute("clip-path", "url(#globeClip)");

    svg.appendChild(lines);

    const equator = document.createElementNS(svgNS, "ellipse");

    equator.setAttribute("cx", cx);
    equator.setAttribute("cy", cy);
    equator.setAttribute("rx", R);
    equator.setAttribute("ry", R * 0.28);

    equator.setAttribute("fill", "none");
    equator.setAttribute("stroke", strokeColor);
    equator.setAttribute("stroke-width", "0.7");
    equator.setAttribute("opacity", "0.45");

    lines.appendChild(equator);

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI;

      const ellipse = document.createElementNS(svgNS, "ellipse");

      ellipse.setAttribute("cx", cx);
      ellipse.setAttribute("cy", cy);

      ellipse.setAttribute(
        "rx",
        Math.max(1, Math.abs(Math.cos(angle)) * R)
      );

      ellipse.setAttribute("ry", R);

      ellipse.setAttribute("fill", "none");
      ellipse.setAttribute("stroke", strokeColor);
      ellipse.setAttribute("stroke-width", "0.7");
      ellipse.setAttribute("opacity", "0.45");

      lines.appendChild(ellipse);
    }

    const outline = document.createElementNS(svgNS, "circle");

    outline.setAttribute("cx", cx);
    outline.setAttribute("cy", cy);
    outline.setAttribute("r", R);

    outline.setAttribute("fill", "none");
    outline.setAttribute("stroke", strokeColor);
    outline.setAttribute("stroke-width", "1.5");

    svg.appendChild(outline);

    const icons = Array.from({ length: 5 }, (_, index) => ({
      el: container.querySelector(`#icon-${index}`),
      angle: (index / 5) * Math.PI * 2,
    }));

    let animationId;

    const start = performance.now();

    function animate(now) {
      const t = (now - start) / 1000;

      const rect = container.getBoundingClientRect();

      const rx = rect.width * 0.48;
      const ry = rect.height * 0.14;

      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const positions = icons.map((icon) => {
        const angle = icon.angle + t * 0.55;

        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        return {
          icon,
          x: midX + cos * rx,
          y: midY + sin * ry,
          scale: 0.8 + sin * 0.2,
          opacity: 0.15 + ((sin + 1) / 2) * 0.85,
          depth: sin,
        };
      });

      positions.sort((a, b) => a.depth - b.depth);

      positions.forEach((item, index) => {
        if (!item.icon.el) return;

        item.icon.el.style.left = `${item.x}px`;
        item.icon.el.style.top = `${item.y}px`;
        item.icon.el.style.transform = `translate(-50%, -50%) scale(${item.scale})`;
        item.icon.el.style.opacity = item.opacity;
        item.icon.el.style.zIndex = index;
      });

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      svg.innerHTML = "";
    };
  }, [containerRef, svgRef]);
}

export default useGlobeAnimation;