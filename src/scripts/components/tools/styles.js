export const STYLES = {
  input: `
    w-full bg-white border rounded-lg px-4 py-3 text-gray-700
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
    transition-all duration-200
    disabled:bg-gray-100 disabled:text-gray-400
  `,
  inputError: "border-red-500 bg-red-50 placeholder-red-400",
  inputDefault: "border-gray-300",
  label: "block text-md font-semibold text-gray-800 mb-1",
  button: `
    bg-gradient-to-r from-[#9F1890] to-[#D51C9E] 
    hover:from-[#8a147d] hover:to-[#be188d]
    text-white font-medium py-3 px-8 rounded-full
    transition-all duration-300 shadow-md hover:shadow-lg
    whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed
  `,
  card: "bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-10 w-full border border-gray-100 min-h-[300px] flex items-center transition-all duration-500 ease-in-out",
};
