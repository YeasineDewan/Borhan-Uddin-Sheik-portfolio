import { motion } from 'framer-motion';
import { FileText, AlertCircle, Shield, Users, Gavel, Scale } from 'lucide-react';
import { Layout } from '../components/Layout';

function TermsOfServiceContent() {
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
              <FileText size={40} className="text-slate-900" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              These terms govern your use of our professional portfolio services. By accessing our platform, you agree to these terms.
            </p>
            <div className="mt-8 text-sm text-slate-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div {...fadeInUp} className="space-y-12">
            
            {/* Acceptance of Terms */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Gavel size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Acceptance of Terms</h2>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="text-slate-600 leading-relaxed mb-4">
                  By accessing and using this professional portfolio platform, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
                <div className="border-l-4 border-[#a3ff00] pl-6 mt-4">
                  <p className="text-slate-700 font-medium">
                    If you do not agree to these terms, please refrain from using our services.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Description */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Users size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Service Description</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">What We Provide</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Professional portfolio hosting and management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Career information display and networking features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#a3ff00] rounded-full mt-2"></div>
                      <span>Professional development resources and tools</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Service Availability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                    Services may be temporarily suspended for maintenance, updates, or technical issues.
                  </p>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">User Responsibilities</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Account Security",
                    description: "Maintain confidentiality of login credentials and notify us immediately of unauthorized access",
                    icon: <Shield size={20} />
                  },
                  {
                    title: "Content Accuracy",
                    description: "Provide truthful and accurate information in your professional profile",
                    icon: <FileText size={20} />
                  },
                  {
                    title: "Professional Conduct",
                    description: "Use services for legitimate professional purposes and comply with applicable laws",
                    icon: <Users size={20} />
                  },
                  {
                    title: "Respect Others",
                    description: "Refrain from harassment, spam, or inappropriate behavior towards other users",
                    icon: <AlertCircle size={20} />
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

            {/* Prohibited Activities */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <AlertCircle size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Prohibited Activities</h2>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <p className="text-slate-700 font-medium mb-4">You may not use our services to:</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Post false, misleading, or fraudulent information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Violate intellectual property rights of others</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Engage in spam, phishing, or malicious activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Attempt to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span>Use services for illegal or unethical purposes</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Scale size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Intellectual Property</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#a3ff00] pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Platform Content</h3>
                  <p className="text-slate-600 leading-relaxed">
                    The platform, including its design, features, and functionality, is owned by us and protected 
                    by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a3ff00] pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">User Content</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You retain ownership of content you post but grant us a license to use, modify, and display it 
                    solely for providing and improving our services.
                  </p>
                </div>
                
                <div className="border-l-4 border-[#a3ff00] pl-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Third-Party Content</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Third-party content and materials are the property of their respective owners and are used 
                    with permission or under applicable licenses.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <AlertCircle size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Limitation of Liability</h2>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <p className="text-slate-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                  special, or consequential damages arising from your use of our services.
                </p>
                <div className="border-l-4 border-orange-500 pl-6 mt-4">
                  <p className="text-slate-700 font-medium">
                    Our total liability shall not exceed the amount paid by you, if any, for using our services 
                    during the twelve months preceding the claim.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <Gavel size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Termination</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-3">By You</h3>
                  <p className="text-slate-600 text-sm">
                    You may terminate your account at any time by following the account deletion process 
                    in your settings or contacting our support team.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-slate-900 mb-3">By Us</h3>
                  <p className="text-slate-600 text-sm">
                    We may suspend or terminate your account for violations of these terms, 
                    illegal activities, or at our discretion with reasonable notice.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#a3ff00] rounded-xl flex items-center justify-center">
                  <FileText size={24} className="text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Changes to Terms</h2>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="text-slate-600 leading-relaxed mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting, and your continued use of the services constitutes acceptance of the modified terms.
                </p>
                <div className="border-l-4 border-[#a3ff00] pl-6 mt-4">
                  <p className="text-slate-700 font-medium">
                    Material changes will be highlighted and communicated to users through email or platform notifications.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-[#a3ff00] to-[#8bcc00] p-8 lg:p-12 rounded-2xl shadow-xl text-slate-900">
              <h2 className="text-3xl font-bold mb-6">Legal Contact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Questions About Terms</h3>
                  <p className="text-slate-800 leading-relaxed">
                    For legal inquiries or questions about these Terms of Service, 
                    please contact our legal department.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <div className="space-y-2 text-slate-800">
                    <p><strong>Legal Email:</strong> legal@portfolio.com</p>
                    <p><strong>General Email:</strong> support@portfolio.com</p>
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

export default function TermsOfService() {
  return (
    <Layout>
      <TermsOfServiceContent />
    </Layout>
  );
}
