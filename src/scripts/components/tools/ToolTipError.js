const ToolTipError = ({ message }) => (
  <div
    role="alert"
    className="absolute -top-10 left-0 bg-red-500 text-white text-xs p-2 rounded shadow-lg z-10 animate-fade-in"
  >
    {message}
    <div className="absolute top-full left-4 border-4 border-transparent border-t-red-500" />
  </div>
);

export default ToolTipError;
