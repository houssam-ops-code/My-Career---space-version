function Button({ to, children, variant = "primary", className = "", onClick, type = "button" }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
