import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { professionalProfile, businessEnterprises, careerTimeline } from '../utils/professionalData';

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

  const generateCVContent = () => {
    let content = '';
    
    // Header
    content += `${professionalProfile.name}\n`;
    content += `${professionalProfile.title}\n`;
    content += '=' .repeat(50) + '\n\n';
    
    // Contact Information
    content += 'CONTACT INFORMATION\n';
    content += '-'.repeat(20) + '\n';
    content += `Phone: ${professionalProfile.contact.phone}\n`;
    content += `Email: ${professionalProfile.contact.email}\n`;
    content += `Location: ${professionalProfile.contact.location}\n\n`;
    
    // Professional Summary
    content += 'PROFESSIONAL SUMMARY\n';
    content += '-'.repeat(20) + '\n';
    content += professionalProfile.summary + '\n\n';
    
    // Expertise
    content += 'AREAS OF EXPERTISE\n';
    content += '-'.repeat(20) + '\n';
    professionalProfile.expertise.forEach(category => {
      content += `\n${category.category}:\n`;
      category.skills.forEach(skill => {
        content += `• ${skill}\n`;
      });
    });
    content += '\n';
    
    // Education
    content += 'EDUCATION\n';
    content += '-'.repeat(20) + '\n';
    professionalProfile.education.forEach(edu => {
      content += `${edu.degree} (${edu.year})\n`;
      content += `${edu.institution}\n`;
      content += `${edu.description}\n\n`;
    });
    
    // Professional Experience
    content += 'PROFESSIONAL EXPERIENCE\n';
    content += '-'.repeat(25) + '\n';
    careerTimeline.forEach(exp => {
      content += `${exp.title} - ${exp.organization}\n`;
      content += `${exp.period}\n`;
      content += `${exp.description}\n`;
      exp.responsibilities.forEach(resp => {
        content += `• ${resp}\n`;
      });
      content += '\n';
    });
    
    // Current Business Ventures
    content += 'CURRENT BUSINESS VENTURES\n';
    content += '-'.repeat(30) + '\n';
    businessEnterprises.forEach(business => {
      content += `${business.name}\n`;
      content += `${business.role} (Since ${business.since})\n`;
      content += `${business.description}\n`;
      content += `Services: ${business.services.join(', ')}\n`;
      content += `Locations: ${business.locations}\n`;
      business.achievements.forEach(achievement => {
        content += `• ${achievement}\n`;
      });
      content += '\n';
    });
    
    // Certifications
    content += 'CERTIFICATIONS\n';
    content += '-'.repeat(20) + '\n';
    professionalProfile.certifications.forEach(cert => {
      content += `${cert.name} (${cert.year})\n`;
      content += `${cert.issuer}\n`;
      content += `${cert.description}\n\n`;
    });
    
    // Achievements
    content += 'ACHIEVEMENTS & RECOGNITION\n';
    content += '-'.repeat(30) + '\n';
    professionalProfile.achievements.forEach(achievement => {
      content += `${achievement.title} - ${achievement.organization} (${achievement.year})\n`;
      content += `${achievement.description}\n\n`;
    });
    
    // Professional Memberships
    content += 'PROFESSIONAL MEMBERSHIPS\n';
    content += '-'.repeat(25) + '\n';
    professionalProfile.professionalMemberships.forEach(membership => {
      content += `${membership.organization} - ${membership.role}\n`;
      content += `Member since ${membership.since}\n\n`;
    });
    
    // Languages
    content += 'LANGUAGES\n';
    content += '-'.repeat(15) + '\n';
    professionalProfile.languages.forEach(lang => {
      content += `${lang.language}: ${lang.proficiency}\n`;
    });
    content += '\n';
    
    // References
    content += 'REFERENCES\n';
    content += '-'.repeat(15) + '\n';
    content += 'Professional references available upon request.\n';
    
    return content;
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
