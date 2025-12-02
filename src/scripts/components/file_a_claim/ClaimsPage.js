import SmartNavLink from "../ui/SmartNavLink";
import SEO from "../ui/SEO";
import FileAClaimForm from "./FileAClaimForm";
import ToolsHeroSection from "../shipment_tracker/ToolsHeroSection";
import ParallaxSection from "../ui/ParallaxSection";

const ClaimsPage = () => {
  return (
    <>
      <SEO
        title="File a Claim | ShipX"
        description="Submit a claim for lost, damaged, or delayed shipments."
        canonical="https://shipx.com/file-a-claim"
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="w-screen min-h-screen flex flex-col">
        {/* Reusable Hero Section from UI folder */}
        <ToolsHeroSection activePage="file-a-claim" />

        {/* Main Form Content */}
        <FileAClaimForm />

        {/* CTA Section */}
        <ParallaxSection>
          <div
            className="
                flex flex-col
                md:w-[80vw] w-screen
                md:h-auto h-[80vw]
                bg-cover bg-center bg-no-repeat
                mx-auto
                md:mb-[4vw] mb-0
                text-white text-[0.8vw]
                font-normal
                md:rounded-[1vw] rounded-[0.00000001vw]
                overflow-hidden
                md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@ffab8ad2ad6bf54f2ed5c615722bff70ee96f7ef/src/assets/shipment_tracker_cta_image.webp')]
                bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@281b9212a310690d195ec2f7ac6057b96436d583/src/assets/shipment_tracker_cta_image_mobile.svg')]
            "
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <div
              className="
                flex flex-col
                md:gap-y-0 gap-y-[3vw]
                md:w-[40vw] w-screen
                md:ps-[8vw] ps-[10vw]
                md:pe-0 pe-[10vw]
                md:py-[5vw] py-[10vw]
              "
            >
              <span
                className="
                  md:px-0 px-[5vw]
                  md:text-[2vw] text-[7vw]
                  md:text-start text-center
                  md:leading-[3vw] leading-[8vw]
                  font-semibold
                "
              >
                Experience the Future of Shipping
              </span>
              <span
                className="
                  font-normal
                  opacity-95
                  pb-[1vw]
                  md:text-[0.9vw] text-[2.5vw]
                  md:text-start text-center
                  md:leading-[1.5vw] leading-[3vw]
                  md:px-0 px-[3vw]
                "
              >
                Don't just read about our latest tools — let us show you how
                they work and what they can do for your business.
              </span>
              <div
                className="
                  flex flex-row
                  md:gap-x-[1vw] gap-x-[3vw]
                  md:text-[0.8vw] text-[2.6vw]
                  md:justify-start justify-center
                  md:items-center items-center
                "
              >
                <div className="flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]">
                  <SmartNavLink to="/book-a-demo" end>
                    <button
                      type="button"
                      className="
                        flex flex-row
                        items-center justify-center
                        gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                        bg-white/15 text-white
                        border border-white/95
                        rounded-full
                        transition-all duration-300 focus:outline-none
                        cursor-pointer
                      "
                    >
                      Book a Demo
                    </button>
                  </SmartNavLink>
                </div>
                <SmartNavLink to="/#contact-us" end>
                  <button
                    type="button"
                    className="
                      flex flex-row
                      items-center justify-center
                      gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw]
                      bg-white/15 text-white
                      border border-white/95
                      rounded-full
                      transition-all duration-300 focus:outline-none
                      cursor-pointer
                    "
                  >
                    Contact Us
                  </button>
                </SmartNavLink>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </>
  );
};

export default ClaimsPage;
