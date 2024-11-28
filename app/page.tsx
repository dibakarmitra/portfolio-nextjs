import { metaData } from "config/metadata";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import BlogPost from "./components/BlogPost";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col space-y-24">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              SOFTWARE <span className="text-orange-500">ENGINEER</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              {metaData.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dibakar95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
              >
                View GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-900 dark:text-white bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt="Dibakar"
              className="relative rounded-full object-cover w-full h-full shadow-2xl ring-4 ring-orange-500/20"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Insights Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-orange-50 dark:bg-orange-950/10 -skew-y-3 transform"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl font-bold text-orange-500">12+</span>
              <h3 className="text-xl font-semibold">Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">Building digital solutions</p>
            </div>
          </div>
          
          <div className="p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl font-bold text-orange-500">50+</span>
              <h3 className="text-xl font-semibold">Projects Completed</h3>
              <p className="text-gray-600 dark:text-gray-400">From concept to deployment</p>
            </div>
          </div>
          
          <div className="p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-4xl font-bold text-orange-500">100%</span>
              <h3 className="text-xl font-semibold">Client Satisfaction</h3>
              <p className="text-gray-600 dark:text-gray-400">Delivering excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          RECENT <span className="text-orange-500">PROJECTS</span>
        </h2>
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
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          12 YEARS OF <span className="text-orange-500">EXPERIENCE</span>
        </h2>
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
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          PREMIUM <span className="text-orange-500">TOOLS</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Framer", "Figma", "Lemon Squeezy", "Shopify", "Notion", "Vercel"].map((tool) => (
            <div
              key={tool}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/20 hover:text-orange-500 dark:hover:text-orange-400 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center font-medium"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Design Thoughts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold mb-8">
          DESIGN <span className="text-orange-500">THOUGHTS</span>
        </h2>
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
      <section className="space-y-8 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          LET'S WORK <span className="text-orange-500">TOGETHER</span>
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}