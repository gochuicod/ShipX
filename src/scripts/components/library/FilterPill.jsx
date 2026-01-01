import AppButton from "./AppButton";

const FilterPill = ({ label, count, isActive, onClick }) => {
  return (
    <AppButton
      text={`${label} ${count !== null && count !== undefined ? `(${count})` : ""}`}
      style={isActive ? "categoryActive" : "categoryInactive"}
      onClick={onClick}
      className="whitespace-nowrap"
    />
  );
};

export default FilterPill;
