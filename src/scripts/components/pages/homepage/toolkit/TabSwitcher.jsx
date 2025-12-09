const TabSwitcher = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "tracker", label: "Shipment Tracker" },
    { id: "hscode", label: "HS Code Generator" },
    { id: "claim", label: "File a Claim" },
  ];

  return (
    <div
      role="tablist"
      className="
        flex flex-row
        bg-white
        rounded-full
        md:p-[0.15vw] p-[0.5vw]
        border border-[#B9AFD0]
        md:w-[30vw] w-full
        md:mb-[1vw] mb-[3vw]
      "
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1
              md:px-[1.5vw] px-[3vw]
              md:py-[0.5vw] py-[1.5vw]
              rounded-full
              md:text-[0.7vw] text-[2.2vw]
              transition-all duration-300
              cursor-pointer
              ${
                isActive
                  ? "bg-[#A0168F] text-white font-bold"
                  : "text-gray-600 hover:bg-gray-50 font-normal"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default TabSwitcher;
