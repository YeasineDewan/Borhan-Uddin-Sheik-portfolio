import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Award,
  Users,
  Target,
  Briefcase,
  Settings,
  GraduationCap,
  Globe,
  BookOpen,
  Trophy,
  Plane
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { CVDownload } from '../components/CVDownload';

function HomeContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Header / Hero Section */}
      <header className="relative bg-[#a3ff00] py-8 sm:py-12 lg:py-16 xl:py-24 overflow-hidden -mt-20">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-900 hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white shrink-0"
            >
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
                alt="Borhan Uddin Sheik"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter"
              >
                Borhan Uddin <span className="text-white lg:text-slate-900">Sheik</span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-slate-800 mt-2 uppercase tracking-widest"
              >
                Managing Director
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Phone size={18} className="text-[#a3ff00] fill-slate-900" />
                  <span className="font-semibold">+8801712643626</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Mail size={18} className="text-[#a3ff00] fill-slate-900" />
                  <span className="font-semibold">borhanbds@yahoo.com</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <MapPin size={18} className="text-[#a3ff00] fill-slate-900" />
                  <span className="font-semibold">Dhaka, Bangladesh</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Sidebar Style */}
          <div className="lg:col-span-1 space-y-12">
            
            {/* Profile Section */}
            <motion.section id="about" {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight border-b-4 border-[#a3ff00] inline-block">Profile</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-justify">
                With a distinguished career spanning over 15 years in medical diagnostics and clinical laboratory sciences, 
                Borhan Uddin Sheik has established himself as one of the foremost and most trusted healthcare professionals in Bangladesh. 
                He currently holds the position of Managing Director across three premier healthcare enterprises.
              </p>
            </motion.section>

            {/* Expertise Section */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Settings size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight border-b-4 border-[#a3ff00] inline-block">Expertise</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Hospital and Diagnostic Lab Management",
                  "Medical Team Supervision & Staff Training",
                  "Laboratory IT Systems & Equipment Operations",
                  "Strategic Business Planning for Medical Centers",
                  "Quality Control per CAP Standards",
                  "Public Health and Community Medical Services"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border-l-4 border-[#a3ff00]"
                  >
                    <ChevronRight size={18} className="text-[#a3ff00] mt-1 shrink-0" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Academics Section */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight border-b-4 border-[#a3ff00] inline-block">Academics</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#a3ff00]"></div>
                  <h4 className="font-bold text-lg leading-tight">Master of Science (MS) in Applied Laboratory sciences</h4>
                  <p className="text-[#a3ff00] font-bold mt-1">Bangladesh University of Health Sciences</p>
                  <p className="text-slate-500 text-sm font-bold">2014</p>
                </div>
                <div className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#a3ff00]"></div>
                  <h4 className="font-bold text-lg leading-tight">Bachelor of Science (B.Sc) in Medical Technology (Laboratory)</h4>
                  <p className="text-[#a3ff00] font-bold mt-1">DHAKA UNIVERSITY</p>
                  <p className="text-slate-500 text-sm font-bold">2009</p>
                </div>
              </div>
            </motion.section>

            {/* Languages & Interests */}
            <motion.section {...fadeIn} className="bg-slate-900 text-white p-8 rounded-3xl">
              <div className="mb-8">
                <h4 className="text-[#a3ff00] font-bold uppercase tracking-widest text-sm mb-4">Languages</h4>
                <div className="flex gap-4">
                  <span className="px-4 py-1 bg-white/10 rounded-full text-sm">English</span>
                  <span className="px-4 py-1 bg-white/10 rounded-full text-sm">Bangla</span>
                </div>
              </div>
              <div>
                <h4 className="text-[#a3ff00] font-bold uppercase tracking-widest text-sm mb-4">Interests</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#a3ff00]" />
                    <span className="text-sm">Reading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-[#a3ff00]" />
                    <span className="text-sm">Sports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane size={16} className="text-[#a3ff00]" />
                    <span className="text-sm">Traveling</span>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Business Summary / Experience */}
            <motion.section 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight">Business Summary</h3>
              </div>

              <div className="space-y-10">
                {[
                  {
                    title: "Medicheck Medical Services",
                    role: "Director",
                    desc: "Borhan Uddin is the visionary founder and director of Medicheck, a modern diagnostic and pathology center known for its advanced testing equipment, strict quality assurance, and affordable patient services. Under his leadership, Medicheck has expanded into multiple branches and collaborations.",
                    period: "Present"
                  },
                  {
                    title: "Medigo Health Care",
                    role: "Founder & Managing Director",
                    desc: "Medigo delivers a comprehensive suite of integrated healthcare solutions, encompassing online medical consultations, in-home diagnostic services, corporate wellness programs, and specialized patient logistics support. He plays a pivotal leadership role, overseeing both the strategic direction and the operational framework.",
                    period: "Present"
                  },
                  {
                    title: "Medifly Health Services",
                    role: "Founder & Managing director",
                    desc: "Medifly operates as a certified GAMCA-accredited medical center, specializing in pre-departure health screenings for overseas employment candidates. The organization rigorously facilitates mandatory medical testing to ensure compliance with international workforce standards.",
                    period: "Present"
                  }
                ].map((exp, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeIn}
                    className="relative pl-12 border-l-4 border-[#a3ff00] py-2"
                  >
                    <div className="absolute -left-[14px] top-4 w-6 h-6 rounded-full bg-slate-900 border-4 border-[#a3ff00]"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900">{exp.title}</h4>
                        <p className="text-[#a3ff00] bg-slate-900 inline-block px-3 py-1 rounded text-sm font-bold mt-1 uppercase tracking-wider">{exp.role}</p>
                      </div>
                      <span className="text-slate-400 font-bold uppercase text-sm tracking-widest">{exp.period}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-justify">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Previous Professional Experience */}
            <motion.section {...fadeIn} className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900">Previous Professional Experience</h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-[#a3ff00] pl-6 mb-8">
                  "With over 15 years of professional experience in laboratory medicine, Mr. Borhan Uddin has established a distinguished career across several prominent healthcare institutions in Bangladesh."
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-slate-600">
                  <div className="space-y-4">
                    <p>His tenure as Medical director at <strong>Stemz Health Care (BD) Ltd.</strong> (2017 - 2020) reflects his leadership in diagnostic excellence within an internationally recognized healthcare network.</p>
                    <p>Served as Senior Scientific officer at <strong>SQUARE Hospitals Ltd.</strong>, one of the country's leading medical facilities affiliated with globally renowned institutions.</p>
                  </div>
                  <div className="space-y-4">
                    <p>Extensive exposure and affiliation with institutions like <strong>Methodist Healthcare (USA)</strong>, <strong>SingHealth (Singapore)</strong>, and <strong>Christian Medical College (India)</strong>.</p>
                    <p>Consistently demonstrated advanced proficiency in pathology procedures and quality assurance practices throughout his career.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Key Projects */}
            <motion.section id="projects" {...fadeIn}>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight">Key Projects</h3>
              </div>
              <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3ff00]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <h4 className="text-[#a3ff00] text-xl font-bold mb-6 tracking-widest">MEDPARK JOIN MEDIGO HOSPITAL</h4>
                <div className="grid gap-6">
                  {[
                    "Strategic Partnership for Advanced Healthcare Medpark's integration with Medigo Hospital marks a strategic move to deliver cutting-edge medical services in Dhanmondi.",
                    "State-of-the-Art Technology & Facilities: Medigo Hospital is equipped with the latest diagnostic and treatment technologies, offering patients access to high-tech healthcare solutions.",
                    "Expanded Range of Specialized Services: Now offers a broader spectrum of specialties in multiple sectors along with joint ventures with overseas healthcare providers."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-[#a3ff00] text-slate-900 rounded-full p-1 shrink-0">
                        <ChevronRight size={14} strokeWidth={3} />
                      </div>
                      <p className="text-slate-300 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Achievements */}
            <motion.section {...fadeIn} className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#a3ff00] p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <Award size={48} className="mb-6 text-slate-900" />
                  <h4 className="text-2xl font-black uppercase text-slate-900 mb-2">Service Excellence</h4>
                  <p className="font-bold text-slate-800">SQUARE HOSPITALS LTD.</p>
                </div>
                <div className="mt-8 border-t border-slate-900/10 pt-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Recognition Award</span>
                </div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-8 rounded-3xl">
                <Globe size={48} className="mb-6 text-[#a3ff00]" />
                <h4 className="text-2xl font-black uppercase text-slate-900 mb-2">Global Exposure</h4>
                <p className="text-slate-600">Travelled to United Kingdom (Scotland) for advanced healthcare system exposure and professional development.</p>
              </div>
            </motion.section>

            {/* CV Download Section */}
            <motion.section {...fadeIn}>
              <CVDownload />
            </motion.section>

          </div>
        </div>
      </main>
    </>
  );
}

export function Home() {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
}
