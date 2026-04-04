export const mainNav = [
  {
    label: "Fietsen",
    href: "/fietsen",
    hasMegaMenu: true,
    megaMenu: {
      categories: [
        { label: "Stadsfietsen",     href: "/fietsen/stadsfietsen" },
        { label: "Transportfietsen", href: "/fietsen/transportfietsen" },
        { label: "E-Bikes",          href: "/fietsen/e-bikes" },
        { label: "Mountainbikes",    href: "/fietsen/mountainbikes" },
        { label: "Kinderfietsen",    href: "/fietsen/kinderfietsen" },
        { label: "Vouwfietsen",      href: "/fietsen/vouwfietsen" },
      ],
      brands: [
        "Daily Dutch", "Altec", "Cortina", "Gazelle",
        "Umit", "Volare", "E-Lett"
      ],
    },
  },
  { label: "E-Bikes",     href: "/e-bikes",     hasMegaMenu: false },
  { label: "Accessoires", href: "/accessoires",  hasMegaMenu: false },
  { label: "Werkplaats",  href: "/werkplaats",   hasMegaMenu: false },
  { label: "Contact",     href: "/contact",      hasMegaMenu: false },
];
