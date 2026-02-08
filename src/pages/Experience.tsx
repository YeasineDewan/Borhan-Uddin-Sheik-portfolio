import {
  Briefcase,
  ChevronRight,
  Calendar,
  MapPin,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';

function ExperienceContent() {
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

  const experiences = [
    {
      title: "Medicheck Medical Services",
      role: "Director",
      period: "Present",
      location: "Dhaka, Bangladesh",
      desc: "Borhan Uddin is the visionary founder and director of Medicheck, a modern diagnostic and pathology center known for its advanced testing equipment, strict quality assurance, and affordable patient services. Under his leadership, Medicheck has expanded into multiple branches and collaborations.",
      achievements: [
        "Established 5+ diagnostic centers across Bangladesh",
        "Implemented CAP-accredited quality standards",
        "Led digital transformation of laboratory operations",
        "Achieved 95% patient satisfaction rating"
      ]
    },
    {
      title: "Medigo Health Care",
      role: "Founder & Managing Director",
      period: "Present",
      location: "Dhaka, Bangladesh",
      desc: "Medigo delivers a comprehensive suite of integrated healthcare solutions, encompassing online medical consultations, in-home diagnostic services, corporate wellness programs, and specialized patient logistics support. He plays a pivotal leadership role, overseeing both the strategic direction and the operational framework.",
      achievements: [
        "Built comprehensive healthcare platform",
        "Established partnerships with 50+ hospitals",
        "Developed telemedicine infrastructure",
        "Created 200+ healthcare professional network"
      ]
    },
    {
      title: "Medifly Health Services",
      role: "Founder & Managing director",
      period: "Present",
      location: "Dhaka, Bangladesh",
      desc: "Medifly operates as a certified GAMCA-accredited medical center, specializing in pre-departure health screenings for overseas employment candidates. The organization rigorously facilitates mandatory medical testing to ensure compliance with international workforce standards.",
      achievements: [
        "Obtained GAMCA accreditation",
        "Processed 10,000+ pre-departure screenings",
        "Established international partnerships",
        "Achieved 99.9% compliance rate"
      ]
    },
    {
      title: "Stemz Health Care (BD) Ltd.",
      role: "Medical Director",
      period: "2017 - 2020",
      location: "Dhaka, Bangladesh",
      desc: "Served as Medical director at Stemz Health Care, reflecting his leadership in diagnostic excellence within an internationally recognized healthcare network.",
      achievements: [
        "Directed medical operations for international network",
        "Implemented advanced diagnostic protocols",
        "Trained 50+ medical professionals",
        "Established quality control systems"
      ]
    },
    {
      title: "SQUARE Hospitals Ltd.",
      role: "Senior Scientific Officer",
      period: "2014 - 2017",
      location: "Dhaka, Bangladesh",
      desc: "Served as Senior Scientific officer at SQUARE Hospitals Ltd., one of the country's leading medical facilities affiliated with globally renowned institutions.",
      achievements: [
        "Managed laboratory operations",
        "Conducted advanced pathology research",
        "Collaborated with international institutions",
        "Published research in medical journals"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              Professional <span className="text-[#a3ff00]">Experience</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Over 15 years of leadership in healthcare, from laboratory operations to strategic management
              of multiple healthcare enterprises serving thousands of patients.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Current Leadership */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Briefcase size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Current Leadership Roles</h3>
            </div>

            <div className="space-y-12">
              {experiences.slice(0, 3).map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="relative bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100"
                >
                  <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-slate-900 border-4 border-[#a3ff00]"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-3xl font-bold text-slate-900">{exp.title}</h4>
                      <p className="text-[#a3ff00] bg-slate-900 inline-block px-4 py-2 rounded text-sm font-bold mt-2 uppercase tracking-wider">{exp.role}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar size={16} />
                        <span className="font-bold uppercase text-sm tracking-widest">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <MapPin size={16} />
                        <span className="font-semibold">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-lg mb-8">{exp.desc}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-4">Key Achievements</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <ChevronRight size={18} className="text-[#a3ff00] mt-1 shrink-0" />
                            <span className="text-slate-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h5 className="text-lg font-bold text-slate-900 mb-4">Impact Metrics</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Patient Satisfaction</span>
                          <span className="font-bold text-[#a3ff00]">95%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Operational Efficiency</span>
                          <span className="font-bold text-[#a3ff00]">85%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Quality Compliance</span>
                          <span className="font-bold text-[#a3ff00]">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Previous Professional Experience */}
          <motion.section {...fadeIn} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Award size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Previous Professional Experience</h3>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-slate-600 leading-relaxed text-lg italic border-l-4 border-[#a3ff00] pl-6 mb-8">
                "With over 15 years of professional experience in laboratory medicine, Mr. Borhan Uddin has established a distinguished career across several prominent healthcare institutions in Bangladesh."
              </p>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="border-l-4 border-[#a3ff00] pl-6">
                    <h4 className="text-xl font-bold text-slate-900">Stemz Health Care (BD) Ltd.</h4>
                    <p className="text-[#a3ff00] font-semibold mb-2">Medical Director (2017 - 2020)</p>
                    <p className="text-slate-600">His tenure reflected leadership in diagnostic excellence within an internationally recognized healthcare network.</p>
                  </div>

                  <div className="border-l-4 border-[#a3ff00] pl-6">
                    <h4 className="text-xl font-bold text-slate-900">SQUARE Hospitals Ltd.</h4>
                    <p className="text-[#a3ff00] font-semibold mb-2">Senior Scientific Officer (2014 - 2017)</p>
                    <p className="text-slate-600">Served at one of the country's leading medical facilities affiliated with globally renowned institutions.</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Professional Development</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-slate-900">International Exposure</div>
                        <div className="text-slate-600 text-sm">Travelled to United Kingdom (Scotland) for advanced healthcare systems</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-slate-900">Global Affiliations</div>
                        <div className="text-slate-600 text-sm">Methodist Healthcare (USA), SingHealth (Singapore), Christian Medical College (India)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <div>
                        <div className="font-semibold text-slate-900">Research & Publications</div>
                        <div className="text-slate-600 text-sm">Published research in medical journals and presented at conferences</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills & Competencies */}
          <motion.section {...fadeIn} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Award size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Skills & Competencies</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Technical Expertise</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Advanced Laboratory Technology</li>
                  <li>• Medical Diagnostics</li>
                  <li>• Quality Control Systems</li>
                  <li>• Healthcare IT Solutions</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Leadership Skills</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Strategic Planning</li>
                  <li>• Team Management</li>
                  <li>• Business Development</li>
                  <li>• Change Management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Industry Knowledge</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Healthcare Regulations</li>
                  <li>• Medical Ethics</li>
                  <li>• International Standards</li>
                  <li>• Patient Care Protocols</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Career Timeline */}
          <motion.section {...fadeIn}>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Calendar size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Career Timeline</h3>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#a3ff00]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#a3ff00] rounded-full"></div>
                        <div className="w-0.5 h-16 bg-[#a3ff00]/50"></div>
                      </div>
                      <div>
                        <div className="text-[#a3ff00] font-bold text-sm uppercase tracking-widest mb-2">2020 - Present</div>
                        <h4 className="text-lg font-bold mb-1">Entrepreneurship & Leadership</h4>
                        <p className="text-slate-300 text-sm">Founded and led multiple healthcare enterprises</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#a3ff00] rounded-full"></div>
                        <div className="w-0.5 h-16 bg-[#a3ff00]/50"></div>
                      </div>
                      <div>
                        <div className="text-[#a3ff00] font-bold text-sm uppercase tracking-widest mb-2">2017 - 2020</div>
                        <h4 className="text-lg font-bold mb-1">Medical Directorship</h4>
                        <p className="text-slate-300 text-sm">Led diagnostic operations at international healthcare network</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#a3ff00] rounded-full"></div>
                        <div className="w-0.5 h-16 bg-[#a3ff00]/50"></div>
                      </div>
                      <div>
                        <div className="text-[#a3ff00] font-bold text-sm uppercase tracking-widest mb-2">2014 - 2017</div>
                        <h4 className="text-lg font-bold mb-1">Scientific Leadership</h4>
                        <p className="text-slate-300 text-sm">Senior scientific officer at premier hospital</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-[#a3ff00] rounded-full"></div>
                        <div className="w-0.5 h-16 bg-[#a3ff00]/50"></div>
                      </div>
                      <div>
                        <div className="text-[#a3ff00] font-bold text-sm uppercase tracking-widest mb-2">2009 - 2014</div>
                        <h4 className="text-lg font-bold mb-1">Foundation Building</h4>
                        <p className="text-slate-300 text-sm">Built expertise in medical laboratory sciences</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Layout>
      <ExperienceContent />
    </Layout>
  );
}
