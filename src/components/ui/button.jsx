export function Button({
  children,
  onClick,
  className = "",
  variant = "primary", // 'primary', 'secondary', 'danger', etc.
  size = "md",         // 'sm', 'md', 'lg'
  rounded = true,
  fullWidth = false,
  type = "button",
  ...props
}) {
  const baseStyles = "font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-white text-black hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    transparent: "bg-transparent text-black hover:bg-gray-300",
  };

  const radiusClass = rounded ? "rounded-full" : "rounded";

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]} ${radiusClass} ${widthClass} ${className}`}
      style={{ zIndex: 1 }}
      {...props}
    >
      {children}
    </button>
  );
}