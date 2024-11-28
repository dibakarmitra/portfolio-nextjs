import { metaData } from "config/metadata";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import BlogPost from "./components/BlogPost";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col gap-16 py-8 dark:text-white">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">SOFTWARE ENGINEER</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          {metaData.description}
        </p>
        
        {/* Stats */}
        <div className="flex gap-8 mt-8">
          <div>
            <span className="text-3xl font-bold">+12</span>
            <p className="text-gray-600 dark:text-gray-400">Projects</p>
          </div>
          <div>
            <span className="text-3xl font-bold">+46</span>
            <p className="text-gray-600 dark:text-gray-400">Clients</p>
          </div>
          <div>
            <span className="text-3xl font-bold">+20</span>
            <p className="text-gray-600 dark:text-gray-400">Awards</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkillCard 
          title="DYNAMIC ANIMATION"
          subtitle="MOTION DESIGN"
          color="bg-orange-500"
        />
        <SkillCard 
          title="FRAMER, FIGMA"
          subtitle="WORDPRESS, REACTJS"
          color="bg-lime-400"
        />
      </section>

      {/* Recent Projects */}
      <section>
        <h2 className="text-3xl font-bold mb-8">RECENT PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard 
            title="NojmAi"
            description="AI & ML web projects"
            color="bg-purple-500"
          />
          <ProjectCard 
            title="Nashra"
            description="News web template"
            color="bg-gray-100"
          />
          <ProjectCard 
            title="Ruya"
            description="Portfolio template"
            color="bg-pink-400"
          />
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold mb-8">12 YEARS OF EXPERIENCE</h2>
        <div className="space-y-8">
          <ExperienceCard 
            company="PixelForge Studios"
            period="Jan 2023 - Present"
            description="Led development of innovative digital solutions across mobile and web platforms"
          />
          <ExperienceCard 
            company="BlueWave Innovators"
            period="Jan 2021 - Dec 2022"
            description="Managed web development projects and mentored junior engineers"
          />
          <ExperienceCard 
            company="TrendCraft Solutions"
            period="Mar 2019 - Nov 2021"
            description="Developed user-centric web applications and solutions"
          />
        </div>
      </section>

      {/* Premium Tools */}
      <section>
        <h2 className="text-3xl font-bold mb-8">PREMIUM TOOLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Framer", "Figma", "Lemon Squeezy", "Shopify", "Notion", "Vercel"].map((tool) => (
            <div key={tool} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Design Thoughts */}
      <section>
        <h2 className="text-3xl font-bold mb-8">DESIGN THOUGHTS</h2>
        <div className="space-y-6">
          <BlogPost 
            title="Starting and Growing a Career in Web Design"
            date="Jul 8, 2023"
          />
          <BlogPost 
            title="Create a Landing Page That Performs Great"
            date="Jun 15, 2023"
          />
          <BlogPost 
            title="How Can Designers Prepare for the Future?"
            date="May 25, 2023"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-3xl font-bold mb-8">LET'S WORK TOGETHER</h2>
        <ContactForm />
      </section>
    </div>
  );
}