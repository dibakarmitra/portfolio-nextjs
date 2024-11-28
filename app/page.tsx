import Image from "next/image";
import { socialLinks, metaData } from "config/metadata";
import Link from "next/link";

export default function Page() {
  return (
    <article className="py-8">
      <header className="mb-8">
        <div className="sm:float-right sm:ml-5 sm:mb-5">
          <a 
            href={socialLinks.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LinkedIn Profile"
          >
            <Image
              src="/profile.jpg"
              alt={`${metaData.title} Profile Photo`}
              className="rounded-full bg-gray-100 lg:mt-5 mt-0 lg:mb-5 mb-10 grayscale hover:grayscale-0 transition-all"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>
        </div>
        
        <h1 className="mb-4 text-2xl font-medium tracking-tight">
          {metaData.title}
          <span className="text-base text-gray-500 ml-2">| {metaData.jobTitle}</span>
        </h1>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="lead">{metaData.description}</p>
        
        <section aria-labelledby="expertise-heading">
          <h2 id="expertise-heading" className="text-xl font-medium mt-6 mb-4">Expertise</h2>
          <ul className="list-disc pl-5 space-y-1">
            {metaData.expertise.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <p>
            Currently leading software development at{" "}
            <strong>{metaData.currentCompany}</strong>, with previous experience 
            at {metaData.previousCompany}. I've developed multiple projects including{" "}
            <Link href="/resume" className="underline hover:text-primary transition-colors">
              {metaData.projects.join(" and ")}
            </Link>.
          </p>
        </section>

        <section className="mt-6">
          <p>
            Connect with me on{" "}
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              LinkedIn
            </a>{" "}
            or check out my{" "}
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              GitHub
            </a>.
          </p>
        </section>
      </div>
    </article>
  );
}