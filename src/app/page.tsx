import { Introduction } from "@/components/Introduction";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <div className="grid px-4 pb-32 lg:max-w-5xl lg:mx-auto">
      <Introduction />
      <ProjectList />
    </div>
  );
}
