// Single source of truth for the card. To publish a card for a different
// agent at Lush Property, copy this file's shape and swap the values —
// no component code needs to change.

export type QuickLinkIcon =
  | "home"
  | "plus"
  | "calculator"
  | "chart"
  | "info";

export interface QuickLink {
  label: string;
  href: string;
  icon: QuickLinkIcon;
}

export interface AgentConfig {
  brand: {
    name: string;
    suffix: string;
    registration: string;
  };
  agent: {
    name: string;
    role: string;
    blurb: string;
    photo: string;
    phone: string; // E.164, used for tel: link and vCard
    whatsapp: string; // digits only, used for wa.me link
    whatsappPrefillMessage: string;
    email: string;
    facebookUrl: string;
    address: string;
    mapsUrl: string;
    hours: string;
    tagline: string;
  };
  valueProp: {
    heading: string;
    body: string;
  };
  quickLinks: QuickLink[];
}

export const agentConfig: AgentConfig = {
  brand: {
    name: "Lush",
    suffix: "Property",
    registration: "PPRA registered",
  },
  agent: {
    name: "Lush Magadla",
    role: "Sales & Rental Agent · Lush Property",
    blurb:
      "Family homes, townhouses & sectional title across the West Rand. Straight talk, first-time buyers welcome.",
    // Lush's portrait, cropped from his business card. Served from /public.
    photo: "/lush.jpg",
    phone: "+27782309223",
    whatsapp: "27782309223",
    whatsappPrefillMessage: "Hi Lush, I'd like to chat about a home",
    email: "lushm@realnet.co.za",
    facebookUrl: "https://facebook.com",
    address: "Clearwater Office Park, Roodepoort",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Clearwater+Office+Park+Roodepoort",
    hours: "Mon–Fri 8:30–5 · Sat by appointment",
    tagline: "Lush Property — homes for real life.",
  },
  valueProp: {
    heading: "New to buying? I've got you.",
    body: "Free bond & affordability guidance before you make an offer — no pressure.",
  },
  quickLinks: [
    { label: "My listings", href: "/listings", icon: "home" },
    { label: "List with me", href: "/list-your-property", icon: "plus" },
    { label: "Bond calculator", href: "/tools/bond", icon: "calculator" },
    { label: "Affordability", href: "/tools/affordability", icon: "chart" },
    { label: "About Lush", href: "/about", icon: "info" },
  ],
};
