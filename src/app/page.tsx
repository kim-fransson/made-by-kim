import { Introduction } from "@/components/Introduction";
import { ProjectList } from "@/components/ProjectList";
import { Separator } from "@/components/ui";

export default function Home() {
  return (
    <div className="grid px-4 pb-32 lg:max-w-5xl lg:mx-auto">
      <section>
        <Introduction />
      </section>

      <Separator />

      <section>
        <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-12">
          Projects
        </h2>
        <ProjectList />
      </section>
    </div>
  );
}
