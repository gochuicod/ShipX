import AppButton from "../../library/AppButton";

const BlogFilterPill = ({ label, count, isActive, onClick }) => {
  return (
    <AppButton
      text={`${label} ${count !== null && count !== undefined ? `(${count})` : ""}`}
      style={isActive ? "categoryActive" : "categoryInactive"}
      onClick={onClick}
      className="whitespace-nowrap"
    />
  );
};

export default BlogFilterPill;
