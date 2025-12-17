export const themeGuide = {
  // Padding
  paddingX: "2xl:px-24 md:px-8 px-8",
  paddingY: "2xl:py-5 md:py-5 py-5",

  // Typography - Headings
  pageTitle: "text-4xl font-extrabold tracking-tight",
  pageTitleAccent: "text-secondary",

  sectionHeading: "text-3xl font-semibold tracking-tight text-foreground",
  sectionHeadingAccent: "text-secondary",

  // Typography - Body
  sectionDescription: "text-foreground text-base",
  bodyText: "text-foreground text-base",

  // Form / Input Elements
  inputHeading: "text-foreground text-base leading-tight font-semibold",
  inputDescription: "text-muted-foreground text-sm leading-tight",
  inputPlaceholder:
    "placeholder:text-placeholder text-placeholder italic text-base placeholder:italic md:text-sm",

  // Call to Action (CTA)
  ctaHeading: "text-[40px] font-semibold tracking-tight leading-none",
  ctaDescription: "text-lg leading-tight",

  // Header
  headerTagline: "text-base text-dark-neutral font-normal",
  headerLinks: "text-base text-dark-neutral font-medium",
  headerLanguageItem: "text-md text-dark-neutral font-normal",

  // Footer
  footerTagline: "text-lg font-bold leading-tight text-dark-neutral",
  footerBody: "text-sm leading-none font-normal text-dark-neutral",
  footerHeading: "text-base font-bold text-secondary",
  footerItem: "text-sm text-medium-neutral hover:text-foreground leading-none",
  footerIcon: "w-5 h-5",

  // Buttons & UI
  // Note: These often need base button classes + variant classes
  buttonPrimary:
    "rounded-md text-sm font-medium mainButton inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 min-h-12 px-4 py-2 has-[>svg]:px-3",
  buttonNormal:
    "bg-gray-200 text-foreground hover:bg-violet-300/70 h-9 px-4 py-2 rounded-md",
  buttonFooterCTA:
    "bg-white/15 text-white text-base font-normal border border-white/95 rounded-[19px] md:py-[7px] md:px-[30px] cursor-pointer",

  badge:
    "text-secondary flex items-center gap-1 rounded-md px-4 py-2 text-sm font-bold w-fit bg-[var(--badge-bg)] text-[var(--badge-text)]",
};
