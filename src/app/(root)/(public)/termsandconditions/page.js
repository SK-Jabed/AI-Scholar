"use client";
import Container from "@/components/shared/Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TermsAndConditions = () => {
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
          Terms and Conditions
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
              AI Scholar Platform Terms of Service
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to AI Scholar, the premier course management system
              designed to transform your learning experience. These Terms and
              Conditions govern your use of our platform and services. By
              accessing or using AI Scholar, you agree to be bound by these
              terms.
            </p>
            <p className="text-lg text-gray-700">
              Please read these terms carefully as they contain important
              information about your legal rights, remedies, and obligations. If
              you do not agree to these terms, you may not use our services.
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-16">
            {/* Term 1 */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                1. Account Registration and Security
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  To access certain features of AI Scholar, you must register
                  for an account. When registering, you agree to provide
                  accurate, current, and complete information about yourself as
                  prompted by our registration form. You are solely responsible
                  for maintaining the confidentiality of your account
                  credentials and for all activities that occur under your
                  account.
                </p>
                <p>
                  You must immediately notify us of any unauthorized use of your
                  account or any other security breach. AI Scholar will not be
                  liable for any loss or damage arising from your failure to
                  comply with these security obligations. We reserve the right
                  to refuse service, terminate accounts, or remove content at
                  our sole discretion.
                </p>
                <p>
                  Accounts are personal to the registered user and may not be
                  transferred or shared with others. Institutional accounts must
                  be managed by authorized representatives of the organization.
                  We may require verification of your identity or organizational
                  affiliation at any time.
                </p>
              </div>
            </motion.div>

            {/* Term 2 */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                2. Acceptable Use Policy
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  You agree to use AI Scholar only for lawful purposes and in
                  accordance with these Terms. You must not use our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    In any way that violates any applicable law or regulation
                  </li>
                  <li>
                    To exploit, harm, or attempt to exploit or harm minors in
                    any way
                  </li>
                  <li>
                    To transmit any advertising or promotional material without
                    our consent
                  </li>
                  <li>
                    To impersonate or attempt to impersonate AI Scholar, an
                    employee, another user, or any other entity
                  </li>
                  <li>
                    To engage in any conduct that restricts or inhibits anyone
                    use of the platform
                  </li>
                </ul>
                <p>
                  You may not use any automated system, including robots,
                  spiders, or offline readers, to access the platform in a
                  manner that sends more request messages to our servers than a
                  human could reasonably produce in the same period.
                </p>
              </div>
            </motion.div>

            {/* Term 3 */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                3. Intellectual Property Rights
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  The AI Scholar platform and its entire contents, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video, and audio, and the
                  design, selection, and arrangement thereof) are owned by AI
                  Scholar, its licensors, or other providers of such material
                  and are protected by international copyright, trademark,
                  patent, trade secret, and other intellectual property or
                  proprietary rights laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable
                  license to access and use the platform for your personal,
                  non-commercial educational purposes. This license does not
                  include any resale or commercial use of the platform or its
                  contents; any derivative use of the platform or its contents;
                  or any use of data mining, robots, or similar data gathering
                  and extraction tools.
                </p>
                <p>
                  Course materials provided by instructors remain the
                  intellectual property of the respective instructors or their
                  licensors. Your access to these materials is governed by these
                  Terms and any additional terms specified by the instructor.
                </p>
              </div>
            </motion.div>

            {/* Term 4 */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                4. Payment and Refund Policy
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Certain features of AI Scholar may require payment of fees.
                  You agree to pay all applicable fees in connection with your
                  use of the platform. All fees are non-refundable except as
                  expressly stated otherwise in these Terms or required by law.
                </p>
                <p>For paid courses and subscriptions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Full refunds are available within 14 days of purchase if no
                    more than 20% of course content has been accessed
                  </li>
                  <li>
                    Partial refunds may be granted at our discretion in
                    exceptional circumstances
                  </li>
                  <li>
                    Refund requests must be submitted through our official
                    support channels
                  </li>
                  <li>Processing of refunds may take 5-10 business days</li>
                </ul>
                <p>
                  We reserve the right to change our fees at any time. Any fee
                  change will become effective at the end of your current
                  billing cycle. We will provide you with reasonable notice of
                  any fee changes.
                </p>
              </div>
            </motion.div>

            {/* Term 5 */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                5. User Content and Conduct
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  AI Scholar may allow you to post, link, store, share, and
                  otherwise make available certain information, text, graphics,
                  videos, or other material. You are responsible for all User
                  Content that you post to the platform, including its legality,
                  reliability, and appropriateness.
                </p>
                <p>By posting User Content, you represent and warrant that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    The Content is yours (you own it) or you have the right to
                    use it and grant us the rights and license as provided in
                    these Terms
                  </li>
                  <li>
                    The posting of your Content does not violate any privacy
                    rights, publicity rights, copyrights, contract rights, or
                    any other rights of any person or entity
                  </li>
                  <li>
                    The Content does not contain any viruses, worms, malware, or
                    other harmful or destructive content
                  </li>
                </ul>
                <p>
                  We reserve the right to terminate the account of any user
                  found to be infringing on copyright or other intellectual
                  property rights. AI Scholar has the right but not the
                  obligation to monitor and edit all User Content provided by
                  users.
                </p>
              </div>
            </motion.div>

            {/* Term 6 */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">
                6. Termination and Account Cancellation
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may terminate or suspend your account and bar access to the
                  platform immediately, without prior notice or liability, under
                  our sole discretion, for any reason whatsoever and without
                  limitation, including but not limited to a breach of these
                  Terms.
                </p>
                <p>
                  If you wish to terminate your account, you may simply
                  discontinue using the platform or request account deletion
                  through your account settings. All provisions of these Terms
                  which by their nature should survive termination shall survive
                  termination, including, without limitation, ownership
                  provisions, warranty disclaimers, indemnity, and limitations
                  of liability.
                </p>
                <p>
                  Upon termination, your right to use the platform will
                  immediately cease. If you wish to delete your User Content
                  from our systems, you must do so prior to terminating your
                  account. Some anonymized data may remain in our systems for
                  analytical purposes as described in our Privacy Policy.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
