import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '../components/Layout';

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Show success popup
    setShowPopup(true);
    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">

          {/* Contact Information */}
          <motion.section {...fadeIn} className="mb-12 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
                  Contact <span className="text-[#a3ff00]">Information</span>
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#a3ff00] rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
                      <p className="text-slate-600 mb-1">+8801712643626</p>
                      <p className="text-slate-500 text-sm">Available Monday - Friday, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#a3ff00] rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email Correspondence</h3>
                      <p className="text-slate-600 mb-1">borhanbds@yahoo.com</p>
                      <p className="text-slate-500 text-sm">Professional inquiries and business partnerships</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#a3ff00] rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Corporate Headquarters</h3>
                      <p className="text-slate-600 mb-1">Dhaka, Bangladesh</p>
                      <p className="text-slate-500 text-sm">Central coordination for all healthcare enterprises</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#a3ff00] rounded-2xl flex items-center justify-center shrink-0">
                      <Globe size={24} className="text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Business Locations</h3>
                      <div className="text-slate-600 space-y-2">
                        <p><strong>Medicheck Medical Services:</strong> Multiple locations across Dhaka</p>
                        <p><strong>Medigo Health Care:</strong> Dhanmondi, Dhaka</p>
                        <p><strong>Medifly Health Services:</strong> Gulshan, Dhaka</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#a3ff00] rounded-2xl flex items-center justify-center shrink-0">
                      <Clock size={24} className="text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                      <div className="text-slate-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="text-sm text-slate-500 mt-2">Emergency services available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-[#a3ff00] rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-[#a3ff00] transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#a3ff00] rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-[#a3ff00] transition-colors">
                      <Twitter size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#a3ff00] rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-[#a3ff00] transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#a3ff00] rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-[#a3ff00] transition-colors">
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
                  Send a <span className="text-[#a3ff00]">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#a3ff00] focus:border-transparent outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#a3ff00] focus:border-transparent outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#a3ff00] focus:border-transparent outline-none"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#a3ff00] focus:border-transparent outline-none resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#a3ff00] text-slate-900 py-4 px-8 rounded-lg font-bold uppercase tracking-widest hover:bg-[#a3ff00]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </motion.section>

          {/* Company Locations */}
          <motion.section {...fadeIn} className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Globe size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Our Locations</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="w-16 h-16 bg-[#a3ff00] rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={32} className="text-slate-900" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Medicheck Medical Services</h4>
                <p className="text-slate-600 mb-4">Multiple locations across Bangladesh</p>
                <div className="space-y-2 text-slate-600">
                  <p>• Dhanmondi Branch</p>
                  <p>• Uttara Branch</p>
                  <p>• Mirpur Branch</p>
                  <p>• Chittagong Branch</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="w-16 h-16 bg-[#a3ff00] rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={32} className="text-slate-900" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Medigo Health Care</h4>
                <p className="text-slate-600 mb-4">Headquarters & Service Centers</p>
                <div className="space-y-2 text-slate-600">
                  <p>• Dhanmondi HQ</p>
                  <p>• Gulshan Service Center</p>
                  <p>• Online Platform</p>
                  <p>• Partner Hospitals</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="w-16 h-16 bg-[#a3ff00] rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={32} className="text-slate-900" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Medifly Health Services</h4>
                <p className="text-slate-600 mb-4">GAMCA Accredited Center</p>
                <div className="space-y-2 text-slate-600">
                  <p>• Dhanmondi Center</p>
                  <p>• Airport Medical Center</p>
                  <p>• Online Pre-screening</p>
                  <p>• International Partners</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section {...fadeIn}>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-[#a3ff00] rounded-lg">
                <Mail size={24} />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight">Frequently Asked Questions</h3>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#a3ff00]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#a3ff00] text-lg font-bold mb-2">How can I schedule a consultation?</h4>
                    <p className="text-slate-300">You can contact us directly via phone or email, or use our online booking system through Medigo Health Care.</p>
                  </div>
                  <div>
                    <h4 className="text-[#a3ff00] text-lg font-bold mb-2">What services do you offer?</h4>
                    <p className="text-slate-300">We offer comprehensive healthcare solutions including diagnostics, telemedicine, corporate wellness, and international medical screenings.</p>
                  </div>
                  <div>
                    <h4 className="text-[#a3ff00] text-lg font-bold mb-2">Do you accept international patients?</h4>
                    <p className="text-slate-300">Yes, we welcome international patients and provide specialized services for medical tourists and overseas workers.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#a3ff00] text-lg font-bold mb-2">What are your business hours?</h4>
                    <p className="text-slate-300">Monday-Friday: 9:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM. Emergency services available 24/7.</p>
                  </div>
                  <div>
                    <h4 className="text-[#a3ff00] text-lg font-bold mb-2">Do you offer corporate partnerships?</h4>
                    <p className="text-slate-300">Absolutely! We provide comprehensive corporate wellness programs and healthcare partnerships for businesses.</p>
                  </div>
                  <div>
                    <h4 className="text-[#a3ff00] text-lg font-bold mb-2">How do I get a quote for services?</h4>
                    <p className="text-slate-300">Contact us directly with your requirements, and we'll provide a customized quote based on your specific needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#a3ff00] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Check size={24} className="text-slate-900 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Thank You!</h3>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#a3ff00] text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-[#a3ff00]/90 transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export function Contact() {
  return (
    <Layout>
      <ContactContent />
    </Layout>
  );
}
