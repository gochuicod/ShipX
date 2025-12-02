const Badge = ({ text = "Trade and Logistics Toolkit" }) => (
  <div className="bg-pink-100 text-[#D51C9E] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
    ● {text}
  </div>
);

export default Badge;
