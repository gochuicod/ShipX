import { NavLink } from "react-router-dom"
import { shipx, sglink, main_img_14 } from '../../assets/assets'

const linkClass = "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-4"

const Header = () => {

  return (
    <header
      className="
        sticky top-0 z-50
        flex flex-row bg-white text-[#1A1A1A] justify-between items-center 
        py-[1vw] px-[8vw] shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)]
      "
    >
      <div className="flex flex-row gap-x-[1vw] justify-center items-center">
        <div className="flex flex-row gap-x-[0.5vw] justify-center items-center">
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={shipx} alt="ShipX Logo" className="w-[3vw] h-[1.5vw]" />
          </NavLink>
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={sglink} alt="SGLink Logo" className="w-[3vw] h-[1vw]" />
          </NavLink>
        </div>
        <img className="h-[1vw] w-[1vw]" src={main_img_14} />
        <span className="text-[0.8vw] font-normal">ASEAN's Next Generation Platform</span>
      </div>
      <nav className="flex flex-row gap-x-[2.5vw] font-medium text-[0.8vw]">
        <NavLink
          to="/"
          end
          className={linkClass}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          &nbsp;&nbsp;test&nbsp;&nbsp;
        </NavLink>
        <NavLink
          to="/#services"
          end
          className={linkClass}
        >
          &nbsp;&nbsp;Services&nbsp;&nbsp;
        </NavLink>
        <NavLink
          to="/#platform"
          end
          className={linkClass}
        >
          &nbsp;&nbsp;Platform&nbsp;&nbsp;
        </NavLink>
        <NavLink
          to="/#network"
          end
          className={linkClass}
        >
          &nbsp;&nbsp;Network&nbsp;&nbsp;
        </NavLink>
      </nav>
      <div className="flex flex-row gap-x-[1vw] text-[0.8vw] font-normal">
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
        <NavLink
          to="/#contact-us"
          end
          className="
            bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
            bg-[length:200%_100%] bg-[position:0%_0%]
            hover:bg-[position:100%_0%]
            transition-[background-position] duration-1000 ease-in-out
            py-[0.4vw] px-[1.5vw] rounded-[2vw]
            text-white font-medium
          "
        >
          Contact Us
        </NavLink>
      </div>
    </header>
  )
}

export default Header