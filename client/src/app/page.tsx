'use client'
import Link from 'next/link';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import { AcademicCapIcon, BookOpenIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function Home() {
  // Function to handle smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-100">
      {/* Home Section with Fixed Background and Layout */}
      <Section id="home" title="Trusted Admission Support for Your Child’s Bright Future">
        <div
          className="relative bg-gradient-to-r from-blue-800 to-blue-600 opacity-90 py-12 px-6 rounded-xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' opacity='0.1'%3E%3Cpath d='M50 50L150 50M50 150L150 150M100 0L100 200M0 100L200 100' stroke='%23FFD700' stroke-width='10'/%3E%3Ccircle cx='50' cy='50' r='20' fill='%23FFD700'/%3E%3Ccircle cx='150' cy='150' r='20' fill='%23FFD700'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        >
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <AcademicCapIcon className="w-16 h-16 text-yellow-400" />
            <p className="font-semibold text-lg md:text-xl">
              Personalized Guidance | Top Private Colleges | 100% Legal & Confidential
            </p>
            <p className="max-w-2xl mx-auto text-sm md:text-base">
              At EduThrive, we help students and parents navigate the complex admission process into India’s top private
              colleges. From career counseling to direct admission guidance, we offer ethical, legal, and professional
              services tailored to each student’s goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#contact"
                className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 text-center"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                Book a Free Consultation
              </Link>
              <Link
                href="#contact"
                className="bg-white text-blue-800 border border-blue-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                Chat with Our Expert
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* About Us Section */}
      <Section id="about" title="About Us">
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto text-center">
          We are a team of experienced education consultants who believe that every student deserves the right support
          to achieve their academic dreams. With strong networks across India’s top private colleges, we guide students
          legally and transparently through every step—from course selection to admission.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100">
            <BookOpenIcon className="w-10 h-10 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Mission</h3>
              <p className="text-gray-600">Empowering families with the right knowledge and ethical support.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100">
            <AcademicCapIcon className="w-10 h-10 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">Values</h3>
              <p className="text-gray-600">Transparency | Legality | Personalization | Integrity</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Our Services">
        <p className="text-gray-700 mb-6 text-center">Our Legal & Professional Services Include:</p>
        <ul className="list-disc list-inside text-gray-600 max-w-2xl mx-auto space-y-3">
          <li className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">Career Counseling</li>
          <li className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">Course and College Selection</li>
          <li className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">Entrance Exam Preparation Support</li>
          <li className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">Application & Documentation Help</li>
          <li className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">Direct Admission Guidance (under college quota only)</li>
          <li className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">Scholarship and Fee Guidance</li>
        </ul>
        <p className="text-gray-500 mt-4 text-center italic">
          Note: We do not promote or engage in any illegal or unapproved admission methods. All services comply with
          institutional guidelines and government norms.
        </p>
      </Section>

      {/* Colleges Section */}
      <Section id="colleges" title="Top Institutions We Work With">
        <div className="flex justify-center mb-6">
          <BuildingOfficeIcon className="w-16 h-16 text-blue-600" />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 max-w-4xl mx-auto">
          {[
            'VIT (All Campuses)',
            'SRM (All Campuses)',
            'RV College of Engineering',
            'Ramaiah Institute',
            'BMSCE',
            'PES University',
            'MIT (All Campuses)',
            'BVP',
            'Thapar Institute',
            'Amrita Vishwa Vidyapeetham',
            'Christ University',
            'Symbiosis',
            'REVA',
            'DIT University',
            'KIIT',
            'All State Private Colleges',
          ].map((college) => (
            <li key={college} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-all duration-200">
              <span className="text-blue-600">•</span>
              <span>{college}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Courses Section */}
      <Section id="courses" title="Courses We Guide For">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100">
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              {[
                'BA / B.Com / B.Sc',
                'B.Tech / M.Tech',
                'MBBS / BDS',
                'BCA / MCA',
                'BBA / MBA',
                'BA-LLB / LLB / LLM',
                'B.Ed / BA-B.Ed',
                'Polytechnic & Diploma Engineering',
              ].map((course) => (
                <li key={course} className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-200">{course}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Specialized Support for:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-200">Direct Admission Guidance</li>
              <li className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-200">Career Counseling</li>
              <li className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-200">Entrance Exam Preparation</li>
              <li className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-200">Scholarship Assistance</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Ready to Help Your Child Succeed?">
        <p className="text-gray-700 mb-6 text-center">Contact us today for personalized support!</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <a
            href="tel:+919109016866"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919109016866"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Send WhatsApp
          </a>
        </div>
        <ContactForm />
        <div className="text-gray-600 mt-6 text-center">
          <p>
            Phone:{' '}
            <a href="tel:+919109016866" className="text-blue-600 hover:underline">
              +91 91090 16866
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:support@eduthrive.com" className="text-blue-600 hover:underline">
              eduthrive022@gmail.com
            </a>
          </p>
        </div>
      </Section>
    </div>
  );
}