import { Link } from "./ui";

export const Introduction = () => {
  const started = new Date("2018-09-01");
  const now = new Date();
  const yearsOfExperience = now.getFullYear() - started.getFullYear() - 1;

  return (
    <section className="flex flex-col gap-10 justify-center items-center min-h-svh ">
      <h1 className="text-balance text-center">
        Hello! I&rsquo;m <strong className="decoration-4">Kim Fransson</strong>.
      </h1>
      <p className="text-center text-balance">
        Experienced frontend engineer with{" "}
        <strong>+{yearsOfExperience} years</strong> of building apps and a solid
        mix of frontend and backend skills for creating full-stack solutions.
      </p>

      <Link intent="cta" href="/resume.pdf" target="_blank">
        resume
      </Link>
    </section>
  );
};
