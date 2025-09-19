import { Link } from "react-router-dom"
import { shipx_white, sglink_white } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-gradient-to-t from-[#4F378A] from-10% to-[rgb(255,0,229)] text-white px-[6vw] py-[3vw] text-[0.8vw]">
      <div className="flex flex-row justify-between">
        {/* Description */}
        <div className="flex flex-col gap-y-[1vw] justify-start w-[40%]">
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-[0.5vw] justify-start items-center">
              <img src={shipx_white} alt="ShipX Logo" className="w-[5vw] h-[2.5vw]" />
              <img src={sglink_white} alt="SGLink Logo" className="w-[5vw] h-[1.5vw]" />
            </div>
            <span className="text-[1vw]">ASEAN's Next Generation Platform</span>
            <p className="mt-[0.8vw]">Empowering businesses to ship globally with confidence. <br/>Our platform simplifies international shipping, customs, and logistics</p>
          </div>
          <div className="flex flex-row gap-x-[1vw]">
            <button className="border-1 border-white text-white font-normal py-[0.2vw] px-[1.5vw] rounded-[2vw]">
              Book a Demo
            </button>
            <button className="bg-white text-[#FF00E5] font-bold py-[0.2vw] px-[1.5vw] rounded-[2vw]">
              Contact Us
            </button>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-row justify-end gap-x-[4vw] w-[60%]">
          <div className="flex flex-col gap-y-[1vw]">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/services">Services</Link>
            <Link to="/platform">Platform</Link>
          </div>
          <div className="flex flex-col gap-y-[1vw]">
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-services">Terms & Services</Link>
          </div>
          <div className="flex flex-col gap-y-[1vw]">
            <span className="font-medium">Reach us</span>
            {/* Contact Number */}
            <div className="flex flex-row items-center pl-[1vw]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[1vw]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
              </svg>
              <span className="pl-[1vw]">+1012 3456 789</span>
            </div>
            {/* Email Address */}
            <div className="flex flex-row items-center pl-[1vw]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1vw]">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <span className="pl-[1vw]">info@shipx.asia</span>
            </div>
            {/* Address */}
            <div className="flex flex-row items-center pl-[1vw]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-[1vw]">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <span className="pl-[1vw]">391B Orchard Road #22 Ngee Ann City Singapore, 238874</span>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <span className="text-center pt-[3vw]">&copy; {new Date().getFullYear()} ShipX Copyright and rights reserved</span>
    </footer>
  )
}

export default Footer