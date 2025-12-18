import SmartNavLink from "../ui/SmartNavLink";

export default function Logo() {
  return (
    <div className="flex flex-row gap-x-[0.5vw] items-center">
      <SmartNavLink
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          loading="lazy"
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo.svg"
          alt="ShipX Logo"
          className="md:w-22 md:h-10 w-[14vw] h-[7vw]"
        />
      </SmartNavLink>
      <SmartNavLink
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          loading="lazy"
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo_sglink_amilo.svg"
          alt="SGLink Logo"
          className="md:w-18 md:h-6 w-[16vw] h-[5vw]"
        />
      </SmartNavLink>
    </div>
  );
}
