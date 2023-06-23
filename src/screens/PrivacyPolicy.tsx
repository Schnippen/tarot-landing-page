import React, { useEffect } from "react";
import styles from "../App.module.css";
import { Link } from "react-router-dom";
function PrivacyPolicy() {
  const CompanyName = "Tarot Reader App";
  const COMPANYNAME = "TAROT READER APP";

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    scrollToTop();
  }, []);
  const paragraphHeader = { marginTop: "40px", lineHeight: 1.5 };

  return (
    <main className={styles.main}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px 0",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--brown)",
            padding: "32px",
            borderRadius: "24px",
            boxShadow: "var(--BoxShadow)",
          }}
        >
          <article
            style={{
              maxWidth: "700px",
              minWidth: "40%",
              backgroundColor: "var(--beige)",
              fontFamily: "Lora",
              borderRadius: "24px",
              padding: "24px",
              lineHeight: 1.5,
            }}
          >
            <Link to="/" className={styles.Link}>
              Go to home page
            </Link>
            <h1
              style={{
                fontFamily: "Cinzel",
                fontSize: "1.8em",
                textAlign: "center",
              }}
            >
              Privacy Policy
            </h1>
            <p>Last updated: June 23, 2023</p>
            <p>
              The privacy of your data — and it is your data, not ours! — is a
              big deal to us. In this policy, we lay out: what data we collect
              and why; how your data is handled; and your rights with respect to
              your data. We promise we never sell your data: never have, never
              will.
            </p>
            <p>
              {`This policy applies to all products built and maintained by
              ${CompanyName}.`}
            </p>
            <p style={paragraphHeader}>
              <strong>What we collect and why</strong>
            </p>
            <p>
              Our guiding principle is to collect only what we need. Here’s what
              that means in practice:
            </p>
            <p style={paragraphHeader}>
              <strong>Identity &amp; access</strong>
            </p>
            <p>
              {`When you start using ${CompanyName} application, we assign you an
              anonymous user ID for account management and analytics purposes.
              We also use an anonymous device ID for account management and
              analytics purposes.`}
            </p>
            <p style={paragraphHeader}>
              <strong>Billing information</strong>
            </p>
            <p>
              {`If you buy ${CompanyName} Arcane Tokens, we collect
              purchase history for fraud prevention and analytics purposes.`}
            </p>
            <p style={paragraphHeader}>
              <strong>Geolocation data</strong>
            </p>
            <p>
              We collect city, region, and country location information. We do
              not collect granular or real-time geolocation data.
            </p>
            <p style={paragraphHeader}>
              <strong>Website and application interactions</strong>
            </p>
            <p>
              We collect information about your website and application activity
              for analytics and statistical purposes such as conversion rate
              testing and experimenting with new product designs. This includes,
              for example, your browser and operating system versions, which web
              pages you visited and how long they took to load, and which
              website referred you to us.
            </p>
            <p style={paragraphHeader}>
              <strong>Advertising and Cookies</strong>
            </p>
            <p>
              We collect information about your website and application activity
              for analytics and statistical purposes such as conversion rate
              testing and experimenting with new product designs. This includes,
              for example, your browser and operating system versions, which web
              pages you visited and how long they took to load, and which
              website referred you to us.
            </p>
            <p style={paragraphHeader}>
              <strong>Advertising and Cookies</strong>
            </p>
            <p>
              {`${CompanyName} runs contextual ads on various third-party platforms
              such as Facebook. Users who click on one of our ads will be sent
              to the ${CompanyName} marketing site. Where permissible under law, we
              may load an ad-company script on their browsers that sets a
              third-party cookie and sends information to the ad network to
              enable evaluation of the effectiveness of our ads, e.g., which ad
              they clicked and which keyword triggered the ad, and whether they
              performed certain actions such as clicking a button or submitting
              a form.`}
            </p>
            <p>
              We also use persistent first-party cookies and some third-party
              cookies to store certain preferences, make it easier for you to
              use our applications, and perform A/B testing as well as support
              some analytics.
            </p>
            <p>
              A cookie is a piece of text stored by your browser. It may help
              remember login information and site preferences. It might also
              collect information such as your browser type, operating system,
              web pages visited, duration of visit, content viewed, and other
              click-stream data. You can adjust cookie retention settings and
              accept or block individual cookies in your browser settings,
              although our apps won’t work and other aspects of our service may
              not function properly if you turn cookies off.
            </p>
            <p style={paragraphHeader}>
              <strong>Voluntary correspondence</strong>
            </p>
            <p>
              {`When you email ${CompanyName} with a question or to ask for help, we
              keep that correspondence, including your email address, so that we
              have a history of past correspondence to reference if you reach
              out in the future.`}
            </p>
            <p>
              We also store information you may volunteer, for example, written
              responses to surveys. If you agree to a customer interview, we may
              ask for your permission to record the conversation for future
              reference or use. We will only do so with your express consent.
            </p>
            <p style={paragraphHeader}>
              <strong>How we approach mobile app permissions</strong>
            </p>
            <p>
              Our mobile application typically must request your consent before
              accessing camera and other privacy-sensitive features of your
              device. Consent is always optional and our app will function
              without it, though some features will be unavailable.
            </p>
            <p style={paragraphHeader}>
              <strong>When we access or share your information</strong>
            </p>
            <p>
              <strong>To provide products or services you’ve requested.</strong>{" "}
              We use some standard third-party subprocessors like Google Cloud
              to help run our applications and provide the Services to you. We
              can provide a detailed list of third-party subprocessors at{" "}
              <strong>hello@whatsvegan.app</strong>.<br />
              <strong>
                To help you troubleshoot or squash a software bug.
              </strong>{" "}
              If at any point we need to access your content to help you with a
              support case.
              <br />
              <strong>To improve the quality of service.</strong> We may use
              your information to improve the quality of service we provide to
              you.
              <br />
              <strong>When required under applicable law.</strong>
            </p>
            <p style={paragraphHeader}>
              <strong>Your rights with respect to your information</strong>
            </p>
            <p>
              {`At ${CompanyName}, we strive to apply the same data rights to all
              customers, regardless of their location. Some of these rights
              include:`}
            </p>
            <p>
              <strong>• Right to Know. </strong> You have the right to know what
              personal information is collected, used, shared or sold. We
              outline both the categories and specific bits of data we collect,
              as well as how they are used, in this privacy policy.
              <br />
              <strong>• Right of Access. </strong> This includes your right to
              access the personal information we gather about you, and your
              right to obtain information about the sharing, storage, security
              and processing of that information.
              <br />
              <strong>• Right to Correction. </strong> You have the right to
              request correction of your personal information.
              <br />
              <strong>• Right to Erasure / “To Be Forgotten”. </strong> This is
              your right to request, subject to certain limitations under
              applicable law, that your personal information be erased from our
              possession and, by extension, from all of our service providers.
              Fulfillment of some data deletion requests may prevent you from
              using Tarot Reader App services because our applications may then
              no longer work. In such cases, a data deletion request may result
              in closing your account. To exercise this right, please contact us
              at
              <strong> hello@ TAROT .app.</strong>
              <br />
              <strong>• Right to Complain. </strong> You have the right to make
              a complaint regarding our handling of your personal information
              with the appropriate supervisory authority.
              <br />
              <strong>• Right to Restrict Processing. </strong> This is your
              right to request restriction of how and why your personal
              information is used or processed, including opting out of sale of
              personal information. (Again: we never have and never will sell
              your personal data.)
              <br />
              <strong>• Right to Object. </strong> You have the right, in
              certain situations, to object to how or why your personal
              information is processed.
              <br />
              <strong>• Right to Portability. </strong> You have the right to
              receive the personal information we have about you and the right
              to transmit it to another party.
              <br />
              <strong>
                • Right to not Be Subject to Automated Decision-Making.{" "}
              </strong>
              You have the right to object to and prevent any decision that
              could have a legal or similarly significant effect on you from
              being made solely based on automated processes. This right is
              limited if the decision is necessary for performance of any
              contract between you and us, is allowed by applicable law, or is
              based on your explicit consent.
              <br />
              <strong>• Right to Non-Discrimination. </strong> We do not and
              will not charge you a different amount to use our products, offer
              you different discounts, or give you a lower level of customer
              service because you have exercised your data privacy rights.
              However, the exercise of certain rights may, by virtue of your
              exercising those rights, prevent you from using our Services.
            </p>
            <p>
              If you have questions about exercising these rights or need
              assistance, please contact us at hello@whatsvegan.app. If an
              authorized agent is corresponding on your behalf, we will need
              written consent with a signature from the account holder before
              proceeding.
            </p>
            <p>
              If you are in the EU or UK, you can contact your data protection
              authority to file a complaint or learn more about local privacy
              laws.
            </p>
            <p style={paragraphHeader}>
              <strong>How we secure your data</strong>
            </p>
            <p>
              All data is encrypted via SSL/TLS when transmitted between our
              servers and your devices. The database backups are also encrypted.
            </p>
            <p style={paragraphHeader}>
              <strong>Changes &amp; questions</strong>
            </p>
            <p>
              We may update this policy as needed to comply with relevant
              regulations and reflect any new practices. Whenever we make a
              significant change to our policies, we will refresh the date at
              the top of this page and take any other appropriate steps to
              notify users.
            </p>
            <p>
              Have any questions, comments, or concerns about this privacy
              policy, your data, or your rights with respect to your
              information? Please get in touch by emailing us at
              hello@whatsvegan.app and we’ll be happy to try to answer them!
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
