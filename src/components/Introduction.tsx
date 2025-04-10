import { twJoin } from "tailwind-merge";
import { ProfileImage } from "./ProfileImage";

export const Introduction = () => {
  const started = new Date("2018-09-01");
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - started.getFullYear() - 1;

  return (
    <div className={twJoin(["flex flex-col items-center", "md:flex-row"])}>
      <ProfileImage className="md:order-2 md:-mr-4" />
      <div>
        <h2 className="text-4xl font-bold text-balance text-center mt-8 md:text-left md:text-6xl lg:text-7xl">
          Thanks for stopping by! I&rsquo;m{" "}
          <span className="underline decoration-4 underline-offset-6 decoration-primary">
            Kim Fransson
          </span>
          .
        </h2>
        <p className="text-center text-balance mt-6 md:text-left md:text-lg md:mt-12 lg:max-w-[445px]">
          Detail-oriented frontend engineer with{" "}
          <strong>+{yearsOfExperience} years</strong> of experience, including
          building applications from the backend side, bringing expertise in
          both frontend and backend development to create robust, end-to-end
          solutions.
        </p>
      </div>
    </div>
  );
};
