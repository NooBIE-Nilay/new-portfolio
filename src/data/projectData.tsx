import TwistTacToe from "@/components/ProjectComponents/TwistTacToe";
import x_o from "@/assets/o_x.gif";
import portfolio from "@/assets/portfolio.png";
import { CardType } from "@/components/ui/apple-cards-carousel";
export const ProjectDetails: CardType[] = [
  {
    category: "Web Based Game",
    title: "Twist Tac Toe",
    src: x_o,
    content: <TwistTacToe />,
    github_link: "https://github.com/NooBIE-Nilay/twist-tac-toe",
    live_link: "https://xo.nilaycodes.in",
  },
  {
    category: "Frontend",
    title: "Portfolio Website",
    src: portfolio,
    content: <TwistTacToe />,
    github_link: "https://github.com/NooBIE-Nilay/nilay-portfolio",
    live_link: "https://nilaycodes.in",
  },
];
