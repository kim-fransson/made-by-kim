import { twJoin } from "tailwind-merge";
import { ProfileImage } from "./ProfileImage";
import { Link } from "./ui";

export const Introduction = () => {
  const started = new Date("2018-09-01");
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - started.getFullYear() - 1;

  return (
    <div className={twJoin(["flex flex-col items-center", "md:flex-row"])}>
      <ProfileImage className="md:order-2 md:-mr-4 lg:mr-0" />
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-balance text-center mt-8 md:text-left md:text-6xl lg:text-7xl">
          Hello! I&rsquo;m{" "}
          <strong className="underline decoration-4 underline-offset-6 decoration-primary">
            Kim Fransson
          </strong>
          .
        </h2>
        <p className="text-center text-balance mt-6 md:text-left md:text-lg md:mt-12 lg:max-w-[445px]">
          Experienced frontend engineer with{" "}
          <strong className="underline decoration-2 underline-offset-6 decoration-primary">
            +{yearsOfExperience} years
          </strong>{" "}
          of building apps and a solid mix of frontend and backend skills for
          creating full-stack solutions.
        </p>

        <Link
          className="mt-8 md:mt-12"
          intent="cta"
          href="/resume.pdf"
          target="_blank"
        >
          resume
        </Link>
      </div>
    </div>
  );
};
