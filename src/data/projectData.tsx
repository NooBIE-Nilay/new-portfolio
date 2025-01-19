import TwistTacToe from "@/components/ProjectComponts/TwistTacToe";
type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};
export const ProjectDetails: Card[] = [
  {
    category: "Web Based Game",
    title: "Twist Tac Toe",
    src: "https://assets.aceternity.com/macbook.png",
    content: <TwistTacToe />,
  },
  {
    category: "Frontend",
    title: "Portfolio Website",
    src: "https://assets.aceternity.com/macbook.png",
    content: <TwistTacToe />,
  },
];
