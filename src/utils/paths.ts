import { RiTwitterXLine, RiInstagramLine, RiDiscordLine, RiFacebookBoxLine, RiMailAddLine } from "react-icons/ri";

export type HeaderLink = {
    title: string;
    href: string;
}

const routePaths = {
    blog: {
        path: "/blog"
    },
    about: {
        path: "#about"
    },
    services: {
        path: "#services"
    },
    partners: {
        path: "#partners"
    },
    team: {
        path: "#team"
    },
    contact: {
        path: "#contact"
    },
}

export const headerLinks: HeaderLink[] = [
    { title: "Services", href: routePaths.services.path },
    { title: "About us", href: routePaths.about.path },
    { title: "Team", href: routePaths.team.path },
    { title: "Partners", href: routePaths.partners.path },
    { title: "Contact us", href: routePaths.contact.path },
    { title: "Blog", href: routePaths.blog.path },
];

export const socialLinksWithIcons = [
    {
        label: "X",
        href: "",
        icon: RiTwitterXLine
    },
    {
        label: "Instagram",
        href: "",
        icon: RiInstagramLine
    },
    {
        label: "Discord",
        href: "",
        icon: RiDiscordLine
    },
    {
        label: "Facebook",
        href: "",
        icon: RiFacebookBoxLine
    },
    {
        label: "Email",
        href: "",
        icon: RiMailAddLine
    },
]


export default routePaths;