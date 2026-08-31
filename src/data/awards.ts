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
    description: "Barcelona's largest student hackathon, held at UPC.",
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
      "Regional round of ICPC, the worldwide competitive programming contest for university teams.",
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
    description: "National rounds of the secondary-school science olympiads.",
    items: [
      { label: "Gold Medal", year: "2020", detail: "Informatics" },
      { label: "Gold Medal", year: "2020", detail: "Physics" },
      { label: "Silver Medal", year: "2020", detail: "Mathematics" },
    ],
  },
  {
    // Placements verified against the official SCM/Cangur prize lists:
    //   2020 Silver Pin: https://cangur.org/cangur/cang2020/
    //   2018, 1st of 4t ESO with 141.25 pts: https://cangur.org/cangur/cang2018/informacions/premis/index.php
    //   2017, "8, ex aequo" of 3r ESO: https://cangur.org/cangur/cang2017/premis/index.php
    title: "Silver Pin",
    org: "Catalan Math Kangaroo",
    year: "2016-2020",
    description:
      "Best performer overall of the Catalan edition of the Kangaroo mathematics contest.",
    items: [
      // https://cangur.org/cangur/cang2020/
      { label: "Silver Pin", year: "2020" },
      // https://www.cangur.org/cangur/cang2019/informacions/premis/
      // "Premi de categoria A", 126 pts ex aequo, joint 4th of the level
      {
        label: "4th place in Catalonia, ex aequo",
        year: "2019",
        detail: "1st Batxillerat (grade 11)",
      },
      {
        label: "1st place in Catalonia",
        year: "2018",
        detail: "4th ESO (grade 10)",
      },
      {
        label: "8th place in Catalonia",
        year: "2017",
        detail: "3rd ESO (grade 9)",
      },
      // https://cangur.org/cangur/cang2016/premis.php
      // "Premi de categoria A", 138,75 pts, 5th-highest score of the level
      {
        label: "5th place in Catalonia",
        year: "2016",
        detail: "2nd ESO (grade 8)",
      },
    ],
  },
];
