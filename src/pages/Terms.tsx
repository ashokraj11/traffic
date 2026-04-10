import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111]">
      <div className="flex-grow max-w-4xl mx-auto p-8 w-full">
        <h1 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Terms & Conditions</h1>
        <div className="markdown-body">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Terms</h2>
          <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          <h2>3. Disclaimer</h2>
          <p>The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          <h2>4. Limitations</h2>
          <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on this site.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
