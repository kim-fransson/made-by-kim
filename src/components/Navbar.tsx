import { SiFrontendmentor, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "./ui";

const socialIcons = [
  {
    href: "https://github.com/kim-fransson",
    icon: <SiGithub size={20} />,
  },
  {
    href: "https://www.frontendmentor.io/profile/kim-fransson",
    icon: <SiFrontendmentor size={20} />,
  },
  {
    href: "https://www.linkedin.com/in/kim-fransson-b714ba215/",
    icon: <SiLinkedin size={20} />,
  },
];

export const Navbar = () => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-5 inline-flex min-w-40 flex-col items-center gap-5">
      <span className="text-2xl">Made_By_Kim</span>
      <ul className="flex justify-between w-full">
        {socialIcons.map((item, index) => (
          <Link key={index} intent="icon" href={item.href} target="_blank">
            {item.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
