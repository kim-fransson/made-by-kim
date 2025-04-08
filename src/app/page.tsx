import { ProfileImage } from "@/components/ProfileImage";
import { ProjectList } from "@/components/ProjectList";
import { Separator } from "@/components/ui";

export default function Home() {
  return (
    <div className="grid px-4 pb-32">
      <section className="flex flex-col items-center">
        <ProfileImage />
        <h2 className="text-4xl font-bold text-balance text-center mt-8">
          Nice to meet you! I&rsquo;m{" "}
          <span className="underline decoration-4 underline-offset-6 decoration-primary">
            Kim Fransson
          </span>
          .
        </h2>
        <p className="text-center text-balance mt-6">
          Based in the Sweden, I&rsquo;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
      </section>

      <Separator />

      <section>
        <h2 className="text-4xl font-bold text-balance mb-12">Projects</h2>
        <ProjectList />
      </section>
    </div>
  );
}
