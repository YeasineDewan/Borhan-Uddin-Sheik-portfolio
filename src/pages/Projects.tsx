import {
  Target,
  ChevronRight,
  Award,
  Users,
  Globe,
  TrendingUp,
  Calendar,
  MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';

function ProjectsContent() {
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

  const projects = [
    {
      title: "Global Gateways Travel Services",
      category: "Travel & Tourism",
      status: "Ongoing",
      period: "Present",
      description: "Comprehensive travel agency providing visa processing, ticketing, Hajj and Umrah services, manpower recruitment, medical tourism, holiday tourism, and student visa processing with end-to-end travel solutions.",
      highlights: [
        "Full-service travel agency operations",
        "Specialized Hajj and Umrah pilgrimage packages",
        "International visa processing expertise",
        "Medical and holiday tourism services",
        "Student visa processing programs"
      ],
      impact: {
        clients: "2,000+",
        services: "7",
        countries: "25+",
        satisfaction: "96%"
      },
      technologies: ["Booking Systems", "Visa Processing Platform", "Customer Management", "Travel CRM"]
    },
    {
      title: "Raabed Technical Training and Language Center (RTTLC)",
      category: "Education & Training",
      status: "Ongoing",
      period: "Present",
      description: "Technical training and language education center developing skilled workforce for global markets with internationally recognized courses and Singapore collaboration standards across multiple industry sectors.",
      highlights: [
        "Technical skills training for 8+ industry sectors",
        "Language courses for global employment",
        "Trade testing & certification programs",
        "Singapore collaboration standards",
        "Hands-on practical training approach"
      ],
      impact: {
        students: "1,500+",
        courses: "50+",
        sectors: "8",
        placement: "85%"
      },
      technologies: ["Learning Management System", "Skills Assessment Platform", "Certification Tracking", "Industry Partnerships"]
    },
    {
      title: "Medpark Join Medigo Hospital",
      category: "Healthcare Partnership",
      status: "Completed",
      period: "2023 - Present",
      description: "Strategic partnership for advanced healthcare delivery in Dhanmondi, featuring state-of-the-art medical technology and comprehensive specialized services.",
      highlights: [
        "Joint venture with international healthcare providers",
        "Advanced diagnostic and treatment technologies",
        "Expanded range of specialized medical services",
        "Integrated patient care systems"
      ],
      impact: {
        patients: "5,000+",
        services: "50+",
        partners: "15+",
        satisfaction: "98%"
      },
      technologies: ["Digital Health Records", "Telemedicine Platform", "AI Diagnostics", "IoT Medical Devices"]
    },
    {
      title: "Medicheck Multi-Branch Expansion",
      category: "Business Development",
      status: "Ongoing",
      period: "2021 - Present",
      description: "Strategic expansion of diagnostic centers across Bangladesh with standardized quality assurance and advanced laboratory technology implementation.",
      highlights: [
        "Established 5 major branches across Bangladesh",
        "Implemented CAP-accredited quality standards",
        "Digital transformation of laboratory operations",
        "Integrated supply chain management"
      ],
      impact: {
        patients: "25,000+",
        branches: "5",
        tests: "500+",
        efficiency: "85%"
      },
      technologies: ["LIMS Software", "Cloud Infrastructure", "Mobile App", "Data Analytics"]
    },
    {
      title: "Medigo Telemedicine Platform",
      category: "Digital Health",
      status: "Completed",
      period: "2022 - 2023",
      description: "Comprehensive telemedicine platform enabling remote consultations, diagnostic services, and healthcare management for patients nationwide.",
      highlights: [
        "24/7 online consultation services",
        "Integrated diagnostic booking system",
        "Mobile health monitoring applications",
        "Secure patient data management"
      ],
      impact: {
        consultations: "10,000+",
        users: "50,000+",
        doctors: "200+",
        accessibility: "90%"
      },
      technologies: ["React Native", "Node.js", "WebRTC", "Blockchain Security"]
    },
    {
      title: "Medifly GAMCA Accreditation",
      category: "International Compliance",
      status: "Completed",
      period: "2020 - 2022",
      description: "Achieved GAMCA accreditation and established comprehensive pre-departure medical screening services for international workforce mobility.",
      highlights: [
        "Full GAMCA certification compliance",
        "Streamlined pre-departure screening process",
        "International partnership development",
        "Digital documentation system"
      ],
      impact: {
        screenings: "10,000+",
        countries: "25+",
        compliance: "99.9%",
        processing: "48hrs"
      },
      technologies: ["Digital Certification", "API Integrations", "Biometric Systems", "Cloud Storage"]
    }
  ];

  const initiatives = [
    {
      title: "Healthcare Digital Transformation",
      description: "Leading Bangladesh's healthcare digital revolution through innovative technology adoption and process optimization.",
      icon: <Globe size={32} className="text-[#a3ff00]" />,
      metrics: ["Digital adoption: 95%", "Process efficiency: 80%", "Patient experience: 4.8/5"]
    },
    {
      title: "Corporate Wellness Programs",
      description: "Comprehensive employee health and wellness solutions for corporate clients across various industries.",
      icon: <Users size={32} className="text-[#a3ff00]" />,
      metrics: ["Companies served: 50+", "Employees covered: 25,000+", "Health improvement: 40%"]
    },
    {
      title: "International Healthcare Partnerships",
      description: "Building global healthcare networks and collaborations for advanced medical services and knowledge exchange.",
      icon: <Award size={32} className="text-[#a3ff00]" />,
      metrics: ["Global partners: 15+", "Countries reached: 8", "Joint programs: 12"]
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
              Key <span className="text-[#a3ff00]">Projects</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Pioneering healthcare innovation through strategic initiatives, technological advancements,
              and transformative partnerships that are reshaping medical services in Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">

          {/* Featured Project */}
          <motion.section {...fadeIn} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Target size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Featured Project</h3>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="text-3xl font-bold text-slate-900">Global Gateways Travel Services</h4>
                    <span className="bg-[#a3ff00] text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Active</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg mb-8">
                    A comprehensive travel agency providing end-to-end travel solutions including visa processing, 
                    ticketing, Hajj and Umrah services, manpower recruitment, medical tourism, and student visa processing 
                    with focus on customer satisfaction and service excellence.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#a3ff00]">2,000+</div>
                      <div className="text-slate-600">Clients Served</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#a3ff00]">7</div>
                      <div className="text-slate-600">Service Categories</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#a3ff00]">25+</div>
                      <div className="text-slate-600">Countries Covered</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#a3ff00]">96%</div>
                      <div className="text-slate-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h5 className="text-xl font-bold text-slate-900 mb-4">Key Services</h5>
                  <ul className="space-y-4">
                    {[
                      "Visa Processing & Documentation",
                      "International Ticketing Services",
                      "Hajj & Umrah Pilgrimage Packages",
                      "Medical & Holiday Tourism",
                      "Student Visa Processing Programs"
                    ].map((service, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight size={20} className="text-[#a3ff00] mt-1 shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* All Projects */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Award size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">All Projects</h3>
            </div>

            <div className="space-y-12">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-2xl font-bold text-slate-900">{project.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          project.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-[#a3ff00] text-slate-900'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 mb-4 text-slate-500">
                        <span className="font-semibold">{project.category}</span>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{project.period}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg">{project.description}</p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h5 className="text-lg font-bold text-slate-900 mb-4">Project Highlights</h5>
                      <ul className="space-y-3 mb-6">
                        {project.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <ChevronRight size={18} className="text-[#a3ff00] mt-1 shrink-0" />
                            <span className="text-slate-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div>
                        <h6 className="text-md font-bold text-slate-900 mb-3">Technologies Used</h6>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, k) => (
                            <span key={k} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-bold text-slate-900 mb-4">Impact Metrics</h5>
                      <div className="space-y-4">
                        {Object.entries(project.impact).map(([key, value]) => (
                          <div key={key} className="bg-slate-50 p-3 rounded-lg">
                            <div className="text-lg font-bold text-[#a3ff00]">{value}</div>
                            <div className="text-slate-600 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Strategic Initiatives */}
          <motion.section {...fadeIn} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Strategic Initiatives</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {initiatives.map((initiative, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {initiative.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-slate-900">{initiative.title}</h4>
                  <p className="text-slate-600 mb-6">{initiative.description}</p>
                  <div className="space-y-2">
                    {initiative.metrics.map((metric, j) => (
                      <div key={j} className="text-sm text-slate-500">{metric}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Project Timeline */}
          <motion.section {...fadeIn}>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Calendar size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Project Timeline</h3>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#a3ff00]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

              <div className="relative">
                <div className="space-y-12">
                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-[#a3ff00] rounded-full"></div>
                      <div className="w-0.5 h-24 bg-[#a3ff00]/50"></div>
                    </div>
                    <div className="pb-8">
                      <div className="text-[#a3ff00] font-bold text-lg mb-2">2023 - Present</div>
                      <h4 className="text-xl font-bold mb-2">Healthcare Innovation & Expansion</h4>
                      <p className="text-slate-300 mb-4">Leading multiple healthcare enterprises with focus on digital transformation and international partnerships.</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>• Medpark-Medigo Partnership</span>
                        <span>• Digital Health Platforms</span>
                        <span>• International Collaborations</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-[#a3ff00] rounded-full"></div>
                      <div className="w-0.5 h-24 bg-[#a3ff00]/50"></div>
                    </div>
                    <div className="pb-8">
                      <div className="text-[#a3ff00] font-bold text-lg mb-2">2020 - 2023</div>
                      <h4 className="text-xl font-bold mb-2">Business Development & Accreditation</h4>
                      <p className="text-slate-300 mb-4">Achieved GAMCA accreditation and expanded Medicheck network across Bangladesh.</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>• GAMCA Certification</span>
                        <span>• Multi-branch Expansion</span>
                        <span>• Quality Standardization</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-[#a3ff00] rounded-full"></div>
                      <div className="w-0.5 h-24 bg-[#a3ff00]/50"></div>
                    </div>
                    <div className="pb-8">
                      <div className="text-[#a3ff00] font-bold text-lg mb-2">2017 - 2020</div>
                      <h4 className="text-xl font-bold mb-2">Leadership & Medical Directorship</h4>
                      <p className="text-slate-300 mb-4">Served as Medical Director and built foundation for entrepreneurial ventures in healthcare.</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>• Medical Leadership</span>
                        <span>• Strategic Planning</span>
                        <span>• Team Development</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-[#a3ff00] rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-[#a3ff00] font-bold text-lg mb-2">2009 - 2017</div>
                      <h4 className="text-xl font-bold mb-2">Professional Foundation</h4>
                      <p className="text-slate-300 mb-4">Built expertise in medical laboratory sciences and gained international exposure.</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>• Laboratory Expertise</span>
                        <span>• International Training</span>
                        <span>• Professional Development</span>
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

export function Projects() {
  return (
    <Layout>
      <ProjectsContent />
    </Layout>
  );
}
