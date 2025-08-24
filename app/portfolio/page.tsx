import Portfolio from "@/pages/portfolio/portfolio";
import { Project } from "@/pages/portfolio/portfolio.types";

export default function Page() {
    const projects: Project[] = [];


    return (
        <Portfolio projects={projects} />
    )
}
