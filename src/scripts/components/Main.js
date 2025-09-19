import {
  main_svg_2,
  main_svg_3,
  main_svg_4,
  main_svg_5,
  main_svg_6,
  main_svg_7,
  main_svg_8,
  main_svg_10,
  main_icon_1,
  main_icon_2,
  main_icon_3,
  main_icon_4,
  main_icon_5,
  main_icon_6,
  main_icon_7,
  main_icon_8,
  main_icon_9,
  main_icon_10,
  main_icon_11,
  main_icon_12,
  main_icon_13,
  main_icon_14,
  main_icon_15,
  main_icon_16,
  main_icon_17,
  main_icon_18,
  main_icon_19,
  main_icon_20,
  main_icon_21,
  main_icon_22,
  main_img_2,
  main_img_4,
  main_img_5,
  main_img_6,
  main_logo_2,
  main_logo_3
} from '../../assets/assets'

import ContactForm from './ContactForm'
import Carousel from './CarouselNav'
import CarouselServices from './CarouselServices'
import Counter from './Counter'

const Main = ({ margin }) => {
  return (
    <div className='relative overflow-hidden'>
      <div className="absolute top-[-5vw] left-[-10vw] size-[10vw] rounded-full shadow-[5vw_0.5vw_15vw_rgba(79,55,138,1)] z-40"></div>
      <div className="absolute top-[8vw] right-[-15vw] size-[15vw] rounded-full shadow-[-5vw_0.5vw_20vw_rgba(255,0,229,0.2)] z-40"></div>
      <div className="absolute top-1/2 left-[-30vw] size-[30vw] rounded-full shadow-[15vw_-10vw_20vw_rgba(255,0,229,0.1)] -z-10"></div>
      <div className="flex flex-col gap-y-[5vw]">
        {/* Hero Section */}
        <Carousel margin={margin} />
        {/* Hero Section End */}
        {/* Statistics Section Start */}
        <div className={`relative flex flex-row justify-center items-center gap-x-[3vw] pt-[10vw] overflow-hidden ${margin}`}>
          <img
            src={main_svg_2}
            alt=""
            className="absolute -translate-x-[0.01vw] -translate-y-[5vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <img
            src={main_svg_3}
            alt=""
            className="absolute -translate-y-[5.5vw] translate-x-[40vw] w-[25vw] h-[25vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <div className='flex flex-col gap-x-[5vw] justify-center items-center'>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={2500}
                  duration={5}
                />
                +
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Customers</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={10}
                  duration={5}
                />
                +
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Global Partners</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={192}
                  duration={5}
                />
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Countries Covered</span>
            </div>
          </div>
          <div className='flex flex-col gap-x-[5vw] justify-center items-center'>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={2.5}
                  duration={5}
                />
                M+
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Orders Processed</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={40}
                  duration={5}
                />
                +
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Tech Enabled Warehouses</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={13}
                  duration={5}
                />
                M+
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Orders Fulfilled</span>
            </div>
          </div>
          <div className='flex flex-col gap-x-[5vw] justify-center items-center'>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={45}
                  duration={5}
                />
                +
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Logistics & Ecommerce Partners</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                <Counter
                  end={300}
                  duration={5}
                />
                +
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>Trucks Operated</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[4vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text'>
                $
                <Counter
                  end={60}
                  duration={5}
                />
                M+
              </span>
              <span className='text-[0.8vw] text-[#1A1A1A] font-medium'>GMV Per Year</span>
            </div>
          </div>
          <div className='flex flex-col items-start gap-y-[0.5vw]'>
            <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#FF00E5] font-semibold bg-[#FFD6FA] rounded-[0.5vw] px-[0.5vw] py-[0.2vw]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FF00E5" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              Our Statistics
            </span>
            <p className='text-[2vw] text-[#1A1A1A] font-bold leading-[2.5vw]'>
              Powered by our unified <br />network — delivering <br />excellence through ShipX
            </p>
          </div>
        </div>
        {/* Statistics Section End */}
        {/* Services Section Start */}
        <div id="services" className={`min-h-screen relative flex flex-col gap-y-[1vw] justify-center items-center pt-[5vw] overflow-hidden ${margin}`}>
          <img
            src={main_svg_4}
            alt=""
            className="absolute -translate-x-[40vw] translate-y-[12vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <img
            src={main_svg_5}
            alt=""
            className="absolute -translate-x-[41vw] -translate-y-[35vw] w-[150vw] h-[80vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <img
            src={main_svg_5}
            alt=""
            className="absolute translate-x-[23vw] translate-y-[24vw] w-[200vw] h-[80vw] pointer-events-none select-none -z-10 rotate-190"
            aria-hidden="true"
          />
          <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] rounded-[0.5vw] px-[0.5vw] py-[0.2vw]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FF00E5" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            Our Services
          </span>
          <p className='text-[2vw] text-[#1A1A1A] text-center font-semibold leading-[2.5vw]'>
            <p className='inline text-[#FF00E5]'>All in one platform</p> &ndash; ShipX aggregates cross-<br />border solutions from Amilo & SG Link
          </p>
          <div className='flex flex-row gap-x-[2vw] justify-center items-center'>
            <div className='flex flex-col gap-y-[1vw] w-[25vw]'>
              <div className='flex flex-row'>
                <div
                  className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'
                >
                  <img className='w-[2vw] h-[2vw]' src={main_icon_1} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    Express Worldwide
                  </span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div
                  className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'
                >
                  <img className='w-[2vw] h-[2vw]' src={main_icon_2} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    Economy Worldwide
                  </span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_3} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    USA Destination Corridor
                  </span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_4} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    USA Destination Fulfilment
                  </span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_5} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    Fulfilment by Amazon
                  </span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_6} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    Bulk Freight to USA
                  </span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_7} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    Global Compliance & Documentation
                  </span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='flex flex-row w-full rounded-[1vw] px-[2vw] py-[0.5vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_8} />
                  <span className='text-[#4F378A] font-semibold text-[1vw] pl-[2vw]'>
                    Financing and Customer Service
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-x-[1vw] text-[0.8vw] font-normal justify-center items-center">
                <div
                  className="
                    bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:100%_200%] bg-[position:0%_100%]
                    hover:bg-[position:0%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    p-[0.1vw] rounded-[2vw]
                    text-white font-medium
                  "
                >
                  <button
                    className="
                      bg-white cursor-pointer
                      py-[0.4vw] px-[1.5vw] rounded-[2vw] font-medium
                      text-[#4F378A] relative z-10
                      border-none
                    "
                    style={{ outline: "none" }}
                  >
                    Book a Demo
                  </button>
                </div>
                <button
                  className="
                    bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:200%_100%] bg-[position:0%_0%]
                    hover:bg-[position:100%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    py-[0.5vw] px-[1.5vw] rounded-[2vw] cursor-pointer
                    text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)]
                  "
                >
                  Contact Us
                </button>
              </div>
            </div>
            <CarouselServices />
          </div>
          <span className='text-[#63666D] text-[0.6vw]'>*Prices shown are starting prices only and may vary by country, specifications, and applicable conditions</span>
        </div>
        {/* Services Section End */}
        {/* Platform Section Start */}
        <div id="platform" className={`min-h-screen relative flex flex-col justify-center items-center py-[10vw] ${margin} overflow-hidden`}>
          <img className='absolute w-[50vw] h-[45vw] translate-x-[17vw] -translate-y-[1vw] -z-10' src={main_img_4} />
          <div className='flex flex-row gap-x-[0.1vw] justify-center items-center'>
            <div className='flex flex-col gap-y-[1vw]'>
              <div className='flex flex-row gap-x-[0.5vw]'>
                <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] rounded-[0.5vw] px-[0.5vw] py-[0.2vw]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FF00E5" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                  Our Platform
                </span>
                <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#414141] font-normal bg-[#FFD6FA] rounded-[0.5vw] px-[0.5vw] py-[0.2vw]'>
                  Two proven platforms. One unified solution. That's ShipX.
                </span>
              </div>
              <p className='text-[2.3vw] font-semibold leading-[2.5vw]'>One window for all your <br />cross-border logistics needs</p>
              <p className='text-[#63666D] text-[0.8vw] font-medium opacity-80'>
                ShipX Brings Together Modern Cross-Border Platform Technology And Tech-<br />Enabled Logistics Networks Into A Single, Easy-To-Use Solution.
              </p>
              <div className="flex flex-row gap-x-[1vw] text-[0.8vw] font-normal justify-start items-center">
                <div
                  className="
                    bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:100%_200%] bg-[position:0%_100%]
                    hover:bg-[position:0%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    p-[0.12vw] rounded-[2vw]
                    text-white font-medium
                  "
                >
                  <button
                    className="
                      bg-white cursor-pointer
                      py-[0.4vw] px-[1.5vw] rounded-[2vw] font-medium
                      text-[#4F378A] relative z-10
                      border-none
                    "
                    style={{ outline: "none" }}
                  >
                    Book a Demo
                  </button>
                </div>
                <button
                  className="
                    bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:200%_100%] bg-[position:0%_0%]
                    hover:bg-[position:100%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    py-[0.5vw] px-[1.5vw] rounded-[2vw] cursor-pointer
                    text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)]
                  "
                >
                  Contact Us
                </button>
              </div>
            </div>
            <img
              className='w-[35vw] h-[25vw]'
              src={main_img_2}
            />
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col justify-center items-center rounded-[2vw] p-[2vw] inset-shadow-[0_0_0.5vw_rgba(79,55,138,0.1)]'>
              <span className='text-[#4D4D4D] text-[0.7vw] font-medium'>Our Trusted Partners</span>
              <div className="relative w-[30vw] h-fit overflow-hidden">
                <div className="flex animate-scroll items-center gap-[3vw]">
                  {/* Original logos */}
                  <img src={main_logo_2} alt="scrolling" className="h-[6vw] object-contain" />

                  {/* Duplicate logos for seamless loop */}
                  <img src={main_logo_2} alt="scrolling" className="h-[6vw] object-contain" />
                </div>

                <style jsx>{`
                  @keyframes scroll {
                    0% {
                      transform: translateX(-50%);
                    }
                    100% {
                      transform: translateX(0);
                    }
                  }

                  .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content; /* ensures no weird shrinking */
                  }
                `}</style>
              </div>
              <div className="relative w-[30vw] h-fit overflow-hidden">
                <div className="flex animate-scroll items-center gap-[3vw]">
                  {/* Original logos */}
                  <img src={main_logo_3} alt="scrolling" className="h-[6vw] object-contain" />

                  {/* Duplicate logos for seamless loop */}
                  <img src={main_logo_3} alt="scrolling" className="h-[6vw] object-contain" />
                </div>

                <style jsx>{`
                  @keyframes scroll {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }

                  .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content; /* ensures no weird shrinking */
                  }
                `}</style>
              </div>
            </div>
            <div className='flex flex-col justify-start items-center text-[#1A1A1A] text-[0.8vw] font-medium w-[35vw] gap-y-[1.5vw] pl-[5vw] pr-[10vw]'>
              <div className='flex flex-row gap-x-[1vw] items-center w-full'>
                <img className='w-[2vw] h-[2vw]' src={main_icon_2} />
                <p className='pl-[1vw]'>Manage Orders And Shipments Across <br />ASEAN and Global Destinations</p>
              </div>
              <div className='flex flex-row gap-x-[1vw] items-center w-full'>
                <img className='w-[2vw] h-[2vw]' src={main_icon_9} />
                <p className='pl-[1vw]'>Integrate Marketplaces Like Amazon, <br />Shopee, Lazada, eBay, and Shopify</p>
              </div>
              <div className='flex flex-row gap-x-[1vw] items-center w-full'>
                <img className='w-[2vw] h-[2vw]' src={main_icon_7} />
                <p className='pl-[1vw]'>Track Performance In Real Time, With <br />Visibility Across Every Step</p>
              </div>
              <div className='flex flex-row gap-x-[1vw] items-center w-full'>
                <img className='w-[2vw] h-[2vw]' src={main_icon_6} />
                <p className='pl-[1vw]'>Access Warehousing, Fulfillment, Freight, <br />And Delivery From One Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        {/* Platform Section End */}
        {/* Freight & Customs Section Start */}
        <div className={`flex flex-col gap-y-[2vw] ${margin}`}>
          <div className='flex flex-row justify-between items-center gap-x-[5vw]'>
            <div className='flex flex-col gap-y-[1vw]'>
              <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] rounded-[0.5vw] px-[0.5vw] py-[0.2vw]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FF00E5" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                Global Freight, Customs & Fulfillment Solutions
              </span>
              <p className='text-[2.3vw] text-[#1A1A1A] text-start font-semibold leading-[2.5vw]'>
                <p className='inline text-[#FF00E5]'>Seamless</p> Trade <br />Across Borders
              </p>
              <div className="flex flex-row gap-x-[1vw] text-[0.8vw] font-normal justify-start items-center">
                <div
                  className="
                    bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:100%_200%] bg-[position:0%_100%]
                    hover:bg-[position:0%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    p-[0.1vw] rounded-[2vw]
                    text-white font-medium
                  "
                >
                  <button
                    className="
                      bg-white cursor-pointer
                      py-[0.4vw] px-[1.5vw] rounded-[2vw] font-medium
                      text-[#4F378A] relative z-10
                      border-none
                    "
                    style={{ outline: "none" }}
                  >
                    Book a Demo
                  </button>
                </div>
                <button
                  className="
                    bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:200%_100%] bg-[position:0%_0%]
                    hover:bg-[position:100%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    py-[0.5vw] px-[1.5vw] rounded-[2vw] cursor-pointer
                    text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)]
                  "
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-y-[1vw]'>
              <div className='flex flex-row justify-between items-center gap-x-[4vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] pl-[2.5vw]'>
                <div className='flex flex-col'>
                  <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-transparent rounded-[0.5vw] px-[0.5vw] py-[0.2vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.7vw]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    Freight & Customs
                  </span>
                  <p className='text-[1.8vw] text-[#1A1A1A] text-start font-semibold leading-[2.5vw]'>
                    <p className='inline text-[#FF00E5]'>Flexible</p> freight and clearance <br />
                    <p className='inline text-[#FF00E5]'>services</p> for regional & global trade
                  </p>
                </div>
                <img className='w-[20vw] h-[14vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]' src={main_img_5} />
              </div>
              <div className='flex flex-row justify-between gap-x-[1.5vw] text-[0.8vw]'>
                <div className='flex flex-row justify-start items-center shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] pl-[2vw] pr-[3.5vw] py-[1.5vw] rounded-[1.5vw]'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_10} />
                  <p className='font-semibold text-start pl-[1.5vw]'>
                    Multimodal Transport <br />
                    <p className='text-[#63666D] text-normal'>
                      sea, air, road & <br />
                      combined logistics
                    </p>
                  </p>
                </div>
                <div className='flex flex-row justify-start items-center shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] pl-[2vw] pr-[3.5vw] py-[1.5vw] rounded-[1.5vw]'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_11} />
                  <p className='font-semibold text-start pl-[1.5vw]'>
                    Cross-Border Trucking <br />
                    <p className='text-[#63666D] text-normal'>
                      bonded-lanes (VN-SG, TH-VN)
                    </p>
                  </p>
                </div>
                <div className='flex flex-row justify-start items-center shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] pl-[2vw] pr-[3.5vw] py-[1.5vw] rounded-[1.5vw]'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_12} />
                  <p className='font-semibold text-start pl-[1.5vw]'>
                    Customs Solutions <br />
                    <p className='text-[#63666D] text-normal'>
                      clearance, IOSS/VAT, duty <br />
                      management
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center gap-x-[5vw]'>
            <div className='flex flex-col gap-y-[1vw]'>
              <div className='flex flex-row justify-start items-center gap-x-[4vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]'>
                <img className='w-[20vw] h-[14vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]' src={main_img_6} />
                <div className='flex flex-col'>
                  <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#4F378A] font-semibold bg-transparent rounded-[0.5vw] px-[0.5vw] py-[0.2vw]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#4F378A" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.7vw]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    Warehousing & Fulfillment
                  </span>
                  <p className='text-[1.8vw] text-[#1A1A1A] text-start font-semibold leading-[2.5vw]'>
                    <p className='inline text-[#FF00E5]'>Flexible</p> freight and clearance <br />
                    <p className='inline text-[#FF00E5]'>services</p> for regional & global trade
                  </p>
                </div>
              </div>
              <div className='flex flex-row justify-between gap-x-[1.5vw] text-[0.8vw]'>
                <div className='flex flex-row justify-start items-center shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] pl-[2vw] pr-[3.5vw] py-[1.5vw] rounded-[1.5vw]'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_13} />
                  <p className='font-semibold text-start pl-[1.5vw]'>
                    Inventory Services <br />
                    <p className='text-[#63666D] text-normal'>
                      storage, pick & pack, returns <br />
                      management
                    </p>
                  </p>
                </div>
                <div className='flex flex-row justify-start items-center shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] pl-[2vw] pr-[3.5vw] py-[1.5vw] rounded-[1.5vw]'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_14} />
                  <p className='font-semibold text-start pl-[1.5vw]'>
                    Seamless Integrations <br />
                    <p className='text-[#63666D] text-normal'>
                      Shopify, Shopee, Lazada, eBay, <br />
                      Amazon
                    </p>
                  </p>
                </div>
                <div className='flex flex-row justify-start items-center shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] pl-[2vw] pr-[3.5vw] py-[1.5vw] rounded-[1.5vw]'>
                  <img className='w-[2vw] h-[2vw]' src={main_icon_15} />
                  <p className='font-semibold text-start pl-[1.5vw]'>
                    Regional Advantage <br />
                    <p className='text-[#63666D] text-normal'>
                      optimized location for <br />
                      fast fulfillment
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='text-[#63666D] text-[1vw] font-medium italic opacity-90'>
                Trusted Infrastructure And Smart <br />
                Integrations That Make International <br />
                Growth Simpler And Faster
              </p>
            </div>
          </div>
        </div>
        {/* Freight & Customs Section End */}
        {/* Offices Section Start */}
        <div id="network" className={`min-h-screen relative flex flex-col justify-center items-center pt-[16vw] pb-[5vw] ${margin} overflow-hidden`}>
          <img
            src={main_svg_10}
            alt=""
            className="absolute translate-x-[36vw] -translate-y-[18vw] w-[200vw] h-[43vw] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div className='flex flex-row gap-x-[2vw] justify-center items-center w-full'>
            <p className='text-[2.3vw] font-semibold leading-[3.5vw]'>
              Local presence, global corridors <br />— <p className='inline text-[#FF00E5]'>the ShipX advantage</p>
            </p>
            <div className='flex flex-col gap-y-[1vw]'>
              <div className='flex flex-row gap-x-[3vw]'>
                <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-white font-semibold bg-[#4F378A] rounded-[0.5vw] px-[0.8vw] py-[0.2vw]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                  Our Offices
                </span>
                <div className="flex flex-row gap-x-[1vw] text-[0.8vw] font-normal justify-center items-center">
                  <div
                    className="
                      bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                      bg-[length:100%_200%] bg-[position:0%_100%]
                      hover:bg-[position:0%_0%]
                      transition-[background-position] duration-1000 ease-in-out
                      p-[0.1vw] rounded-[2vw]
                      text-white font-medium
                    "
                  >
                    <button
                      className="
                        bg-white
                        py-[0.4vw] px-[1.5vw] rounded-[2vw] font-medium
                        text-[#4F378A] relative z-10
                        border-none cursor-pointer
                      "
                      style={{ outline: "none" }}
                    >
                      Book a Demo
                    </button>
                  </div>
                  <button
                    className="
                      bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                      bg-[length:200%_100%] bg-[position:0%_0%]
                      hover:bg-[position:100%_0%]
                      transition-[background-position] duration-1000 ease-in-out
                      py-[0.5vw] px-[1.5vw] rounded-[2vw] cursor-pointer
                      text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)]
                    "
                  >
                    Contact Us
                  </button>
                </div>
              </div>
              <p className='text-[#63666D] text-[0.85vw] font-medium opacity-80 tracking-wider'>
                Our Network Of Regional Hubs And Domain Experts Ensures <br />Your Business Thrives Globally, Without Losing Its Local Edge
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col gap-y-[1.5vw] pl-[8vw]'>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_20} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    Singapore
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_20} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>Singapore</span>
                    <span className='text-[#757577] text-[0.7vw]'>60 Kaki Bukit Place, Eunos <br />Techpark #03-19, S415979</span>
                    <span className='text-[#757577] text-[0.7vw] pt-[1.5vw]'>(+65) 9001 9941</span>
                    <span className='text-[#757577] text-[0.7vw]'>contact.sg@shipx.asia</span>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_21} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    Thailand
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_21} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>Thailand</span>
                    <span className='text-[#757577] text-[0.7vw]'>450/2 Boonyasathit Building,<br />2th Floor, Rama III Rd.,<br />Bangkok 10120</span>
                    <span className='text-[#757577] text-[0.7vw] pt-[1.5vw]'>(+65) 96 798 8971</span>
                    <span className='text-[#757577] text-[0.7vw]'>contact.th@amilo.co</span>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_20} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    Singapore
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_20} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>Singapore</span>
                    <span className='text-[#757577] text-[0.7vw]'>60 Kaki Bukit Place, Eunos <br />Techpark #03-19, S415979</span>
                    <span className='text-[#757577] text-[0.7vw] pt-[1.5vw]'>(+65) 9001 9941</span>
                    <span className='text-[#757577] text-[0.7vw]'>contact.sg@shipx.asia</span>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_22} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    Vietnam
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_22} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>Vietnam</span>
                    <span className='text-[#757577] text-[0.7vw]'>350 National Highway 1A, Binh<br />Hung Hoa B, Binh Tan, Ho Chi<br />Minh</span>
                    <span className='text-[#757577] text-[0.7vw] pt-[1.5vw]'>(+84) 90 270 23 45</span>
                    <span className='text-[#757577] text-[0.7vw]'>contact.vn@amilo.co</span>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_18} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    Malaysia
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_18} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>Malaysia</span>
                    <span className='text-[#757577] text-[0.7vw]'>2F Jalan 215, Seksyen 51<br />46050 Petaling Jaya, Selangor</span>
                    <span className='text-[#757577] text-[0.7vw] pt-[1.5vw]'>(+60) 12 525 5019</span>
                    <span className='text-[#757577] text-[0.7vw]'>contact.my@amilo.co</span>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_17} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    Indonesia
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_17} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>Indonesia</span>
                    <span className='text-[#757577] text-[0.7vw]'>Jl. KH Mas Mansyur No. 119 <br />- 121. Nyamplungan Kecamatan<br />Pabean Cantikan, Surabaya</span>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_19} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    Philippines
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_19} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>Philippines</span>
                    <span className='text-[#757577] text-[0.7vw]'>60 Kaki Bukit Place, Eunos <br />Techpark #03-19, S415979</span>
                    <span className='text-[#757577] text-[0.7vw] pt-[1.5vw]'>(+65) 9001 9941</span>
                    <span className='text-[#757577] text-[0.7vw]'>contact.sg@shipx.asia</span>
                  </div>
                </div>
              </div>
              <div className='relative flex flex-row'>
                <div className='group cursor-pointer flex flex-row w-full rounded-[2vw] pl-[0.8vw] pr-[2vw] py-[0.7vw] items-center justify-start shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] hover:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.35)] transition-shadow duration-1000 ease-in-out'>
                  <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_16} />
                  <span className='text-[#1A1A1A] font-semibold text-[0.8vw] pl-[1vw]'>
                    United States
                  </span>
                  {/* Tooltip container on the right */}
                  <div
                    className="
                      absolute left-full top-1/2 ml-[1vw]
                      -translate-y-1/2 flex flex-col gap-y-[0.5vw]
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-1000
                      bg-white shadow-[0_0.5vw_1vw_rgba(79,55,138,0.2)] rounded-[2vw] p-[1.5vw] z-50
                      w-[13vw]
                    "
                  >
                    <img className='w-[1.5vw] h-[1.5vw]' src={main_icon_16} />
                    <span className='text-[#19191D] text-[0.8vw] font-bold'>USA</span>
                    <span className='text-[#757577] text-[0.7vw]'>60 Kaki Bukit Place, Eunos <br />Techpark #03-19, S415979</span>
                    <span className='text-[#757577] text-[0.7vw] pt-[1.5vw]'>(+65) 9001 9941</span>
                    <span className='text-[#757577] text-[0.7vw]'>contact.sg@shipx.asia</span>
                  </div>
                </div>
              </div>
            </div>
            <img className='w-[60vw] h-full' src={main_svg_6} />
          </div>
        </div>
        {/* Offices Section End */}
        {/* Contact Us Section Start */}
        <div id="contact-us" className="relative flex flex-col justify-center items-center pt-[15vw] overflow-hidden">
          <img
            src={main_svg_7}
            alt=""
            className="absolute -translate-y-[17vw] w-[200vw] h-[53vw] pointer-events-none select-none z-10"
            aria-hidden="true"
          />
          <img
            src={main_svg_7}
            alt=""
            className="absolute translate-x-[30vw] -translate-y-[5vw] w-[200vw] h-[53vw] pointer-events-none select-none opacity-20 -z-10"
            aria-hidden="true"
          />
          <span className='flex flex-row gap-x-[0.5vw] items-center text-[0.8vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] rounded-[0.5vw] px-[0.5vw] py-[0.2vw] cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FF00E5" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-[0.5vw]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            Contact Us
          </span>
          <p className='text-[2.3vw] text-[#1A1A1A] text-center font-semibold leading-[2.5vw] mt-[1vw] mb-[8vw]'>
            Ready to take your products <p className='inline text-[#FF00E5]'>global?</p> <br />
            Let's talk.
          </p>
          <div className='relative flex flex-row justify-start items-center gap-x-[5vw] shadow-[0_0.5vw_2vw_rgba(255,0,229,0.15)] pl-[10vw] pr-[8vw] py-[8vw] rounded-t-[2vw] w-[70vw] bg-white z-10'>
            <img
              src={main_svg_8}
              alt=""
              className="absolute -translate-x-[44vw] -translate-y-[0vw] w-[200vw] h-[29vw] pointer-events-none select-none z-0"
              aria-hidden="true"
            />
            <div className='flex flex-col w-[20vw] text-[0.8vw]'>
              <span className='text-[#0E0E0E] text-[1.5vw] font-semibold'>Contact Information</span>
              <span className='text-black text-[0.9vw] font-normal mt-[1vw]'>Let's partner and grow</span>
              <div className="flex flex-col gap-y-[1vw] mt-[3vw]">
                {/* Contact Number */}
                <div className="flex flex-row items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#FF00E5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF00E5" className="size-[1vw]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>
                  <span className="pl-[1vw]">+1012 3456 789</span>
                </div>
                {/* Email Address */}
                <div className="flex flex-row items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF00E5" className="size-[1vw]">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <span className="pl-[1vw]">info@shipx.asia</span>
                </div>
                {/* Address */}
                <div className="flex flex-row items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF00E5" className="size-[1vw]">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <p className="pl-[1vw]">391B Orchard Road #22, <br />Ngee Ann City Singapore, 238874</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
        {/* Contact Us Section End */}
      </div>
    </div>
  )
}

export default Main