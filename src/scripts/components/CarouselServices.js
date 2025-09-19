import { Carousel } from "@material-tailwind/react";
import {
  main_img_1,
  main_img_7,
  main_img_8,
  main_img_9,
  main_img_10,
  main_img_11,
  main_img_12,
  main_img_13,
} from "../../assets/assets";

export default function CarouselServices() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      transition={{ duration: 1 }}
      className="w-[25vw] rounded-none"
      prevArrow={false}
      nextArrow={false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-[0.4vw]">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-[0.3vw] cursor-pointer rounded-full transition-all content-[''] ${
                activeIndex === i ? "w-[0.5vw] bg-[#FF00E5]" : "w-[0.3vw] bg-[#FF00E5]/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {/* First slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Express Worldwide
        </span>
        <p className='text-[1.8vw] text-[#1A1A1A] text-start font-semibold leading-[2.5vw]'>
          From <p className='inline text-[#FF00E5]'>SG, VN, MY, TH, ID <br />to anywhere</p> in the world
        </p>
        <div className='flex flex-row gap-x-[1vw] justify-center items-center bg-white px-[0.5vw] py-[2vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]'>
          <p className='text-[#63666D] text-[0.6vw]'>Prices starting from as low as <br />Transit time ~3-5 days</p>
          <p className='flex flex-row tracking-0 text-[#FF99F5] text-[2vw] font-black items-start leading-0'>
            $
            <p className='text-[#FF00E5] text-[4vw]'>
              22
            </p>
          </p>
        </div>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_1} />
      </div>
      {/* Second slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Economy Worldwide
        </span>
        <p className='text-[1.8vw] text-[#1A1A1A] text-start font-semibold leading-[2.5vw]'>
          From anywhere in <p className='inline text-[#FF00E5]'>ASEAN <br />to anywhere</p> in the world
        </p>
        <div className='flex flex-row gap-x-[1vw] justify-center items-center bg-white px-[0.5vw] py-[2vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]'>
          <p className='text-[#63666D] text-[0.6vw]'>Prices starting from as low as <br />Transit time ~10-15 days</p>
          <p className='flex flex-row tracking-0 text-[#FF99F5] text-[2vw] font-black items-start leading-0'>
            $
            <p className='text-[#FF00E5] text-[4vw]'>
              9
            </p>
          </p>
        </div>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_7} />
      </div>
      {/* Third slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          USA Destination Corridor
        </span>
        <p className='text-[1.3vw] text-[#1A1A1A] text-start font-semibold leading-[2vw]'>
          Dedicated Corridor from <p className='inline text-[#FF00E5]'>ASEAN <br />to US</p> with various transit and <br /> cost options
        </p>
        <div className='flex flex-row gap-x-[1vw] justify-center items-center bg-white px-[0.5vw] py-[2vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]'>
          <p className='text-[#63666D] text-[0.6vw]'>Prices starting as low as <br />Transit time $$-$$ days</p>
          <p className='flex flex-row tracking-0 text-[#FF99F5] text-[2vw] font-black items-start leading-0'>
            $
            <p className='text-[#FF00E5] text-[4vw]'>
              4.53
            </p>
          </p>
        </div>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_8} />
      </div>
      {/* Fourth slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          USA Destination Fulfilment
        </span>
        <p className='text-[1.5vw] text-[#1A1A1A] text-start font-semibold leading-[2.2vw]'>
          Network of <p className='inline text-[#FF00E5]'>2+ warehouses</p> <br />across USA for local fulfilment
        </p>
        <div className='flex flex-row gap-x-[1vw] justify-center items-center bg-white px-[0.5vw] py-[2vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]'>
          <p className='text-[#63666D] text-[0.6vw]'>Pick & Pack pricing starting from as low as <br /><br />Preferred carrier last mile rates for <br />nationwide delivery</p>
          <p className='flex flex-row tracking-0 text-[#FF99F5] text-[2vw] font-black items-start leading-0'>
            $
            <p className='text-[#FF00E5] text-[4vw]'>
              2
            </p>
          </p>
        </div>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_9} />
      </div>
      {/* Fifth slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Fulfilment by Amazon
        </span>
        <p className='text-[1.8vw] text-[#1A1A1A] text-start font-semibold leading-[2.5vw]'>
          <p className='inline text-[#FF00E5]'>End-to-end operations</p><br />from origin to FBA
        </p>
        <div className='flex flex-row gap-x-[1vw] justify-center items-center bg-white px-[0.5vw] py-[2vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]'>
          <p className='text-[#63666D] text-[0.6vw]'>Pick & Pack pricing starting from as low as <br />Transit time 30-40 days</p>
          <div className="flex flex-col justify-between gap-y-[1vw] items-center">
            <p className='flex flex-row tracking-0 text-[#FF99F5] text-[1.8vw] font-black items-start leading-0'>
              $
              <p className='text-[#FF00E5] text-[3vw]'>
                383
              </p>
            </p>
            <span p className="text-[1vw] text-[#0E0E0E] font-medium">per CBM</span>
          </div>
        </div>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_10} />
      </div>
      {/* Sixth slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Bulk Freight to USA
        </span>
        <p className='text-[1.3vw] text-[#1A1A1A] text-start font-semibold leading-[1.5vw]'>
          Join our scheduled sea-freight<br />
          containers for <p className='inline text-[#FF00E5]'>cheaper<br /> consolidated rates into USA</p>
        </p>
        <div className='flex flex-row gap-x-[1vw] justify-center items-center bg-white px-[0.5vw] py-[2vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]'>
          <p className='text-[#63666D] text-[0.6vw]'>Prices starting from as low as<br />Transit time 40-60 days</p>
          <p className='flex flex-row tracking-0 text-[#FF99F5] text-[2vw] font-black items-start leading-0'>
            $
            <p className='text-[#FF00E5] text-[4vw]'>
              3.6
            </p>
          </p>
        </div>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_11} />
      </div>
      {/* Seventh slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Global Compliance & Documentation
        </span>
        <p className='text-[1.8vw] text-[#1A1A1A] text-start font-semibold leading-[2vw]'>
          Team of <p className='inline text-[#FF00E5]'>Experts and APIs</p><br />
          for Efficient Trade
        </p>
        <div className='flex flex-row gap-x-[1vw] justify-center items-center bg-white px-[0.5vw] py-[2vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]'>
          <p className='text-[#63666D] text-[0.6vw]'>Prices starting from as low as<br />Transit time $$-$$ days</p>
        </div>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_12} />
      </div>
      {/* Eigth slide: custom hero section */}
      <div className='flex flex-col justify-between gap-y-[1vw] w-[25vw] bg-[#F8F7FF] p-[2vw] rounded-[2vw] h-[36vw]'>
        <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] px-[0.7vw] py-[0.4vw]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Financing and Customer Service
        </span>
        <p className='text-[1.8vw] text-[#FF00E5] text-center font-semibold leading-[1.5vw]'>
          Coming Soon!
        </p>
        <img className='w-full h-[15vw] rounded-[2vw]' src={main_img_13} />
      </div>
    </Carousel>
  );
}