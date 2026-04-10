import Footer from '../components/Footer';

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111]">
      <div className="flex-grow max-w-4xl mx-auto p-8 w-full">
        <h1 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Disclaimer</h1>
        <div className="markdown-body">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>Earnings Disclaimer</h2>
          <p>Every effort has been made to accurately represent our products and their potential. Even though this industry is one of the few where one can write their own check in terms of earnings, there is no guarantee that you will earn any money using the techniques and ideas in these materials.</p>
          <p>Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas and techniques. We do not purport this as a "get rich scheme."</p>
          <h2>Professional Advice</h2>
          <p>The information contained in or made available through our sites (including but not limited to information contained on videos, message boards, comments, on coaching calls, in emails, in text files, or in chats) cannot replace or substitute for the services of trained professionals in any field, including, but not limited to, financial, medical, psychological, or legal matters.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
