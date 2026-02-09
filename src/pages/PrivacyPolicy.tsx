import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, Cookie } from 'lucide-react';
import { Layout } from '../components/Layout';

function PrivacyPolicyContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#a3ff00] rounded-2xl mb-6">
              <Shield size={40} className="text-slate-900" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Your privacy is fundamental to our business. This policy outlines how we collect, use, and protect your personal information.
            </p>
            <div className="mt-8 text-sm text-slate-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div {...fadeInUp} className="space-y-12">
            
            {/* Information We Collect */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Database size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Information We Collect</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Personal Information</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Name, email address, phone number</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Professional credentials and qualifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Employment history and portfolio information</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Information</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>IP address and device information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Browser type and operating system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Usage patterns and interaction data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Eye size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Service Delivery",
                    description: "To provide and maintain our professional portfolio services",
                    icon: <UserCheck size={20} />
                  },
                  {
                    title: "Communication",
                    description: "To respond to inquiries and send important updates",
                    icon: <Database size={20} />
                  },
                  {
                    title: "Improvement",
                    description: "To analyze usage patterns and enhance user experience",
                    icon: <Eye size={20} />
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-xl">
                    <div className="w-10 h-10 bg-[#a3ff00] rounded-lg flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Protection */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Lock size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Data Protection Measures</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#a3ff00] pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Encryption & Security</h3>
                  <p className="text-slate-600 leading-relaxed">
                    All data transmissions are encrypted using industry-standard SSL/TLS protocols. 
                    Sensitive information is stored using advanced encryption methods both in transit and at rest.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a3ff00] pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Access Control</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Strict access controls and authentication mechanisms ensure that only authorized personnel 
                    can access personal information. Regular security audits maintain system integrity.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a3ff00] pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Data Minimization</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We collect only the information necessary to provide our services and retain it only 
                    for as long as required for legitimate business purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Cookie size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Cookies & Tracking</h2>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                  and personalize content. You can control cookie settings through your browser preferences.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Essential Cookies</h4>
                    <p className="text-slate-600 text-sm">Required for basic site functionality</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Analytics Cookies</h4>
                    <p className="text-slate-600 text-sm">Help us improve user experience</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <UserCheck size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Your Rights</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Access and review your personal information",
                  "Correct inaccurate or incomplete data",
                  "Request deletion of your personal information",
                  "Object to processing of your data",
                  "Request data portability",
                  "Withdraw consent where applicable"
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#a3ff00] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-slate-900 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-slate-700">{right}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-[#a3ff00] to-[#8bcc00] p-8 lg:p-12 rounded-2xl shadow-xl text-slate-900">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Privacy Inquiries</h3>
                  <p className="text-slate-800 leading-relaxed">
                    For questions about this Privacy Policy or to exercise your rights, 
                    please contact our Data Protection Officer.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <div className="space-y-2 text-slate-800">
                    <p><strong>Email:</strong> privacy@portfolio.com</p>
                    <p><strong>Phone:</strong> +880 1234-567890</p>
                    <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </section>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PrivacyPolicyContent />
    </Layout>
  );
}
