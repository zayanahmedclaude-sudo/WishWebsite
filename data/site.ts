export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About W.I.S.H.", href: "/about" },
  { label: "Five-Star Vendor", href: "/five-star-vendor" },
  { label: "Meetings", href: "/meetings" },
  { label: "Policies", href: "/policies" },
  { label: "Video", href: "/video" },
  { label: "Contact", href: "/contact" },
] as const;

export const values = [
  {
    title: "Connection",
    description: "Authentic relationships with women who value substance.",
  },
  {
    title: "Collaboration",
    description: "Ideas and opportunities strengthened by working together.",
  },
  {
    title: "Community",
    description: "A welcoming circle grounded in trust and contribution.",
  },
  {
    title: "Genuine support",
    description: "Women helping women move forward personally and professionally.",
  },
] as const;

export const audiencePoints = [
  "You want meaningful connections, not surface-level networking.",
  "You value positive, empowering conversations and thoughtful follow-through.",
  "You believe trusted resources can save time, money and unnecessary stress.",
  "You want personal and professional growth within a supportive circle.",
] as const;

export const vendorExamples = [
  "Virtual assistant",
  "Printer",
  "Hairdresser",
  "Consultant",
  "Business vendor",
  "Personal service provider",
] as const;

export const whatToBringItems = [
  {
    title: "Vendor name",
    description: "The full name of the person you confidently recommend.",
  },
  {
    title: "Company name",
    description: "The business or service name attendees should recognize.",
  },
  {
    title: "Website",
    description: "The vendor's official website, when available.",
  },
  {
    title: "Email address",
    description: "The best direct email for an introduction or follow-up.",
  },
  {
    title: "Phone number and why",
    description: "Their preferred number and a concise reason they are Five-Star.",
  },
] as const;

export const newMemberSteps = [
  {
    number: "01",
    title: "Discover W.I.S.H.",
    description: "Learn what makes NET-WORTHING different from traditional networking.",
    href: "/about",
  },
  {
    number: "02",
    title: "Choose a trusted vendor",
    description: "Select one exceptional person you would confidently recommend.",
    href: "/five-star-vendor",
  },
  {
    number: "03",
    title: "Come prepared",
    description: "Bring the vendor's details and join the next confirmed meeting.",
    href: "/meetings",
  },
] as const;

export const kathleenHighlights = [
  "Owner of Speaktacular!",
  "More than 20 years teaching customer service",
  "A commitment to integrity, excellence and accountability",
] as const;
