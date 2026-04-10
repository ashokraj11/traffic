import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111]">
      <div className="flex-grow max-w-4xl mx-auto p-8 w-full">
        <h1 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Privacy Policy</h1>
        <div className="markdown-body">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>
          <h2>1. Information we collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
          <h2>2. Use of Information</h2>
          <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
          <ul>
            <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
            <li>To improve our website in order to better serve you.</li>
            <li>To send periodic emails regarding your order or other products and services.</li>
          </ul>
          <h2>3. Data Storage</h2>
          <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
