function Button({ className, url, label, icon, ...rest }) {
  return (
    <>
      <button className={`button ${className}`} {...rest}>
        {url ? (
          <a className='a-button' href={url}>
            {label}
          </a>
        ) : (
          <div className='a-button'>{label}</div>
        )}
        {icon && icon}
      </button>
    </>
  );
}
Button.defaultProps = { className: '', label: '-' };
export default Button;
