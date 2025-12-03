import { STYLES } from "./styles";

const Button = ({ children, isLoading, className = "", ...props }) => (
  <button type="submit" className={`${STYLES.button} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
