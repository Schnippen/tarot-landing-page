import React, { useEffect } from "react";
import styles from "../App.module.css";
import { Link } from "react-router-dom";
import { AnalyticsEvent } from "../utils/constants";
import { analytics } from "../utils/mixpanel";

function TermsOfService() {
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
            <Link
              to="/"
              className={styles.Link}
              onClick={() =>
                analytics.event(AnalyticsEvent.go_to_home_page_pressed)
              }
            >
              Go to home page
            </Link>
            <h1
              style={{
                fontFamily: "Cinzel",
                fontSize: "1.8em",
                textAlign: "center",
              }}
            >
              Terms of Service
            </h1>
            <p>Last updated: June 23, 2023</p>
            <p>
              {`Please read these Terms of Service ("Terms", "Terms of Service")
          carefully before using the https://${CompanyName}.app website and/or the
          ${CompanyName} application operated by ${CompanyName} ("us", "we", or "our").`}
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </p>
            <p>
              <strong>
                By accessing or using the Service you agree to be bound by these
                Terms and by our Privacy policy that can be found at
                https://www.whatsvegan.app/privacy-policy. If you disagree with
                any part of the Terms or the Privacy Policy then you may not
                access the Service.
              </strong>
            </p>
            <p style={paragraphHeader}>
              <strong>Termination</strong>
            </p>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
            <p>
              A user must be a human. Accounts registered by “bots” or other
              automated methods are not permitted.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
            <p style={paragraphHeader}>
              <strong>Disclaimer</strong>
            </p>
            <p>
              {`The information on the https://${CompanyName}.app website and the
              ${CompanyName} application is for general information purposes only
              and is not intended to be nutritional or medical advice, and is
              not meant to substitute professional dietary advice or treatment.
              You should not rely upon any information found in ${CompanyName} to
              determine dietary changes, a medical diagnosis, or course of
              treatment. You should always consult with a competent, fully
              licensed medical professional when making any decisions regarding
              your health. The authors of ${CompanyName} will use reasonable efforts
              to include up-to-date and accurate information on this website and
              application, but make no representations, warranties, or
              assurances as to the accuracy, currency, or completeness of the
              information provided. The authors of ${CompanyName} shall not be
              liable for any damages or injury resulting from your access to, or
              inability to access, this website and application, or from your
              reliance upon any information provided on this website and
              application.`}
            </p>
            <p>
              By using or accessing this website and application you are
              accepting all the terms of this disclaimer. If you do not agree
              with anything included in this disclaimer, you should not use or
              access this website and application.
            </p>
            <p style={paragraphHeader}>
              <strong>The Application</strong>
            </p>
            <p>
              {`${CompanyName} application analyses pictures of ingredient lists in
              products provided by users to determine the origin of the
              ingredients in these products (either "vegan", "not vegan", or
              "potentially vegan"), and the origin of the whole products (either
              "vegan", "not vegan", or "potentially vegan"). The origins
              determined by the application are for general information purposes
              only and are not intended to be nutritional advice. The origins
              may be determined incorrectly due to misprintings, bad picture
              quality, user error, or other technical or non-technical reasons.
              ${CompanyName} is not responsible for incorrect results of the
              pictures analysis.`}
            </p>
            <p style={paragraphHeader}>
              <strong>Your Content</strong>
            </p>
            <p>
              {`“Your Content” means any and all information and content that you
              submit or use with the Service. As a user, you may submit Your
              Content on the Service. You shall be solely responsible for Your
              Content and you assume all risks associated with the use of Your
              Content, including any reliance on its accuracy, completeness or
              any disclosure of Your Content that personally identifies you or
              any third party. You affirm, represent and warrant that you own or
              have the necessary licenses, rights, consents and permissions to
              use Your Content and you hereby grant ${CompanyName} an irrevocable,
              non-exclusive, royalty-free worldwide license to reproduce,
              distribute, publicly display, perform and prepare derivative works
              and otherwise exploit Your Content and to grant sub-licences of
              the foregoing rights. You hereby irrevocably waive any claims and
              assertions of moral rights or attribution with respect to Your
              Content. You also agree that Your Content may be retained by us
              for a reasonable period of time for the purpose of improving or
              enhancing our Service. You further agree that ${CompanyName} is not
              responsible for the accuracy, currency, suitability, or quality of
              Your Content.`}
            </p>
            <p style={paragraphHeader}>
              <strong>Links To Other Web Sites</strong>
            </p>
            <p>
              {`Our Service may contain links to third-party web sites or services
              that are not owned or controlled by ${CompanyName}.`}
            </p>
            <p>
              {`${CompanyName} has no control over, and assumes no responsibility for,
              the content, privacy policies, or practices of any third party web
              sites or services. You further acknowledge and agree that
              ${CompanyName} shall not be responsible or liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with use of or reliance on any such content,
              goods or services available on or through any such web sites or
              services.`}
            </p>
            <p style={paragraphHeader}>
              <strong>Limitation of liability</strong>
            </p>
            <p>
              {`IN NO EVENT SHALL ${COMPANYNAME} BE LIABLE FOR ANY DIRECT, SPECIAL,
              INDIRECT OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY
              KIND, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS OR
              LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING
              BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE, ARISING OUT OF OR IN
              ANY WAY CONNECTED WITH THE USE OF THE SITE, THE SERVICES, THE
              CONTENT OR THE MATERIALS CONTAINED IN OR ACCESSED THROUGH THE
              SITE, INCLUDING WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR
              RESULTING FROM RELIANCE BY USER ON ANY INFORMATION OBTAINED FROM
              ${COMPANYNAME}, OR THAT RESULT FROM MISTAKES, OMISSIONS,
              INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS,
              VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF
              PERFORMANCE, WHETHER OR NOT RESULTING FROM ACTS OF GOD,
              COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS
              TO ${COMPANYNAME}'S RECORDS, CONTENT, PROGRAMS OR SERVICES. IN NO
              EVENT SHALL THE AGGREGATE LIABILITY OF ${COMPANYNAME}, WHETHER IN
              CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE, WHETHER ACTIVE,
              PASSIVE OR IMPUTED), PRODUCT LIABILITY, STRICT LIABILITY OR OTHER
              THEORY, ARISING OUT OF OR RELATING TO THE USE OF THE SITE EXCEED
              ANY COMPENSATION YOU PAY, IF ANY, TO ${COMPANYNAME} FOR ACCESS OR USE
              OF THE SITE. ${COMPANYNAME} GIVES NO RIGHTS OR WARRANTIES WITH RESPECT
              TO THE USE OF NAMES, TRADEMARK, LOGO TYPES, REGISTERED OR
              COPYRIGHTED DESIGNS OR WORKS OF ART DEPICTED IN ANY CONTENT, AND
              THE LICENSEE MUST SATISFY ITSELF THAT ALL NECESSARY RIGHTS,
              CONSENTS OR PERMISSION AS MAY BE REQUIRED FOR REPRODUCTION ARE
              SECURED. ${COMPANYNAME} IDENTIFIED THE CAPTION FOR THE CONTENT TO THE
              BEST OF ITS ABILITY, BUT CANNOT BE HELD RESPONSIBLE FOR ERRONEOUS
              OR INCOMPLETE CAPTION INFORMATION. ${COMPANYNAME} IS NOT RESPONSIBLE
              AND DISCLAIMS ALL LIABILITY FOR ANY MISUSE OF THE CONTENT BY THIRD
              PARTIES.`}
            </p>
            <p style={paragraphHeader}>
              <strong>Changes</strong>
            </p>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material we will try to
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
            <p style={paragraphHeader}>
              <strong>Contact Us</strong>
            </p>
            <p>
              If you have any questions about these Terms, please contact us.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}

export default TermsOfService;
