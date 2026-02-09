import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export function CVDownload() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleDownload = () => {
    // Create a proper download link for the PDF
    const link = document.createElement('a');
    link.href = './CV/MD SIR PROFILE.pdf';
    link.download = 'MD SIR PROFILE.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div {...fadeIn} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-[#a3ff00] rounded-2xl flex items-center justify-center">
          <FileText size={24} className="text-slate-900" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Download CV</h3>
          <p className="text-slate-600">Get my comprehensive professional profile</p>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <Briefcase className="w-8 h-8 text-[#a3ff00] mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">15+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <Award className="w-8 h-8 text-[#a3ff00] mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">3</div>
            <div className="text-sm text-slate-600">Healthcare Enterprises</div>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <GraduationCap className="w-8 h-8 text-[#a3ff00] mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900">MS</div>
            <div className="text-sm text-slate-600">Advanced Education</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-slate-900">CV Includes:</h4>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#a3ff00] rounded-full"></div>
            Complete professional experience and achievements
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#a3ff00] rounded-full"></div>
            Educational background and certifications
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#a3ff00] rounded-full"></div>
            Business ventures and entrepreneurial success
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#a3ff00] rounded-full"></div>
            Professional skills and areas of expertise
          </li>
        </ul>
      </div>

      <button
        onClick={handleDownload}
        className="w-full mt-8 bg-[#a3ff00] text-slate-900 px-6 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#a3ff00]/90 transition-colors inline-flex items-center justify-center gap-3"
      >
        <Download size={20} />
        Download Full CV
      </button>
    </motion.div>
  );
}
