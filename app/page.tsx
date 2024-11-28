import { metaData } from "config/metadata";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import BlogPost from "./components/BlogPost";
import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="flex flex-col space-y-16 md:space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-8 lg:pt-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              SOFTWARE <span className="text-orange-500">ENGINEER</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {metaData.description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
              <a
                href="https://github.com/dibakar95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
              >
                View GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
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
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-orange-50 dark:bg-orange-950/10 -skew-y-3 transform"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-6 md:py-8">
          <div className="p-4 md:p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
              <span className="text-3xl md:text-4xl font-bold text-orange-500">12+</span>
              <h3 className="text-lg md:text-xl font-semibold">Years Experience</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Building digital solutions</p>
            </div>
          </div>
          
          <div className="p-4 md:p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
              <span className="text-3xl md:text-4xl font-bold text-orange-500">50+</span>
              <h3 className="text-lg md:text-xl font-semibold">Projects Completed</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">From concept to deployment</p>
            </div>
          </div>
          
          <div className="p-4 md:p-6 bg-white/50 dark:bg-gray-900/50 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
              <span className="text-3xl md:text-4xl font-bold text-orange-500">100%</span>
              <h3 className="text-lg md:text-xl font-semibold">Client Satisfaction</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Delivering excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
          RECENT <span className="text-orange-500">PROJECTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ProjectCard 
            title="NojmAi"
            description="AI & ML web projects"
            link="https://nojm.ai"
          />
          {/* Add more project cards */}
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
      <section className="space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
          PREMIUM <span className="text-orange-500">TOOLS</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {["Framer", "Figma", "Lemon Squeezy", "Shopify", "Notion", "Vercel"].map((tool) => (
            <div
              key={tool}
              className="p-3 md:p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/20 hover:text-orange-500 dark:hover:text-orange-400 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center text-sm md:text-base font-medium"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Design Thoughts */}
      <section className="space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
          DESIGN <span className="text-orange-500">THOUGHTS</span>
        </h2>
        <div className="space-y-4 md:space-y-6">
          <BlogPost 
            title="Starting and Growing a Career in Web Design"
            date="Jul 8, 2023"
          />
          {/* Add more blog posts */}
        </div>
      </section>

      {/* Contact Form */}
      <section className="space-y-6 md:space-y-8 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
          LET'S WORK <span className="text-orange-500">TOGETHER</span>
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}