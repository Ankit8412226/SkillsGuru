import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          <strong>Effective Date:</strong> Updated on {new Date().toLocaleDateString()}
        </p>

        {/* SECTION 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to Skills Guru (“we,” “our,” “us”). Your privacy is important
            to us. This Privacy Policy explains how we collect, use, and protect
            your information when you use our website skills-guru.vercel.app and
            related services.
          </p>
          <p className="leading-relaxed mt-2">
            By accessing or using our platform, you agree to the practices
            described in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and payment details (processed securely via Razorpay).
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, and
              profile details.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent, browser
              type, device information, and IP address.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your
              experience and analyze site usage.
            </li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <p className="leading-relaxed">
            We use collected data to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Provide and improve our e-learning services.</li>
            <li>Process transactions and manage your account.</li>
            <li>Send important updates, promotional content, or course recommendations.</li>
            <li>Ensure platform security and prevent fraud.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            4. Payment Information
          </h2>
          <p className="leading-relaxed">
            All payments are securely processed via Razorpay, a third-party
            payment gateway. We do not store your full credit/debit card
            information on our servers. Please review Razorpay’s privacy policy
            for more details.
          </p>
        </section>

        {/* SECTION 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Data Protection</h2>
          <p className="leading-relaxed">
            We implement industry-standard security measures (encryption, secure
            servers, limited access) to protect your information. However, no
            system is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        {/* SECTION 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p className="leading-relaxed">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Access, correct, or delete your data.</li>
            <li>Withdraw consent at any time.</li>
            <li>Request data portability or restriction of processing.</li>
          </ul>
          <p className="leading-relaxed mt-2">
            To exercise these rights, please contact us at:{" "}
            <strong>skills.guru.team@gmail.com</strong>
          </p>
        </section>

        {/* SECTION 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            7. Third-Party Services
          </h2>
          <p className="leading-relaxed">
            We may use third-party tools (e.g., analytics, payment processors,
            email services) that collect or process your data under their own
            privacy policies.
          </p>
        </section>

        {/* SECTION 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Children’s Privacy</h2>
          <p className="leading-relaxed">
            Our platform is not intended for children under 13. We do not
            knowingly collect data from minors.
          </p>
        </section>

        {/* SECTION 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            9. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised “Effective Date.”
          </p>
        </section>

        {/* SECTION 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
          <p className="leading-relaxed">
            If you have questions or concerns regarding this Privacy Policy,
            please contact:
          </p>
          <p className="font-semibold mt-2">info@suhtech.top</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
