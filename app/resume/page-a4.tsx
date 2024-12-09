import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { ResumeSkills } from '@/types/resume';
import { resumeData } from '@/lib/resume';

export const metadata = {
  title: 'Resume - Dibakar Mitra',
  description: 'Professional resume and work experience of Dibakar Mitra',
};

export default function ResumePage() {
  return (
    <div className="bg-white dark:bg-gray-900 print:bg-white min-h-screen flex justify-center items-center p-4 print:p-0">
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white dark:bg-gray-800 print:dark:bg-white shadow-2xl print:shadow-none border print:border-gray-300 print:border print:m-0 p-12 print:p-8 space-y-8">
        {/* Header */}
        <header className="border-b pb-6 mb-8 print:border-b-2 print:border-black">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white print:text-black">
                {resumeData.name}
              </h1>
              <h2 className="text-2xl text-orange-600 font-semibold mt-2 print:text-black">
                {resumeData.title}
              </h2>
            </div>
            <div className="text-right text-sm text-gray-600 dark:text-gray-300 print:text-black">
              <p>{resumeData.email}</p>
              {resumeData.phone && <p>{resumeData.phone}</p>}
              <p>{resumeData.location}</p>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-8 print:mb-6">
          <p className="text-gray-700 dark:text-gray-300 print:text-black">
            {resumeData.about}
          </p>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8 print:gap-6">
          {/* Left Column - Skills and Languages */}
          <div className="col-span-1 space-y-8 print:space-y-6">
            {/* Skills */}
            <section>
              <h3 className="text-xl font-semibold border-b pb-2 mb-4 print:border-b-2 print:border-black">
                Skills
              </h3>
              {Object.entries(resumeData.skills).map(([category, skills]: [string, string[]]) => (
                <div key={category} className="mb-4 print:mb-3">
                  <h4 className="text-base font-medium text-orange-600 print:text-black mb-2 capitalize">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded print:bg-white print:border print:border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-xl font-semibold border-b pb-2 mb-4 print:border-b-2 print:border-black">
                Languages
              </h3>
              <div className="space-y-2 print:space-y-1">
                {resumeData.languages.map((lang, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between text-sm print:text-xs"
                  >
                    <span className="font-medium print:text-black">{lang.name}</span>
                    <span className="text-gray-600 dark:text-gray-400 print:text-black">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Experience, Education, and Certifications */}
          <div className="col-span-2 space-y-8 print:space-y-6">
            {/* Experience */}
            <section>
              <h3 className="text-xl font-semibold border-b pb-2 mb-4 print:border-b-2 print:border-black">
                Professional Experience
              </h3>
              <div className="space-y-6 print:space-y-4">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="print:break-inside-avoid">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="text-base font-semibold print:text-black">{exp.position}</h4>
                        <p className="text-orange-600 print:text-black">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-600 dark:text-gray-400 print:text-black">{exp.period}</p>
                        <p className="text-gray-500 dark:text-gray-500 print:text-black">{exp.location}</p>
                      </div>
                    </div>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="text-sm list-disc pl-5 text-gray-700 dark:text-gray-300 print:text-black">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-semibold border-b pb-2 mb-4 print:border-b-2 print:border-black">
                Education
              </h3>
              <div className="space-y-6 print:space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="print:break-inside-avoid">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="text-base font-semibold print:text-black">{edu.degree}</h4>
                        <p className="text-orange-600 print:text-black">{edu.school}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="text-gray-600 dark:text-gray-400 print:text-black">{edu.period}</p>
                        <p className="text-gray-500 dark:text-gray-500 print:text-black">{edu.location}</p>
                      </div>
                    </div>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="text-sm list-disc pl-5 text-gray-700 dark:text-gray-300 print:text-black">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xl font-semibold border-b pb-2 mb-4 print:border-b-2 print:border-black">
                Certifications
              </h3>
              <div className="space-y-4 print:space-y-3">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between print:break-inside-avoid">
                    <div>
                      <h4 className="text-base font-semibold print:text-black">{cert.name}</h4>
                      <p className="text-orange-600 print:text-black">{cert.issuer}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-gray-600 dark:text-gray-400 print:text-black">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}