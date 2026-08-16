export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "D Sumanth Chandra",
    role: "Chief Executive Officer",
    photo: "/team/sumanth.png",
  },
  {
    name: "P Manikanta Kowsik",
    role: "Chief Product Officer",
    photo: "/team/kowsik.png",
  },
  {
    name: "Ch Vamsi Krishna",
    role: "Chief Technology Officer",
    photo: "/team/vamsi.png",
  },
];
