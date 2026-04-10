import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] text-center p-5 text-xs text-[#444] bg-[#111]">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 text-[#666]">
          <strong>Earnings Disclaimer:</strong> We don't believe in "get rich quick" programs - only in hard work, adding value, building a real and professional career, and serving others with excellence and constancy. Our programs are intended to help you share your message with a wider audience and to make a difference in the world while growing your personal brand. Our programs take a lot of work and discipline just like any worthwhile endeavor or professional continuing education program. Please don't enroll in our programs if you believe in the "money for nothing get rich quick" myth or ideology; we only want serious people dedicated to real professional development who want to add value and move humanity forward. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with our ideas, information, tools or strategies.
        </p>
        <p className="mb-4">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-[#888]">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <span>|</span>
          <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
