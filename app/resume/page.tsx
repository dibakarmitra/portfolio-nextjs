import "@/styles/print.css";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { resumeData } from '@/lib/resume';

export const metadata = {
  title: 'Resume - Dibakar Mitra',
  description: 'Professional resume and work experience of Dibakar Mitra',
};

export default function ResumePage() {
  return (
    <div id="resume" className="py-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{resumeData.name}</h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">{resumeData.title}</h2>

        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
          <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 hover:text-orange-500">
            <HiMail className="text-lg" />
            <span>{resumeData.email}</span>
          </a>
          {resumeData.phone && (
            <a href={`tel:${resumeData.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-orange-500">
              <HiPhone className="text-lg" />
              <span>{resumeData.phone}</span>
            </a>
          )}
          <span className="flex items-center gap-2">
            <HiLocationMarker className="text-lg" />
            <span>{resumeData.location}</span>
          </span>
        </div>

        <div className="flex gap-4 mb-8">
          <a
            href={resumeData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 bg-gray-100 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={resumeData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 bg-gray-100 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={resumeData.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 bg-gray-100 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-orange-900/20 rounded-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {resumeData.about}
        </p>

        <button className="print:hidden flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
          <FaDownload />
          <span>Download Resume</span>
        </button>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Skills and Languages */}
        <div className="space-y-8">
          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            {Object.entries(resumeData.skills).map(([category, skills]: [string, string[]]) => (
              <div key={category} className="mb-4">
                <h4 className="text-lg font-semibold mb-2 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-lg hover:from-orange-50 hover:to-orange-100 dark:hover:from-orange-900/20 dark:hover:to-orange-900/10 transition-colors group"
                    >
                      <span className="text-sm group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {skill}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <div className="grid grid-cols-1 gap-3">
              {resumeData.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-lg hover:from-orange-50 hover:to-orange-100 dark:hover:from-orange-900/20 dark:hover:to-orange-900/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span className="font-medium group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{lang.name}</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Experience, Education, and Certifications */}
        <div className="md:col-span-2 space-y-12">
          {/* Experience */}
          <section>
            <h3 className="text-xl font-bold mb-6">Experience</h3>
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-orange-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full" />
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold">{exp.position}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-orange-500">{exp.period}</p>
                        <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-1 mt-2 text-gray-600 dark:text-gray-400">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="pl-0">{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold mb-6">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-orange-500 mb-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full" />
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-orange-500">{edu.period}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                    </div>
                  </div>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-1 mt-2 text-gray-600 dark:text-gray-400">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="pl-0">{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            <div className="space-y-6">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-orange-500">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full" />
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold">{cert.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-orange-500">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}