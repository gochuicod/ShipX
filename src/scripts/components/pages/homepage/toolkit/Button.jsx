import { STYLES } from "./styles";

const Button = ({ children, isLoading, className = "", ...props }) => (
  <button
    type="submit"
    className={`${STYLES.button} ${className} font-bold`}
    {...props}
    style={{
      fontFamily: "Karla, system-ui, -apple-system, sans-serif",
    }}
  >
    {children}
  </button>
);

export default Button;
