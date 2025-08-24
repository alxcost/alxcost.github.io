import { Tag } from "react-tagcloud";

export type Project = {
    id?: string;
    title: string;
    summary: string;
    description: string | TrustedHTML;
    imageUrl: string;
    date?: string;
    roles?: string[];
    experience?: { category?: string, tech: string[] }[];
    links?: { label: string; href: string }[];
};

export type Props = { projects: Project[]; };

export type TechTag = Tag & { category: string };