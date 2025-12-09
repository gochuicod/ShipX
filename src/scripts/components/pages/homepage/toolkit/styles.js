export const STYLES = {
  input: `
    w-full
    bg-white
    border border-[1px] border-[#B9AFD0]
    md:rounded-[0.6vw] rounded-[1.5vw]
    md:px-[1vw] px-[3vw]
    md:py-[0.4vw] py-[1.5vw]
    text-gray-700
    focus:outline-none
    md:text-[0.8vw] text-[2.3vw]
  `,
  inputError: `
    border-red-500 bg-red-50 placeholder-red-400
  `,
  inputDefault: `border-gray-300`,
  label: `
    block
    md:text-[1vw]
    font-semibold
    text-gray-800
    mb-1
  `,
  button: `
    bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
    bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%]
    transition-[background-position] duration-1000 ease-in-out
    md:py-[0.4vw] py-[1vw]
    md:px-[1.5vw] px-[5vw]
    md:rounded-[2vw] rounded-full
    cursor-pointer
    text-white
    md:font-medium font-normal
    md:text-[0.8vw] text-[2.3vw]
  `,
  card: `
    flex flex-col
    items-center
    md:rounded-[0.8vw] rounded-[2vw]
    md:px-[2vw] px-[5vw]
    md:py-[1vw] py-[3vw]
    w-full
    bg-white
    shadow-[0_0_5vw_rgba(255,0,229,0.10)]
    transition-all duration-500 ease-in-out
  `,
};
