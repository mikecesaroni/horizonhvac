export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [{ label: "All Services", href: "/services" }],
  },
  { label: "Financing", href: "/financing" },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: [{ label: "All Service Areas", href: "/service-areas" }],
  },
  { label: "Deals", href: "/deals" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
