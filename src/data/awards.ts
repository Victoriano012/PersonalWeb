import type { Award } from "./types";

export const awards: Award[] = [
  {
    title: "Postgraduate Fellowship",
    org: "la Caixa Foundation",
    year: "2025-2027",
    description:
      "Spain's most prestigious graduate fellowship, providing full tuition and stipend for two years.",
  },
  {
    title: "Honors Program Scholarship",
    org: "CFIS, UPC",
    year: "2020-2025",
    description:
      "Spain's most prestigious STEM undergrad program, providing full undergraduate tuition.",
  },
  {
    title: "Winner",
    org: "HackUPC",
    year: "2024",
    description:
      "Barcelona's largest student hackathon, held at UPC.",
  },
  {
    title: "First Prize",
    org: "International Mathematics Competition for University Students",
    year: "2022 & 2024",
    description:
      "The IMC is an annual individual contest gathering participants from universities worldwide.",
    items: [
      { label: "First Prize", year: "2024" },
      { label: "First Prize", year: "2022" },
    ],
  },
  {
    title: "Silver and Bronze Medals",
    org: "SWERC ICPC",
    year: "2022-2024",
    description:
      "Regional round of ICPC, the competitive programming contest for university teams across Europe.",
    items: [
      { label: "Silver Medal", year: "2024" },
      { label: "Bronze Medal", year: "2023" },
      { label: "Bronze Medal", year: "2022" },
    ],
  },
  {
    title: "Gold and Silver Medals",
    org: "Spanish National Olympiads",
    year: "2020",
    description:
      "National rounds of the secondary-school science olympiads.",
    items: [
      { label: "Gold Medal", year: "2020", detail: "Informatics" },
      { label: "Gold Medal", year: "2020", detail: "Physics" },
      { label: "Silver Medal", year: "2020", detail: "Mathematics" },
    ],
  },
  {
    title: "Top Student of the Cohort",
    org: "Catalan Math Kangaroo",
    year: "2016-2020",
    description:
      "Catalan edition of the international Kangaroo mathematics contest.",
  },
];
