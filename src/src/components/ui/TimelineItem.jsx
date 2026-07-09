function TimelineItem({ year, title, subtitle }) {
  return (
    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <span className="timeline-year">
          {year}
        </span>

        <h3>{title}</h3>

        <p>{subtitle}</p>

      </div>

    </div>
  );
}

export default TimelineItem;