// A simple utility to trigger a download of a text file that acts as our lead magnet.
// In a real scenario, this would point to an actual PDF file on the server or a CDN.

import { jsPDF } from 'jspdf';

export const downloadLeadMagnet = () => {
  const doc = new jsPDF();
  
  // Helper to add text with word wrap
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * lineHeight;
  };

  let yPos = 20;
  const margin = 20;
  const maxWidth = 170;
  const lineHeight = 7;

  // Title Page
  doc.setFontSize(12);
  doc.setTextColor(231, 76, 60); // Red
  doc.text('FREE GUIDE • DIGITAL MARKETING', margin, yPos);
  yPos += 15;

  doc.setFontSize(36);
  doc.setTextColor(17, 17, 17); // Dark
  doc.text('DIGITAL', margin, yPos);
  yPos += 12;
  
  doc.setTextColor(231, 76, 60); // Red
  doc.text('SUICIDE', margin, yPos);
  yPos += 15;

  doc.setFontSize(14);
  doc.setTextColor(17, 17, 17);
  doc.text('— THE TRUTH ABOUT STARTING FRESH ONLINE —', margin, yPos);
  yPos += 20;

  doc.setFontSize(16);
  doc.setTextColor(231, 76, 60);
  yPos += addWrappedText('Why Most Marketers Are Unknowingly Destroying Their Own Online Business', margin, yPos, maxWidth, 8);
  yPos += 5;

  doc.setFontSize(11);
  doc.setTextColor(68, 68, 68);
  const introText = `Every year, thousands of website owners make one catastrophic decision that wipes out months — even years — of hard work in a single move.\n\nThis free guide reveals what that mistake is, why it's so deadly, and exactly how to protect everything you've built online.`;
  yPos += addWrappedText(introText, margin, yPos, maxWidth, lineHeight);
  yPos += 15;

  // Black Box Simulation
  doc.setFillColor(17, 17, 17);
  doc.rect(margin, yPos, maxWidth, 40, 'F');
  doc.setTextColor(231, 76, 60);
  doc.setFontSize(30);
  doc.text('0', 105, yPos + 20, { align: 'center' });
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text('TRAFFIC', 105, yPos + 28, { align: 'center' });
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text('What happens when you start from scratch the wrong way', 105, yPos + 35, { align: 'center' });
  yPos += 55;

  doc.setFontSize(12);
  doc.setTextColor(231, 76, 60);
  doc.text('INSIDE THIS GUIDE:', margin, yPos);
  yPos += 10;

  doc.setFontSize(11);
  doc.setTextColor(68, 68, 68);
  const bullets = [
    "■ The 'Digital Suicide' mistake every beginner makes",
    "■ Why Google punishes fresh starts — and rewards continuity",
    "■ The 5-step checklist to protect your traffic & rankings",
    "■ How to recover if you've already made the mistake",
    "■ Your next step to master this completely — for free"
  ];
  
  bullets.forEach(bullet => {
    doc.text(bullet, margin, yPos);
    yPos += 8;
  });

  // Page 2
  doc.addPage();
  yPos = 20;

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFillColor(231, 76, 60);
  doc.rect(margin, yPos - 5, 60, 8, 'F');
  doc.text('CHAPTER 1 • THE PROBLEM', margin + 2, yPos);
  yPos += 15;

  doc.setFontSize(24);
  doc.setTextColor(17, 17, 17);
  doc.text('The Mistake That Kills', margin, yPos);
  yPos += 10;
  doc.setTextColor(231, 76, 60);
  doc.text('Good Websites.', margin, yPos);
  yPos += 15;

  doc.setFontSize(11);
  doc.setTextColor(68, 68, 68);
  const ch1Text1 = `Imagine you've spent 18 months building a website. You've written content, built backlinks, climbed Google's rankings slowly but surely — and traffic is finally growing.\n\nThen one day you decide: 'I want a fresh design. A new domain. A new start.'\n\nYou hit delete. You launch something new.`;
  yPos += addWrappedText(ch1Text1, margin, yPos, maxWidth, lineHeight);
  yPos += 5;

  doc.setTextColor(231, 76, 60);
  doc.setFontSize(12);
  doc.text('And within 30 days — your traffic drops to almost zero.', margin, yPos);
  yPos += 10;

  doc.setTextColor(68, 68, 68);
  doc.setFontSize(11);
  doc.text("This is 'Digital Suicide' — and it happens to thousands of marketers every single month.", margin, yPos);
  yPos += 20;

  doc.setFontSize(16);
  doc.setTextColor(231, 76, 60);
  doc.text('Why Does This Happen?', margin, yPos);
  yPos += 10;

  const reasons = [
    { title: 'Domain Authority is not transferable.', desc: 'When you abandon your old domain, you abandon years of trust signals Google has assigned to it. A new domain starts at zero.' },
    { title: 'Backlinks become orphaned.', desc: 'Every link pointing to your old site now points to nothing. Your entire backlink profile — which could represent months of outreach — disappears overnight.' },
    { title: 'Your content index resets.', desc: 'Google has to re-crawl, re-index, and re-rank every page on your new site. This takes months. During that time — silence.' },
    { title: 'User signals are lost.', desc: 'Click-through rates, dwell time, bounce rates — all the behavioural data Google used to rank you is gone. You start with zero social proof in the algorithm.' }
  ];

  reasons.forEach(reason => {
    doc.setFontSize(11);
    doc.setTextColor(17, 17, 17);
    doc.text(reason.title, margin, yPos);
    yPos += 6;
    doc.setTextColor(68, 68, 68);
    yPos += addWrappedText(reason.desc, margin, yPos, maxWidth, lineHeight);
    yPos += 5;
  });

  // Page 3
  doc.addPage();
  yPos = 20;

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFillColor(231, 76, 60);
  doc.rect(margin, yPos - 5, 70, 8, 'F');
  doc.text('CHAPTER 2 • THE PROTECTION SYSTEM', margin + 2, yPos);
  yPos += 15;

  doc.setFontSize(24);
  doc.setTextColor(17, 17, 17);
  doc.text('The 5-Step Site Migration', margin, yPos);
  yPos += 10;
  doc.setTextColor(231, 76, 60);
  doc.text('Protection Checklist', margin, yPos);
  yPos += 15;

  doc.setFontSize(11);
  doc.setTextColor(68, 68, 68);
  yPos += addWrappedText('Before you change anything about your website — domain, platform, hosting, design — run through every item on this checklist. Skipping even one step can cost you months of recovery time.', margin, yPos, maxWidth, lineHeight);
  yPos += 10;

  const steps = [
    { step: 'STEP 1', title: 'Audit Your Current Traffic & Rankings First', desc: 'Before touching anything, document exactly where you stand. Export your Google Search Console data, record your top-ranking pages, and note your average monthly organic traffic. This is your baseline — and your recovery target if anything goes wrong.' },
    { step: 'STEP 2', title: 'Set Up 301 Redirects For Every Single URL', desc: 'A 301 redirect tells Google that a page has permanently moved. This is how you pass link equity and authority from your old URLs to your new ones. Missing even 10–20% of your redirects can cause significant ranking loss. Map every old URL to its new equivalent before you go live.' },
    { step: 'STEP 3', title: 'Preserve Your Backlink Profile', desc: 'Export your full backlink list using a tool like Ahrefs or SEMrush before migration. After the move, verify that your highest-value backlinks are now pointing to live, redirected pages. Any broken high-authority links should be corrected via outreach to the linking site.' },
    { step: 'STEP 4', title: 'Migrate Content — Do Not Rewrite From Scratch', desc: 'Your existing content has been indexed, tested, and ranked. Do not rewrite it. Migrate it exactly as-is. If you want to improve it, do so after the migration is stable and rankings have been restored. Rewriting ranked content during a migration is a double risk.' },
    { step: 'STEP 5', title: 'Monitor & Recover For 90 Days Post-Migration', desc: 'Traffic dips of 10–20% immediately after migration are normal. Watch your Search Console for crawl errors, dropped URLs, and coverage issues. Set up weekly ranking checks on your top 20 pages and act on any anomalies within 48 hours.' }
  ];

  steps.forEach(s => {
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFillColor(231, 76, 60);
    doc.rect(margin, yPos, 20, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text(s.step, margin + 2, yPos + 5.5);
    
    doc.setTextColor(17, 17, 17);
    doc.setFontSize(12);
    doc.text(s.title, margin + 25, yPos + 6);
    yPos += 12;
    
    doc.setTextColor(68, 68, 68);
    doc.setFontSize(10);
    yPos += addWrappedText(s.desc, margin, yPos, maxWidth, lineHeight);
    yPos += 5;
  });

  // Page 4
  doc.addPage();
  yPos = 20;

  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.setFillColor(231, 76, 60);
  doc.rect(margin, yPos - 5, 70, 8, 'F');
  doc.text('CHAPTER 3 • RECOVERY & NEXT STEPS', margin + 2, yPos);
  yPos += 15;

  doc.setFontSize(24);
  doc.setTextColor(17, 17, 17);
  doc.text('Already Made The Mistake?', margin, yPos);
  yPos += 10;
  doc.setTextColor(231, 76, 60);
  doc.text("Here's How To Recover.", margin, yPos);
  yPos += 15;

  doc.setFontSize(11);
  doc.setTextColor(68, 68, 68);
  yPos += addWrappedText("If you've already started fresh and are watching your traffic flatline — don't panic. Recovery is possible. But it requires a deliberate, methodical approach.", margin, yPos, maxWidth, lineHeight);
  yPos += 10;

  const recoverySteps = [
    { title: "1. Reconnect your old domain's authority", desc: "If your old domain is still available, redirect it to your new site. Even a partially active old domain can pass residual authority to your new one." },
    { title: "2. Rebuild your internal link structure", desc: "Google needs to understand the hierarchy of your new site. Create a clear silo structure with pillar pages and supporting content linked correctly from day one." },
    { title: "3. Re-submit your sitemap immediately", desc: "Log into Google Search Console, submit your XML sitemap, and request indexing for your most important pages manually. Don't wait for Google to find them." },
    { title: "4. Run a backlink reclamation campaign", desc: "Email every site that linked to your old content and ask them to update the link to your new URL. A 30% success rate on this can dramatically accelerate recovery." },
    { title: "5. Publish consistently for 90 days", desc: "Google rewards fresh signals. Publishing 2–3 high-quality pieces per week for 90 days post-migration tells the algorithm your site is active, trustworthy, and growing." }
  ];

  recoverySteps.forEach(s => {
    doc.setTextColor(17, 17, 17);
    doc.setFontSize(11);
    doc.text(s.title, margin, yPos);
    yPos += 6;
    
    doc.setTextColor(68, 68, 68);
    doc.setFontSize(10);
    yPos += addWrappedText(s.desc, margin, yPos, maxWidth, lineHeight);
    yPos += 5;
  });

  yPos += 15;
  doc.setFillColor(17, 17, 17);
  doc.rect(margin, yPos, maxWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.text('Want The Complete Step-By-Step System?', 105, yPos + 15, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setTextColor(200, 200, 200);
  doc.text('Join the Free Masterclass and walk away with the full migration blueprint,', 105, yPos + 25, { align: 'center' });
  doc.text('live examples, and a done-for-you recovery checklist.', 105, yPos + 32, { align: 'center' });

  doc.save('Digital_Suicide_Guide.pdf');
};

