import type { Route } from "./+types/home";
import Navbar from '~/routes/components/Navbar';
import { resumes } from '~/constants';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for yor dream job !" },
  ];
}

export default function Home() {
  return <main className= "bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
<section className="main-section">
  <div className="page-heading">
    <h1> Track your Applications & Resume Ratings </h1>
    <h2> Review your submissions and check AI-powered feedback. </h2>

  </div>

</section>
    <div className="Resume-section">

    </div>
    {resumes.map(resume => (
      <ResumeCard key = {resume.id} resume = {resume} />

      ))}
  </main>
}
