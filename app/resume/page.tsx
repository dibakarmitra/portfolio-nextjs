'use client';

import React from 'react';
import { FaBirthdayCake, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaBriefcase, FaGraduationCap, FaWrench } from 'react-icons/fa';
import Image from 'next/image';
import resumeData from '../../config/resume';

export default function ResumePage() {
  return (
    <article className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 min-h-screen">
      <div className="mx-auto py-12 px-6">
        <header className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="flex-shrink-0 relative">
            <Image
              src="/profile.jpg"
              alt="Dibakar Mitra"
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-neutral-200 dark:border-neutral-800 shadow-lg"
              priority
            />
          </div>
          
          <div className="flex-grow">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{resumeData.name}</h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium">{resumeData.title}</p>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <FaBirthdayCake className="w-4 h-4" />
                </span>
                <span>Date of Birth</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </span>
                <span>{resumeData.contact.location}</span>
              </li>
              <li className="flex items-center space-x-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <FaPhone className="w-4 h-4" />
                </span>
                <a 
                  href={`tel:${resumeData.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {resumeData.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-neutral-700 dark:text-neutral-300">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4" />
                </span>
                <a 
                  href={`mailto:${resumeData.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {resumeData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold flex items-center mb-2"><FaUser className="mr-2" /> About Me</h2>
              <p className="leading-relaxed text-sm text-neutral-800 dark:text-neutral-200">{resumeData.summary}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center mb-2"><FaWrench className="mr-2" /> Skills and Interests</h2>
              <ul className="list-disc list-inside grid grid-cols-1 gap-y-2 text-sm text-neutral-800 dark:text-neutral-200">
                {resumeData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="col-span-3 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold flex items-center mb-2"><FaBriefcase className="mr-2" /> Work Experience</h2>
              {resumeData.experience.map((job, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold text-base">{job.title} at {job.company}</h3>
                  <p className="text-sm italic text-neutral-600 dark:text-neutral-400">{job.location} | {job.duration}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-neutral-800 dark:text-neutral-200">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-semibold flex items-center mb-2"><FaGraduationCap className="mr-2" /> Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-bold text-base">{edu.degree}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{edu.institution} | {edu.year}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}