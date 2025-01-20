import TwistTacToe from "@/components/ProjectComponents/TwistTacToe";
import x_o from "@/assets/o_x.gif";
import portfolio from "@/assets/portfolio.gif";
import { CardType } from "@/components/ui/apple-cards-carousel";
import OldPortfolio from "@/components/ProjectComponents/OldPortfolio";
import { data } from "./data";
export const ProjectDetails: CardType[] = [
  {
    category: "Web Based Game",
    title: "Twist Tac Toe",
    src: x_o,
    content: <TwistTacToe />,
    github_link: data.project_links.twist_tac_toe.github,
    live_link: data.project_links.twist_tac_toe.live,
    skills: data.project_links.twist_tac_toe.stack,
  },
  {
    category: "Frontend",
    title: "Portfolio Website [Old]",
    src: portfolio,
    content: <OldPortfolio />,
    github_link: data.project_links.old_portfolio.github,
    live_link: data.project_links.old_portfolio.live,
    skills: data.project_links.twist_tac_toe.stack,
  },
];
