import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import Footer from '../components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
    setSuccessMessage('');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }

    setIsLoading(true);

    try {
      // 1. Store lead in Firebase
      await addDoc(collection(db, 'leads'), {
        name: name.trim(),
        email: email.trim(),
        createdAt: serverTimestamp()
      });

      // 2. Show success message
      setSuccessMessage('Success! Redirecting you to the masterclass...');

      // Redirect to affiliate offer in new tab
      setTimeout(() => {
        window.open('https://warriorplus.com/o2/a/j7gbn11/0', '_blank');
        closeModal();
        setIsLoading(false);
        setName('');
        setEmail('');
      }, 1500);

    } catch (err) {
      console.error('Error saving lead:', err);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  // Scroll reveal logic
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[var(--color-red)] text-center py-2.5 px-5 font-['Barlow_Condensed'] text-[15px] font-semibold tracking-wide animate-pulse-bg">
        ⚠️ <span className="text-[var(--color-gold)] font-extrabold">WARNING:</span> If Your Website Is Under 3 Years Old — Watch This Before You Do Anything Else
      </div>

      {/* HERO */}
      <section className="bg-[#111] text-center pt-[60px] px-5 pb-[40px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(192,57,43,0.18)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="inline-block bg-[rgba(192,57,43,0.2)] border border-[var(--color-red)] text-[var(--color-red-bright)] font-['Barlow_Condensed'] text-[13px] font-bold tracking-[2px] uppercase py-1.5 px-[18px] rounded-sm mb-6">
          🔴 Free Masterclass — Limited Seats
        </div>
        
        <h1 className="font-['Bebas_Neue'] text-[clamp(46px,7vw,90px)] leading-[0.95] tracking-[1px] text-white max-w-[900px] mx-auto mb-2.5 relative z-10">
          Starting a New Site<br/>From Scratch Is
          <em className="text-[var(--color-red-bright)] not-italic block">{' \'Digital Suicide\''}</em>
        </h1>
        
        <p className="font-['Barlow_Condensed'] text-[clamp(18px,2.5vw,24px)] font-normal text-[#ccc] max-w-[680px] mx-auto mt-5 leading-relaxed relative z-10">
          <strong className="text-white font-bold">Don't bury years of progress.</strong><br/>
          Discover the exact strategy top brands use to save rankings, traffic, and revenue — without starting over.
        </p>

        <div className="flex justify-center gap-10 flex-wrap py-[30px] px-5 border-y border-[#222] mt-[30px] relative z-10">
          <div className="text-center">
            <div className="font-['Bebas_Neue'] text-[40px] text-[var(--color-red-bright)] leading-none">97%</div>
            <div className="text-[12px] text-[var(--color-gray)] uppercase tracking-[1px] mt-1">Sites That Migrate Wrong Lose Traffic</div>
          </div>
          <div className="text-center">
            <div className="font-['Bebas_Neue'] text-[40px] text-[var(--color-red-bright)] leading-none">0</div>
            <div className="text-[12px] text-[var(--color-gray)] uppercase tracking-[1px] mt-1">Cost To Attend This Masterclass</div>
          </div>
          <div className="text-center">
            <div className="font-['Bebas_Neue'] text-[40px] text-[var(--color-red-bright)] leading-none">10K+</div>
            <div className="text-[12px] text-[var(--color-gray)] uppercase tracking-[1px] mt-1">Marketers Already Registered</div>
          </div>
        </div>
      </section>

      {/* VSL SECTION */}
      <section className="max-w-[860px] mx-auto py-[50px] px-5">
        <div className="text-center font-['Barlow_Condensed'] text-[13px] font-bold tracking-[2px] uppercase text-[var(--color-red-bright)] mb-[14px]">
          ▶ Press Play To Watch The Free Training
        </div>
        
        <div 
          className="relative w-full aspect-video bg-black border-[3px] border-[#222] rounded-md overflow-hidden cursor-pointer shadow-[0_0_80px_rgba(192,57,43,0.25)] transition-shadow duration-300 hover:shadow-[0_0_120px_rgba(192,57,43,0.45)] group"
          onClick={openModal}
        >
          <div className="absolute inset-0 bg-[#0d0d0d]">
            <img 
              src="https://cdn.vectorstock.com/i/500p/43/34/modern-video-player-for-web-vector-48034334.jpg" 
              alt="Digital Suicide Video Training" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100" 
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-[var(--color-red)] rounded-full flex items-center justify-center transition-all duration-200 shadow-[0_0_0_0_rgba(192,57,43,0.6)] animate-ripple z-10 group-hover:bg-[var(--color-red-bright)] group-hover:scale-110">
            <div className="w-0 h-0 border-y-[14px] border-y-transparent border-l-[26px] border-l-white ml-1.5"></div>
          </div>
        </div>
        
        <p className="text-center mt-4 font-['Barlow_Condensed'] text-[14px] text-[var(--color-gray)] tracking-[0.5px]">
          👆 Click the video to <span className="text-[var(--color-red-bright)]">access the free training instantly</span> — no credit card required
        </p>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-[#0e0e0e] border-y border-[#1e1e1e] py-[60px] px-5">
        <div className="text-center font-['Barlow_Condensed'] text-[12px] font-bold tracking-[3px] uppercase text-[var(--color-gray)] mb-2.5">Inside The Free Training</div>
        <h2 className="font-['Bebas_Neue'] text-[clamp(36px,5vw,60px)] text-center mb-[50px] tracking-[1px] reveal">
          What You'll <span className="text-[var(--color-red-bright)]">Discover</span>
        </h2>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 max-w-[900px] mx-auto">
          {[
            { num: '01', title: 'The #1 Deadly Mistake', desc: 'Why 97% of marketers unknowingly destroy their own site authority — and how to avoid it completely.' },
            { num: '02', title: 'The Migration Shortcut', desc: 'The exact step-by-step process to move your site without losing a single Google ranking or visitor.' },
            { num: '03', title: 'Save Years of Work', desc: 'How to preserve your domain authority, backlink profile, and organic traffic during any platform change.' },
            { num: '04', title: 'Recover Lost Traffic', desc: 'Already made the mistake? Discover the rescue strategy that can bring your traffic back in 30–90 days.' },
            { num: '05', title: 'Revenue Protection System', desc: 'The 5-step checklist every affiliate marketer must run before any major site change to protect income.' },
            { num: '06', title: 'Free Bonus Tools', desc: 'Walk away with a ready-to-use migration audit sheet and ranking-protection checklist — yours free.' }
          ].map((item, i) => (
            <div key={i} className="bg-[#161616] border border-[#2a2a2a] border-l-[3px] border-l-[var(--color-red)] p-6 rounded transition-colors duration-200 hover:bg-[#1c1c1c] hover:border-l-[var(--color-red-bright)] reveal">
              <div className="font-['Bebas_Neue'] text-[36px] text-[var(--color-red-bright)] opacity-40 leading-none mb-2">{item.num}</div>
              <div className="font-['Barlow_Condensed'] text-[18px] font-bold text-white mb-2 uppercase tracking-[0.5px]">{item.title}</div>
              <div className="text-[14px] text-[#999] leading-[1.6]">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-[60px] px-5 max-w-[800px] mx-auto">
        <div className="text-center font-['Barlow_Condensed'] text-[12px] font-bold tracking-[3px] uppercase text-[var(--color-gray)] mb-2.5">This Masterclass Is Perfect For</div>
        <h2 className="text-center font-['Bebas_Neue'] text-[clamp(36px,5vw,60px)] tracking-[1px] mb-[50px] reveal">
          Is This <span className="text-[var(--color-red-bright)]">For You?</span>
        </h2>
        
        <ul className="flex flex-col gap-3.5 list-none">
          {[
            'Affiliate marketers who depend on organic traffic for their income',
            'Bloggers, content creators, and niche site owners planning a redesign or platform switch',
            'Digital marketers who have already seen a drop in traffic and want to recover fast',
            'Anyone who has invested months or years into building a website and wants to protect that investment',
            'Beginners who want to start smart and avoid the costly mistakes others make'
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3.5 bg-[#161616] border border-[#222] p-4 px-5 rounded text-[15px] text-[#ccc] leading-[1.5] reveal">
              <span className="text-[var(--color-red-bright)] text-[20px] shrink-0 mt-px">✔</span>
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[linear-gradient(180deg,#111_0%,#0a0000_100%)] text-center pt-[70px] px-5 pb-[80px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(192,57,43,0.2)_0%,transparent_60%)] pointer-events-none"></div>
        
        <h2 className="font-['Bebas_Neue'] text-[clamp(40px,6vw,72px)] leading-none mb-4 tracking-[1px] relative z-10 reveal">
          Reserve Your <span className="text-[var(--color-red-bright)]">Free Spot</span><br/>Right Now
        </h2>
        <p className="font-['Barlow_Condensed'] text-[18px] text-[#aaa] max-w-[500px] mx-auto mb-9 leading-[1.5] relative z-10 reveal">
          This live training fills up fast. Secure your seat before the doors close — it costs you nothing.
        </p>
        
        <button 
          className="inline-flex items-center gap-3 bg-[var(--color-red)] text-white font-['Barlow_Condensed'] text-[20px] font-bold tracking-[1px] uppercase py-[18px] px-[44px] rounded border-none cursor-pointer transition-all duration-200 shadow-[0_8px_32px_rgba(192,57,43,0.4)] hover:bg-[var(--color-red-bright)] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(192,57,43,0.55)] relative z-10 reveal"
          onClick={openModal}
        >
          <span className="w-7 h-7 bg-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center shrink-0">
            <span className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[13px] border-l-white ml-0.5"></span>
          </span>
          Watch The Free Masterclass
        </button>
        
        <div className="mt-5 text-[13px] text-[var(--color-gray)] relative z-10 reveal">
          <span className="text-[var(--color-red-bright)]">100% Free.</span> No credit card. No spam. Just pure value.
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.85)] z-[1000] flex items-center justify-center p-5 backdrop-blur-[4px]" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="bg-[#141414] border border-[#2a2a2a] border-t-[4px] border-t-[var(--color-red)] rounded-lg py-10 px-9 max-w-[480px] w-full relative animate-modal-in shadow-[0_0_80px_rgba(192,57,43,0.3)]">
            <button className="absolute top-3.5 right-[18px] bg-transparent border-none text-[#666] text-[24px] cursor-pointer leading-none transition-colors hover:text-white" onClick={closeModal}>✕</button>
            
            <div className="inline-block bg-[rgba(192,57,43,0.15)] border border-[var(--color-red)] text-[var(--color-red-bright)] font-['Barlow_Condensed'] text-[11px] font-bold tracking-[2px] uppercase py-1 px-3 rounded-sm mb-4">
              🔴 Free Access
            </div>
            
            <h2 className="font-['Bebas_Neue'] text-[34px] tracking-[1px] leading-[1.1] mb-2">
              Get <span className="text-[var(--color-red-bright)]">Instant Access</span><br/>To The Training
            </h2>
            <p className="text-[14px] text-[#999] mb-7 leading-[1.5]">
              Enter your details below and we'll send you straight to the masterclass — completely free.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-['Barlow_Condensed'] text-[12px] font-bold tracking-[1px] uppercase text-[#888] mb-1.5">Your First Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="eg Joe" 
                  className="w-full bg-[#1e1e1e] border border-[#333] rounded p-3.5 text-white font-['Barlow'] text-[15px] outline-none transition-colors focus:border-[var(--color-red)] placeholder:text-[#555]"
                />
              </div>
              <div className="mb-4">
                <label className="block font-['Barlow_Condensed'] text-[12px] font-bold tracking-[1px] uppercase text-[#888] mb-1.5">Your Best Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. you@email.com" 
                  className="w-full bg-[#1e1e1e] border border-[#333] rounded p-3.5 text-white font-['Barlow'] text-[15px] outline-none transition-colors focus:border-[var(--color-red)] placeholder:text-[#555]"
                />
              </div>

              {error && <div className="text-red-500 text-sm mb-3">{error}</div>}
              {successMessage && <div className="text-green-500 text-sm mb-3 font-bold">{successMessage}</div>}

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[var(--color-red)] text-white border-none rounded p-4 font-['Barlow_Condensed'] text-[18px] font-bold tracking-[1px] uppercase cursor-pointer mt-2 transition-all hover:bg-[var(--color-red-bright)] hover:-translate-y-[1px] flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Yes! Give Me Free Access</span>
                    <span className="text-[20px]">→</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-center mt-3.5 text-[12px] text-[#555]">
              🔒 Your info is 100% safe. <span className="text-[var(--color-red-bright)]">We hate spam</span> as much as you do.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
