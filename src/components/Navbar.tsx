import { SiFrontendmentor, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "./ui";
import { twJoin } from "tailwind-merge";

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
    <nav
      className={twJoin([
        "absolute left-1/2 -translate-x-1/2 p-5 inline-flex min-w-40 flex-col items-center gap-5",
        "md:left-0 md:-translate-0 md:min-w-auto md:w-full md:flex-row md:justify-between",
        "lg:max-w-5xl lg:left-1/2 lg:-translate-x-1/2",
      ])}
    >
      <h1 className="text-2xl">Made_By_Kim</h1>
      <ul className="flex justify-between w-full md:justify-end gap-4">
        {socialIcons.map((item, index) => (
          <Link key={index} intent="icon" href={item.href} target="_blank">
            {item.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
