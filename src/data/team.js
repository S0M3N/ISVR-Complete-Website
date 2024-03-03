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
  { name: "team10", extension: "jpg" },
  { name: "team_d", extension: "jpg" },
  { name: "vidhya_sagar", extension: "jpg" },
  { name: "lovey_tyagi", extension: "jpg" },
  { name: "ashish", extension: "jpeg" },
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
    name: "Vidya Sagar Rao",
    field: "Chief Advisory Board Member",
    linkedin: "",
    image: importedImages[11],
  },
  {
    id: 6,
    name: "Prof. Rajesh Chandra",
    field: "Hon. Advisory Board Member   ||   Ret. Prof. IIT Roorkee",
    linkedin: "",
    image: importedImages[9],
  },
  {
    id: 9,
    name: "Ashish Tyagi",
    field: "Advisory Board Member",
    linkedin: "#",
    image: importedImages[13],
  },
  {
    id: 7,
    name: "Dr. Paul Zilberman",
    field: "Advisory Board Member",
    linkedin: "https://www.linkedin.com/in/paul-zilberman-a47b3b25/",
    image: importedImages[4],
  },
  {
    id: 5,
    name: "Lovey Tyagi",
    field: "Advisory Board Member",
    linkedin: "",
    image: importedImages[12],
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
    name: "Somen Samanta",
    field: "Chief Information Officer",
    linkedin: "https://www.linkedin.com/in/somensamantacse/",
    image: importedImages[6],
  },
  {
    id: 3,
    name: "Vikas Pundir",
    field: "Drone Pilot",
    linkedin: "https://www.linkedin.com/in/#/",
    image: importedImages[10],
  },
];
