import SEO from "../../../ui/SEO";
import FileAClaimForm from "./FileAClaimForm";
import ToolsHeroSection from "../../../library/ToolsHeroSection";

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
      </div>
    </>
  );
};

export default ClaimsPage;
