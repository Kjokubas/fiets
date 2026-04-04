export const workshopServices = [
  { id: 1, title: "Reparatie & Onderhoud", description: "Vaak binnen 30-60 minuten klaar", icon: "wrench" },
  { id: 2, title: "Professionele Montage", description: "Elke fiets rijklaar afgeleverd",   icon: "settings" },
  { id: 3, title: "E-Bike Service",        description: "Diagnose en reparatie alle merken", icon: "zap" },
];

export const maintenancePackage = {
  name: "Onderhoudsbeurt",
  price: 59,
  originalPrice: 89,
  includes: [
    "Ketting spannen en smeren",
    "Versnelling afstellen",
    "Banden op spanning brengen",
    "Remmen afstellen",
    "Verlichting controleren",
    "Boutjes/moertjes controleren en aandraaien",
  ],
};
