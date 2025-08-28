import TwistTacToe from "@/components/ProjectComponents/TwistTacToe";
import x_o from "@/assets/o_x.gif";
import sfgifts from "@/assets/sfgifts-prod.jpeg";
import old_portfolio from "@/assets/portfolio.gif";
import { CardType } from "@/components/ui/apple-cards-carousel";
import OldPortfolio from "@/components/ProjectComponents/OldPortfolio";
import { data } from "./data";
import SignatureFactory from "@/components/ProjectComponents/SignatureFactory";
export const ProjectDetails: CardType[] = [
  {
    category: "Full Stack",
    title: "Signature Factory",
    src: sfgifts,
    content: <SignatureFactory />,
    live_link: data.project_links.sfgifts.live,
    skills: data.project_links.sfgifts.stack,
    type: "freelance",
  },
  {
    category: "Web Based Game",
    title: "Twist Tac Toe",
    src: x_o,
    content: <TwistTacToe />,
    github_link: data.project_links.twist_tac_toe.github,
    live_link: data.project_links.twist_tac_toe.live,
    skills: data.project_links.twist_tac_toe.stack,
    type: "project",
  },
  {
    type: "project",
    category: "Frontend",
    title: "Portfolio Website [Old]",
    src: old_portfolio,
    content: <OldPortfolio />,
    github_link: data.project_links.old_portfolio.github,
    live_link: data.project_links.old_portfolio.live,
    skills: data.project_links.twist_tac_toe.stack,
  },
];
