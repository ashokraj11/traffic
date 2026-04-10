// A simple utility to trigger a download of a text file that acts as our lead magnet.
// In a real scenario, this would point to an actual PDF file on the server or a CDN.

export const downloadLeadMagnet = () => {
  const content = `FREE GUIDE • DIGITAL MARKETING

DIGITAL SUICIDE
— THE TRUTH ABOUT STARTING FRESH ONLINE —

Why Most Marketers Are Unknowingly Destroying Their Own Online Business

Every year, thousands of website owners make one catastrophic decision
that wipes out months — even years — of hard work in a single move.
This free guide reveals what that mistake is, why it's so deadly,
and exactly how to protect everything you've built online.

0 TRAFFIC
What happens when you start from scratch the wrong way

INSIDE THIS GUIDE:
■ The 'Digital Suicide' mistake every beginner makes
■ Why Google punishes fresh starts — and rewards continuity
■ The 5-step checklist to protect your traffic & rankings
■ How to recover if you've already made the mistake
■ Your next step to master this completely — for free

---------------------------------------------------------

CHAPTER 1 • THE PROBLEM
The Mistake That Kills Good Websites.

Imagine you've spent 18 months building a website. You've written content, built backlinks, climbed Google's rankings slowly but surely — and traffic is finally growing.

Then one day you decide: 'I want a fresh design. A new domain. A new start.'
You hit delete. You launch something new.

And within 30 days — your traffic drops to almost zero.

This is 'Digital Suicide' — and it happens to thousands of marketers every single month.

97% of sites that migrate wrong lose traffic
6–12 months to recover if you're lucky
$000s in revenue lost before they realise

Why Does This Happen?

Domain Authority is not transferable.
When you abandon your old domain, you abandon years of trust signals Google has assigned to it. A new domain starts at zero.

Backlinks become orphaned.
Every link pointing to your old site now points to nothing. Your entire backlink profile — which could represent months of outreach — disappears overnight.

Your content index resets.
Google has to re-crawl, re-index, and re-rank every page on your new site. This takes months. During that time — silence.

User signals are lost.
Click-through rates, dwell time, bounce rates — all the behavioural data Google used to rank you is gone. You start with zero social proof in the algorithm.

---------------------------------------------------------

CHAPTER 2 • THE PROTECTION SYSTEM
The 5-Step Site Migration Protection Checklist

Before you change anything about your website — domain, platform, hosting, design — run through every item on this checklist. Skipping even one step can cost you months of recovery time.

STEP 1: Audit Your Current Traffic & Rankings First
Before touching anything, document exactly where you stand. Export your Google Search Console data, record your top-ranking pages, and note your average monthly organic traffic. This is your baseline — and your recovery target if anything goes wrong.

STEP 2: Set Up 301 Redirects For Every Single URL
A 301 redirect tells Google that a page has permanently moved. This is how you pass link equity and authority from your old URLs to your new ones. Missing even 10–20% of your redirects can cause significant ranking loss. Map every old URL to its new equivalent before you go live.

STEP 3: Preserve Your Backlink Profile
Export your full backlink list using a tool like Ahrefs or SEMrush before migration. After the move, verify that your highest-value backlinks are now pointing to live, redirected pages. Any broken high-authority links should be corrected via outreach to the linking site.

STEP 4: Migrate Content — Do Not Rewrite From Scratch
Your existing content has been indexed, tested, and ranked. Do not rewrite it. Migrate it exactly as-is. If you want to improve it, do so after the migration is stable and rankings have been restored. Rewriting ranked content during a migration is a double risk.

STEP 5: Monitor & Recover For 90 Days Post-Migration
Traffic dips of 10–20% immediately after migration are normal. Watch your Search Console for crawl errors, dropped URLs, and coverage issues. Set up weekly ranking checks on your top 20 pages and act on any anomalies within 48 hours.

---------------------------------------------------------

CHAPTER 3 • RECOVERY & NEXT STEPS
Already Made The Mistake? Here's How To Recover.

If you've already started fresh and are watching your traffic flatline — don't panic. Recovery is possible. But it requires a deliberate, methodical approach.

1. Reconnect your old domain's authority
If your old domain is still available, redirect it to your new site. Even a partially active old domain can pass residual authority to your new one.

2. Rebuild your internal link structure
Google needs to understand the hierarchy of your new site. Create a clear silo structure with pillar pages and supporting content linked correctly from day one.

3. Re-submit your sitemap immediately
Log into Google Search Console, submit your XML sitemap, and request indexing for your most important pages manually. Don't wait for Google to find them.

4. Run a backlink reclamation campaign
Email every site that linked to your old content and ask them to update the link to your new URL. A 30% success rate on this can dramatically accelerate recovery.

5. Publish consistently for 90 days
Google rewards fresh signals. Publishing 2–3 high-quality pieces per week for 90 days post-migration tells the algorithm your site is active, trustworthy, and growing.

Want The Complete Step-By-Step System?
Join the Free Masterclass and walk away with the full migration blueprint, live examples, and a done-for-you recovery checklist.

■ YES — GIVE ME FREE ACCESS NOW
100% Free. No credit card. Click above to register instantly.
  `;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Digital_Suicide_Guide.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

