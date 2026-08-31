import { services } from "./services";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

// Header and Footer both render from this list, so adding a page here surfaces it
// in both places — and, just as importantly, gives it internal links. Pages with
// no internal links pointing at them are the ones crawlers and AI assistants miss.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Licensing & Credentials", href: "/credentials" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
    ],
  },
  { label: "Financing", href: "/financing" },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: [{ label: "All Service Areas", href: "/service-areas" }],
  },
  { label: "Maintenance Plans", href: "/maintenance-plans" },
  {
    label: "Deals",
    href: "/deals",
    children: [
      { label: "Current Deals", href: "/deals" },
      { label: "$99 Tune-Up", href: "/tune-up" },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "24/7 Emergency", href: "/emergency" },
];
