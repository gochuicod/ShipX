const TabSwitcher = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "tracker", label: "Shipment Tracker" },
    { id: "hscode", label: "HS Code Generator" },
    { id: "claim", label: "File a Claim" },
  ];

  return (
    <div
      role="tablist"
      className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100 mb-8 w-full md:w-auto"
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
              flex-1 md:flex-none px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${isActive ? "bg-[#A0168F] text-white shadow-md" : "text-gray-600 hover:bg-gray-50"}
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
