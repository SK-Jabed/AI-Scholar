"use client";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white">
      {/* Gradient Banner */}
      <div className="w-full h-50 bg-gradient-to-r from-purple-600 via-violet-700 to-blue-600 flex items-center xl:px-28 lg:px-24 md:px-10 sm:px-4 px-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          Privacy Statement
        </motion.h1>
      </div>

      {/* Main Content Container */}
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16"
        >
          {/* Introduction */}
          <motion.div variants={item} className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Comprehensive Privacy Policy for AI Scholar
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At AI Scholar, we recognize that privacy is a fundamental right
              and take the protection of your personal data with the utmost
              seriousness. This comprehensive privacy policy explains in detail
              how we collect, use, disclose, and safeguard your information when
              you use our course management system and related services.
            </p>
            <p className="text-lg text-gray-700">
              This document serves as our commitment to transparency about our
              data practices and your rights regarding your personal
              information. We encourage you to read this policy carefully to
              understand our practices fully.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-16">
            {/* Policy 1 - Detailed */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                1. Comprehensive Information Collection Practices
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar collects various types of information to provide
                  and improve our educational services. During account
                  registration, we require essential personal details including
                  your full legal name, email address, academic institution
                  affiliation (if applicable), and contact information. For
                  payment processing, we collect billing details which may
                  include credit card information, though complete payment card
                  numbers are never stored on our servers.
                </p>
                <p>
                  As you engage with our platform, we automatically gather
                  technical information such as your IP address, browser type
                  and version, time zone setting, browser plug-in types,
                  operating system, and platform. We also collect detailed usage
                  data including the full URL clickstream to, through, and from
                  our platform (including date and time), pages you viewed or
                  searched for, page response times, download errors, length of
                  visits to certain pages, page interaction information (such as
                  scrolling, clicks, and mouse-overs), and methods used to
                  browse away from the page.
                </p>
                <p>
                  For academic purposes, we collect comprehensive course
                  interaction data including time spent on materials, quiz and
                  assignment submissions, discussion forum participation, and
                  progress tracking. This educational data helps us personalize
                  your learning experience and improve our course offerings.
                </p>
              </div>
            </motion.div>

            {/* Policy 2 - Detailed */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                2. Detailed Usage of Collected Information
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The personal information we collect serves multiple critical
                  functions in delivering and enhancing our educational
                  services. Primarily, we use your data to create and maintain
                  your academic account, process course enrollments, and
                  facilitate your participation in our learning programs. Your
                  contact information enables us to send important
                  administrative communications regarding account verification,
                  changes to our terms or policies, security alerts, and other
                  service-related notifications.
                </p>
                <p>
                  Academically, we utilize your data to track and certify course
                  completion, issue academic credentials, and provide
                  personalized learning recommendations based on your progress
                  and performance. Our system analyzes your interaction patterns
                  with course materials to identify areas where you might need
                  additional support or resources, allowing us to enhance your
                  learning outcomes.
                </p>
                <p>
                  From a technical perspective, we employ collected data to
                  maintain platform security, prevent fraud, troubleshoot
                  technical issues, and conduct system maintenance. Usage
                  patterns help us understand how our platform is utilized,
                  informing decisions about interface improvements, feature
                  development, and resource allocation. We may use anonymized,
                  aggregated data for statistical analysis, academic research,
                  and partnership reporting, always ensuring individual users
                  cannot be identified from such data.
                </p>
              </div>
            </motion.div>

            {/* Policy 3 - Detailed */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                3. Rigorous Data Protection Measures
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar implements a multi-layered security framework
                  designed to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  All data transmissions between your device and our servers are
                  encrypted using TLS 1.2 or higher protocols, ensuring secure
                  communication channels. Our databases employ industry-standard
                  AES-256 encryption for stored sensitive data, with encryption
                  keys managed through a secure key management service.
                </p>
                <p>
                  Access to personal information is strictly limited to
                  authorized personnel who require it to perform their job
                  functions. All employees undergo comprehensive security
                  training and must adhere to strict confidentiality agreements.
                  We maintain detailed access logs and implement multi-factor
                  authentication for all administrative systems handling user
                  data.
                </p>
                <p>
                  Our security program includes regular penetration testing
                  conducted by independent cybersecurity firms, continuous
                  vulnerability scanning, and a dedicated security operations
                  center monitoring for suspicious activity 24/7. We maintain an
                  incident response plan that outlines procedures for
                  identifying, containing, eradicating, and recovering from
                  potential security incidents, with notification protocols for
                  affected users when legally required.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                4. Comprehensive Data Retention and Deletion Framework
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar maintains a structured data retention schedule
                  designed to balance operational needs with privacy protection.
                  We retain personal information only for as long as necessary
                  to fulfill the purposes outlined in this policy, unless a
                  longer retention period is required or permitted by law. The
                  specific retention periods vary depending on:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account information:</strong> Retained for 5 years
                    after last activity to accommodate potential re-enrollment
                    and certification verification
                  </li>
                  <li>
                    <strong>Academic records:</strong> Maintained indefinitely
                    to preserve proof of course completion and credentials
                    issued
                  </li>
                  <li>
                    <strong>Financial transactions:</strong> Kept for 7 years to
                    comply with tax and accounting regulations
                  </li>
                  <li>
                    <strong>Support communications:</strong> Archived for 3
                    years to ensure continuity in service quality
                  </li>
                </ul>
                <p>
                  Upon account deletion request, we initiate a multi-stage
                  process: First, we immediately restrict account access and
                  begin anonymizing non-essential personal data. Within 30 days,
                  we permanently remove all identifiable personal information
                  from active systems. Backup copies containing personal data
                  are securely erased during our regular 6-month backup rotation
                  cycle.
                </p>
                <p>
                  Certain information may be retained in aggregated or
                  anonymized form for analytical purposes, where it no longer
                  identifies individuals. Academic achievement records may be
                  preserved in a de-identified format to maintain the integrity
                  of our certification programs and prevent fraudulent
                  credential claims.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                5. Global Data Transfer Mechanisms and Protections
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  As a global educational platform, AI Scholar may transfer,
                  store, and process your personal information in countries
                  outside your country of residence, including the United States
                  and other locations where our service providers operate. We
                  implement rigorous safeguards for all international data
                  transfers, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Standard Contractual Clauses approved by relevant data
                    protection authorities
                  </li>
                  <li>
                    Data processing agreements that meet or exceed GDPR
                    requirements
                  </li>
                  <li>Regular audits of third-country data processors</li>
                  <li>
                    Encryption-in-transit and at-rest for all cross-border
                    transfers
                  </li>
                </ul>
                <p>
                  Our primary data centers are located in [Country/Region], with
                  disaster recovery sites in [Secondary Location]. All locations
                  are chosen based on their robust privacy frameworks and
                  physical security measures. When transferring data from the
                  European Economic Area (EEA), we ensure recipients provide
                  adequate protection as defined by EU data protection law.
                </p>
                <p>
                  By using our services, you acknowledge that your personal data
                  may be transferred to countries with different data protection
                  laws than your residence. Regardless of location, we apply the
                  protections described in this policy and require our partners
                  to maintain equivalent safeguards.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                6. Special Provisions for Minor Users
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar is committed to protecting the privacy of children
                  who use our services. Our platform is designed for users aged
                  13 and above, with additional protections for minors:
                </p>
                <p>
                  <strong>For users aged 13-15:</strong> We require verifiable
                  parental consent before collecting any personal information.
                  This consent process involves:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct communication with a parent or legal guardian</li>
                  <li>Verification of the parental relationship</li>
                  <li>Clear explanation of data collection purposes</li>
                  <li>
                    Option for parents to review and delete collected
                    information
                  </li>
                </ul>
                <p>
                  <strong>For users aged 16-17:</strong> While parental consent
                  is not required, we implement additional safeguards including
                  restricted access to certain community features, enhanced
                  privacy defaults, and special monitoring for potential
                  vulnerabilities.
                </p>
                <p>
                  We never knowingly collect personal information from children
                  under 13 without proper consent. Parents who discover their
                  child has provided information without consent may contact us
                  immediately to request deletion. We maintain special
                  procedures for handling such requests, including verification
                  of parental status and prompt investigation.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                7. Comprehensive User Rights and Data Control Options
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar recognizes your fundamental rights regarding
                  personal data and provides multiple mechanisms for exercising
                  these rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> You may request a complete copy of
                    your personal data in a structured, commonly used format.
                    This includes account details, course progress, and
                    system-generated inferences.
                  </li>
                  <li>
                    <strong>Rectification:</strong> You can update inaccurate or
                    incomplete information through your account settings or by
                    submitting a formal request.
                  </li>
                  <li>
                    <strong>Erasure:</strong> Subject to legal limitations, you
                    may request deletion of personal data not required for
                    essential services.
                  </li>
                  <li>
                    <strong>Restriction:</strong> You can limit how we use your
                    data during dispute resolution or when accuracy is
                    contested.
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact our Data Protection
                  Officer through the designated portal in your account
                  settings. We respond to all legitimate requests within 30
                  days, though complex cases may require additional time. For
                  security purposes, we verify identity before processing rights
                  requests, which may require providing specific authentication
                  details.
                </p>
                <p>
                  Even after account deletion, certain information may remain in
                  our systems where required for legitimate business purposes,
                  legal compliance, or academic record-keeping. We will inform
                  you of any such retention when processing deletion requests.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                8. Data Breach Response and Notification Procedures
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar maintains a comprehensive Incident Response Plan to
                  address potential data breaches or security incidents. Our
                  protocol includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Immediate containment:</strong> Within 1 hour of
                    detection, our security team isolates affected systems to
                    prevent further unauthorized access.
                  </li>
                  <li>
                    <strong>Forensic analysis:</strong> Cybersecurity experts
                    conduct thorough investigation to determine breach scope and
                    impacted data types.
                  </li>
                  <li>
                    <strong>Risk assessment:</strong> We evaluate potential harm
                    to affected individuals based on data sensitivity and breach
                    circumstances.
                  </li>
                </ul>
                <p>
                  When we determine a breach is likely to result in risk to
                  individual rights and freedoms, we notify affected users
                  within 72 hours of confirmation. Notifications include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Description of the nature of the breach</li>
                  <li>
                    Categories and approximate number of affected individuals
                  </li>
                  <li>Likely consequences of the breach</li>
                  <li>Measures taken or proposed to address the breach</li>
                </ul>
                <p>
                  We maintain relationships with data protection authorities in
                  all jurisdictions where we operate and comply with local
                  breach notification laws. In cases involving high risk to
                  users, we may provide additional protective measures such as
                  complimentary credit monitoring or identity theft protection
                  services.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                9. Automated Decision-Making and Educational Profiling
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar employs advanced algorithms and machine learning to
                  enhance the educational experience through several automated
                  processes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personalized Learning Paths:</strong> Our system
                    analyzes your interaction patterns, quiz results, and
                    engagement metrics to recommend tailored course materials
                    and difficulty adjustments.
                  </li>
                  <li>
                    <strong>Performance Predictions:</strong> Using historical
                    data from similar learners, we generate probabilistic models
                    to identify students who might benefit from additional
                    support.
                  </li>
                  <li>
                    <strong>Content Moderation:</strong> Automated systems scan
                    discussion forums and submissions for inappropriate content,
                    plagiarism, or policy violations.
                  </li>
                </ul>
                <p>
                  These automated systems are regularly audited for fairness and
                  accuracy by our Data Ethics Board. Significant decisions based
                  solely on automated processing (such as academic probation
                  flags) will always involve human review. You may request
                  manual reconsideration of any automated decision through your
                  instructor or academic advisor.
                </p>
                <p>
                  We maintain detailed documentation of all algorithms used for
                  educational profiling, including their purpose, logic, and
                  potential consequences. This documentation is available for
                  review by regulatory bodies upon request, with appropriate
                  protections for our intellectual property.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                10. Academic Research and Data Analytics
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar contributes to the advancement of educational
                  science through rigorous research initiatives. Our research
                  data practices include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>De-identification Protocols:</strong> All research
                    data undergoes a multi-step anonymization process including
                    pseudonymization, aggregation, and noise injection to
                    prevent re-identification.
                  </li>
                  <li>
                    <strong>Research Partnerships:</strong> We collaborate with
                    accredited academic institutions under strict data sharing
                    agreements that prohibit any attempt to identify
                    individuals.
                  </li>
                  <li>
                    <strong>Publication Standards:</strong> Research findings
                    are reviewed to ensure no personally identifiable
                    information is disclosed, even indirectly through unique
                    combinations of attributes.
                  </li>
                </ul>
                <p>
                  You may opt-out of research participation through your account
                  settings, which will exclude your data from all future
                  studies. Note that opting out does not remove your data from
                  studies already underway or published results, as withdrawal
                  would compromise research integrity.
                </p>
                <p>
                  Our Institutional Review Board (IRB) oversees all research
                  activities, ensuring compliance with ethical guidelines and
                  regulatory requirements. All studies undergo formal ethics
                  review before accessing any platform data, regardless of its
                  anonymized status.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                11. Marketing Preferences and Communication Controls
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar respects your communication preferences and
                  provides granular control over all non-essential messages:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Promotional Emails:</strong> You may opt-in/out of
                    marketing communications about new courses, features, or
                    special offers. All promotional emails include clear
                    unsubscribe instructions.
                  </li>
                  <li>
                    <strong>Academic Notifications:</strong> Critical course
                    updates, deadline reminders, and instructor messages are
                    considered essential communications that cannot be disabled.
                  </li>
                  <li>
                    <strong>Third-Party Offers:</strong> We never sell your
                    contact information, but may occasionally partner with
                    educational organizations for relevant offers. These always
                    include opt-out mechanisms.
                  </li>
                </ul>
                <p>
                  Our communication systems implement preference centers that
                  remember your choices across devices and browsers. Marketing
                  preferences are processed within 24 hours of update, though
                  you may still receive in-progress campaigns during this
                  period.
                </p>
                <p>
                  We analyze open rates and engagement patterns to improve
                  communication relevance, but never track whether you read
                  specific messages at the individual level. All email tracking
                  is aggregated to protect privacy while maintaining insight
                  into communication effectiveness.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                12. Technical Data Collection and Device Fingerprinting
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  To maintain platform security and optimize performance, AI
                  Scholar collects detailed technical information about your
                  access devices:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Device Characteristics:</strong> Including operating
                    system version, browser type, screen resolution, and
                    installed fonts for proper content rendering.
                  </li>
                  <li>
                    <strong>Network Information:</strong> Such as approximate
                    geographic location (derived from IP address), connection
                    speed, and service provider to troubleshoot performance
                    issues.
                  </li>
                  <li>
                    <strong>Security Signatures:</strong> Including TLS
                    handshake parameters and certificate details to prevent
                    man-in-the-middle attacks.
                  </li>
                </ul>
                <p>
                  We implement passive fingerprinting techniques to detect
                  suspicious login attempts without storing traditional tracking
                  cookies. This security mechanism analyzes immutable device
                  characteristics to identify potential account takeover
                  attempts while preserving user privacy.
                </p>
                <p>
                  Technical data is automatically purged after 90 days unless
                  being used for active security investigations. You may request
                  immediate deletion of this data through our security portal,
                  though doing so may require re-authentication on all your
                  devices for security purposes.
                </p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                13. Regulatory Compliance and Cross-Border Data Governance
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar adheres to multiple privacy regulations worldwide
                  through our unified compliance program:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>GDPR (EU):</strong> We comply with all General Data
                    Protection Regulation requirements including data subject
                    rights, privacy by design, and processor obligations.
                  </li>
                  <li>
                    <strong>FERPA (US):</strong> For educational institutions,
                    we support compliance with Family Educational Rights and
                    Privacy Act requirements.
                  </li>
                  <li>
                    <strong>
                      LGPD (Brazil), PIPEDA (Canada), APP (Australia):
                    </strong>{" "}
                    Our program incorporates requirements from these and other
                    major privacy laws.
                  </li>
                </ul>
                <p>
                  Our Data Protection Officer oversees compliance across all
                  jurisdictions where we operate. We maintain detailed Records
                  of Processing Activities (ROPAs) and regularly conduct Data
                  Protection Impact Assessments (DPIAs) for high-risk processing
                  activities.
                </p>
                <p>
                  In cases where legal requirements conflict between
                  jurisdictions, we apply the highest applicable standard to all
                  users globally. We will challenge any government request for
                  user data that we believe to be overbroad or inconsistent with
                  human rights principles.
                </p>
              </div>
            </motion.div>

            {/* Additional Policies (condensed for example) */}
            {[
              {
                title: "14. Third-Party Service Providers and Data Sharing",
                content: [
                  "AI Scholar engages with select third-party service providers to perform various functions necessary for our operations. These include cloud hosting services, payment processors, email delivery platforms, analytics providers, and customer support tools. We carefully vet all third-party vendors for compliance with data protection standards and only share the minimum information necessary for them to perform their contracted services.",
                  "Our payment processing is handled by PCI-DSS compliant providers who meet rigorous security standards for financial transactions. For email communications, we use enterprise-grade platforms that implement strong security controls and privacy protections. Analytics providers receive only anonymized, aggregated data that cannot be used to identify individual users.",
                  "In certain circumstances, we may disclose personal information when required by law, such as in response to valid legal process (subpoenas, court orders, etc.), or when we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.",
                ],
              },
              {
                title: "15. Cookies and Tracking Technologies",
                content: [
                  "Our platform utilizes cookies and similar tracking technologies to enhance user experience, analyze trends, administer the platform, track users' movements around the platform, and gather demographic information about our user base. Cookies are small data files stored on your device that allow us to recognize returning users and remember preferences.",
                  "We employ both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired). Essential cookies are necessary for core platform functionality, including authentication and security processes. Performance cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously.",
                  "You have control over non-essential cookies through our cookie preference center, accessible at any time through your account settings. Most web browsers also allow some control of cookies through browser settings, though disabling essential cookies may impact platform functionality.",
                ],
              },
              // Continue with 10+ more similarly detailed policies...
              {
                title: "16. Policy Updates and Version Control",
                content: [
                  "This privacy policy may be updated periodically to reflect changes in our practices, services, or legal requirements. When we make material changes, we will notify you through email (sent to the email address specified in your account) or through a prominent notice on our platform prior to the change becoming effective.",
                  "We maintain version control for this policy, with previous versions archived and available upon request. The 'Last Updated' date at the top of this policy indicates when the most recent changes were made. Your continued use of our services after any modification to this privacy policy will constitute your acceptance of such modification.",
                  "We encourage you to periodically review this page for the latest information about our privacy practices. If you do not agree to the modified policy, you should discontinue your use of our services and contact us regarding data deletion options.",
                ],
              },
            ].map((policy, index) => (
              <motion.div key={index} variants={item}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                  {policy.title}
                </h3>
                <div className="space-y-4 text-gray-700">
                  {policy.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
