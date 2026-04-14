import type { Route } from "./+types/home";
import Navbar from '~/routes/components/Navbar';
import { resumes } from '~/constants';
import ResumeCard from '~/routes/components/ResumeCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for yor dream job !" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1> Track your Applications & Resume Ratings </h1>
          <h2> Review your submissions and check AI-powered feedback. </h2>
        </div>
        {resumes.length > 0 && (
          <div className="flex gap-6 flex-wrap justify-center">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
