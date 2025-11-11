import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          <strong>Effective Date:</strong> Updated on {new Date().toLocaleDateString()}
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By using Skills Guru (“Platform”), you agree to these Terms and Conditions.
            If you do not agree, please do not use the site.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. About Skills Guru</h2>
          <p className="leading-relaxed">
            Skills Guru is an e-learning platform providing online courses and learning
            resources to students globally. Users can register, purchase, and access
            educational content through our website.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You must provide accurate and complete information when creating an account.</li>
            <li>You are responsible for maintaining confidentiality of your login credentials.</li>
            <li>Any activity under your account is your responsibility.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Payments & Refunds</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Payments are processed via Razorpay.</li>
            <li>All prices are displayed in the applicable currency.</li>
            <li>
              Refunds, if applicable, are subject to our internal refund policy and payment
              gateway rules.
            </li>
            <li>
              Any disputes related to payments should first be raised via  
              <strong> skills.guru.team@gmail.com</strong>.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on Skills Guru (videos, text, graphics, logos, software) is owned by Skills Guru or
            its content partners. You may not reproduce, distribute, or modify any content
            without written consent.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. User Conduct</h2>
          <p className="leading-relaxed mb-2">
            You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Post or share inappropriate, illegal, or harmful content.</li>
            <li>Attempt to hack, disrupt, or misuse the platform.</li>
            <li>Share course materials publicly or sell them elsewhere.</li>
          </ul>
          <p className="leading-relaxed mt-2">
            Violation may lead to suspension or termination of your account.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p className="leading-relaxed">
            Skills Guru is not liable for:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Any damages resulting from use or inability to use the platform.</li>
            <li>Errors or interruptions in service.</li>
            <li>Third-party content or links accessed through our website.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
          <p className="leading-relaxed">
            We may suspend or terminate accounts that violate these Terms or misuse
            our services.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">9. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed by the laws of India, and disputes shall be
            resolved under the jurisdiction of Patna, Bihar courts.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">10. Contact Information</h2>
          <p className="leading-relaxed">
            For any concerns regarding these Terms, please contact:
          </p>
          <p className="font-semibold mt-2">info@suhtech.top</p>
        </section>

      </div>
    </div>
  );
};

export default TermsConditions;
