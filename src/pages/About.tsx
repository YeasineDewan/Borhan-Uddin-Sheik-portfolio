import {
  Users,
  Settings,
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  Trophy,
  Plane
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';

function AboutContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 lg:py-20 -mt-20">
        <div className="container mx-auto px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              About <span className="text-[#a3ff00]">Borhan Uddin Sheik</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A visionary leader in Bangladesh's healthcare industry with over 15 years of experience
              in medical diagnostics and clinical laboratory sciences.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column: Profile & Expertise */}
          <div className="lg:col-span-1 space-y-12">

            {/* Profile Section */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight border-b-4 border-[#a3ff00] inline-block">Profile</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
                  alt="Borhan Uddin Sheik"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-slate-600 leading-relaxed text-justify">
                  Mr. Borhan Uddin Sheik is a distinguished healthcare leader and entrepreneur with over 15 years of exemplary service in medical diagnostics and clinical laboratory sciences in Bangladesh. As the Managing Director of three premier healthcare enterprises, he has revolutionized the healthcare landscape through innovative diagnostic solutions, quality assurance protocols, and strategic business development.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#a3ff00] rounded-full"></div>
                    <span className="font-semibold text-slate-800">Visionary Healthcare Leader</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#a3ff00] rounded-full"></div>
                    <span className="font-semibold text-slate-800">15+ Years Industry Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#a3ff00] rounded-full"></div>
                    <span className="font-semibold text-slate-800">Multi-Enterprise Director</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Expertise Section */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Settings size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight border-b-4 border-[#a3ff00] inline-block">Expertise</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Hospital & Diagnostic Lab Management</span>
                      <p className="text-sm text-slate-600 mt-1">Comprehensive oversight of healthcare facility operations, strategic planning, and resource optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Medical Team Supervision & Training</span>
                      <p className="text-sm text-slate-600 mt-1">Leadership in medical staff development, competency assessment, and continuous education programs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Laboratory IT Systems & Equipment</span>
                      <p className="text-sm text-slate-600 mt-1">Advanced laboratory information systems implementation and cutting-edge diagnostic equipment management</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Strategic Business Planning</span>
                      <p className="text-sm text-slate-600 mt-1">Healthcare business development, market analysis, and growth strategy formulation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Quality Control (CAP Standards)</span>
                      <p className="text-sm text-slate-600 mt-1">Implementation of College of American Pathologists standards and laboratory accreditation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                    <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="font-semibold text-slate-800">Public Health & Community Services</span>
                      <p className="text-sm text-slate-600 mt-1">Community health initiatives, preventive medicine programs, and public health advocacy</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Academics Section */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight border-b-4 border-[#a3ff00] inline-block">Academics</h3>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
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
              </div>
            </motion.section>

            {/* Languages & Interests */}
            <motion.section {...fadeIn} className="bg-slate-900 text-white p-8 rounded-2xl">
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

          {/* Right Column: Achievements & Recognition */}
          <div className="lg:col-span-2 space-y-12">

            {/* Achievements */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Award size={24} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight">Achievements & Recognition</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#a3ff00] p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <Award size={48} className="mb-6 text-slate-900" />
                    <h4 className="text-2xl font-black uppercase text-slate-900 mb-2">Service Excellence</h4>
                    <p className="font-bold text-slate-800">SQUARE HOSPITALS LTD.</p>
                  </div>
                  <div className="mt-8 border-t border-slate-900/10 pt-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Recognition Award</span>
                  </div>
                </div>
                <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl">
                  <Globe size={48} className="mb-6 text-[#a3ff00]" />
                  <h4 className="text-2xl font-black uppercase text-slate-900 mb-2">Global Exposure</h4>
                  <p className="text-slate-600">Travelled to United Kingdom (Scotland) for advanced healthcare system exposure and professional development.</p>
                </div>
              </div>
            </motion.section>

            {/* Professional Philosophy */}
            <motion.section {...fadeIn} className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-slate-900">Professional Philosophy</h3>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-[#a3ff00] pl-6 mb-8">
                  "Healthcare is not just a profession for me; it's a calling to serve humanity with excellence,
                  innovation, and compassion. Every patient deserves the highest standard of care, and every
                  team member deserves leadership that inspires growth and achievement."
                </p>
                <div className="grid md:grid-cols-2 gap-8 text-slate-600">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Core Values</h4>
                    <ul className="space-y-2">
                      <li>• Excellence in Patient Care</li>
                      <li>• Innovation in Healthcare Delivery</li>
                      <li>• Team Development & Leadership</li>
                      <li>• Ethical Business Practices</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">Vision</h4>
                    <p>To establish Bangladesh as a regional leader in advanced medical diagnostics and healthcare services, accessible to all segments of society.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Certifications & Affiliations */}
            <motion.section {...fadeIn}>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-[#a3ff00] rounded-lg">
                  <Award size={24} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-tight">Certifications & Affiliations</h3>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a3ff00]/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[#a3ff00] text-xl font-bold mb-6 tracking-widest">Professional Certifications</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="mt-1 bg-[#a3ff00] text-slate-900 rounded-full p-1 shrink-0">
                          <Award size={14} strokeWidth={3} />
                        </div>
                        <div>
                          <div className="font-bold">CAP Accreditation Standards</div>
                          <div className="text-slate-300 text-sm">College of American Pathologists</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-1 bg-[#a3ff00] text-slate-900 rounded-full p-1 shrink-0">
                          <Award size={14} strokeWidth={3} />
                        </div>
                        <div>
                          <div className="font-bold">Medical Laboratory Technology</div>
                          <div className="text-slate-300 text-sm">Dhaka University Certification</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#a3ff00] text-xl font-bold mb-6 tracking-widest">Professional Affiliations</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="mt-1 bg-[#a3ff00] text-slate-900 rounded-full p-1 shrink-0">
                          <Globe size={14} strokeWidth={3} />
                        </div>
                        <div>
                          <div className="font-bold">Methodist Healthcare</div>
                          <div className="text-slate-300 text-sm">USA - Professional Exchange</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="mt-1 bg-[#a3ff00] text-slate-900 rounded-full p-1 shrink-0">
                          <Globe size={14} strokeWidth={3} />
                        </div>
                        <div>
                          <div className="font-bold">SingHealth</div>
                          <div className="text-slate-300 text-sm">Singapore - Healthcare Network</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </>
  );
}

export function About() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}
