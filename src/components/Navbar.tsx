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
    <nav className="absolute left-1/2 -translate-x-1/2 top-5 inline-flex min-w-40 flex-col items-center gap-5">
      <h1 className="text-2xl">Made_By_Kim</h1>
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
