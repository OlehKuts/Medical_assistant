export const Text = ({ children, size = "18px", ...props }) => (
  <span className="text" style={{ fontSize: size, ...props }}>
    {children}
  </span>
);
