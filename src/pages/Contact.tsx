import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111]">
      <div className="flex-grow max-w-4xl mx-auto p-8 w-full">
        <h1 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Contact Us</h1>
        <div className="markdown-body">
          <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us using the form below:</p>
          
          {status === 'success' ? (
            <div className="mt-8 p-6 bg-green-900/20 border border-green-500/50 rounded text-green-400 text-center font-medium">
              Thank you for your message! We will get back to you as soon as possible.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-lg">
              <div className="mb-4">
                <label className="block font-['Barlow_Condensed'] text-[14px] font-bold tracking-[1px] uppercase text-[#888] mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e] border border-[#333] rounded p-3 text-white font-['Barlow'] outline-none focus:border-[var(--color-red)] transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-['Barlow_Condensed'] text-[14px] font-bold tracking-[1px] uppercase text-[#888] mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e] border border-[#333] rounded p-3 text-white font-['Barlow'] outline-none focus:border-[var(--color-red)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block font-['Barlow_Condensed'] text-[14px] font-bold tracking-[1px] uppercase text-[#888] mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e1e] border border-[#333] rounded p-3 text-white font-['Barlow'] outline-none focus:border-[var(--color-red)] transition-colors resize-y"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[var(--color-red)] text-white font-['Barlow_Condensed'] text-[18px] font-bold tracking-[1px] uppercase py-3 px-8 rounded border-none cursor-pointer transition-all hover:bg-[var(--color-red-bright)] disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
