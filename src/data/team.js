const imageFiles = [
  { name: "team1", extension: "png" },
  { name: "team2", extension: "png" },
  { name: "team3", extension: "png" },
  { name: "team4", extension: "png" },
  { name: "team5", extension: "jpeg" },
  { name: "team6", extension: "jpeg" },
  { name: "team7", extension: "jpeg" },
  { name: "team8", extension: "jpg" },
  { name: "team9", extension: "jpg" },
];

const importImage = (filename) => {
  return require(`../img/team/${filename}`);
};

const importedImages = imageFiles.map((file) =>
  importImage(`${file.name}.${file.extension}`)
);

export const advisory = [
  {
    id: 1,
    name: "Prof. Thais Russomano",
    field: "Space Medicine Expert",
    linkedin: "https://www.linkedin.com/in/thaisrussomano/",
    image: importedImages[0],
  },
  {
    id: 2,
    name: "Jacob Løfdahl",
    field: "Danish Knowledge Management",
    linkedin: "https://www.linkedin.com/in/jacob-loefdahl/",
    image: importedImages[1],
  },
  {
    id: 3,
    name: "Andy Gray",
    field: "Stem Education Expert",
    linkedin: "https://www.linkedin.com/in/andy-gray-2961b75b/",
    image: importedImages[2],
  },
  {
    id: 4,
    name: "Simon Gwozdz",
    field: "Rocket Expert",
    linkedin: "https://www.linkedin.com/in/simongwozdz/",
    image: importedImages[3],
  },
  {
    id: 5,
    name: "Dr. Paul Zilberman",
    field: "Advisory Board Member",
    linkedin: "https://www.linkedin.com/in/paul-zilberman-a47b3b25/",
    image: importedImages[4],
  },
  {
    id: 5,
    name: "Deepak Kaushik",
    field: "Advisory Board Member || Future Warrior Defense Academy",
    linkedin: "",
    image: importedImages[8],
  },
];

export const team = [
  {
    id: 1,
    name: "Er. Ankit Kumar",
    field: "Founder | Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/ankit-chaudhary-1a75a0162/",
    image: importedImages[5],
  },
  {
    id: 2,
    name: "Samil Mahapatra",
    field: "Chief Operative Officer",
    linkedin: "https://www.linkedin.com/in/samil-mahapatra/",
    image: importedImages[7],
  },
  {
    id: 3,
    name: "Somen Samanta",
    field: "Developer",
    linkedin: "https://www.linkedin.com/in/somensamantacse/",
    image: importedImages[6],
  },
];
