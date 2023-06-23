import React from "react";
import styles from "../App.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { analytics } from "../utils/mixpanel";
import { AnalyticsEvent } from "../utils/constants";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <p style={{ padding: "0 24px" }}>
          Stay in the loop about new features and updates in our Tarot Reader
          app! <br />
          We'll never send you spam.
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => analytics.event(AnalyticsEvent.join_mailing_list)}
            style={{
              height: 60,
              backgroundColor: "#ab6b2c",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              cursor: "pointer",
              display: "flex",
              fontFamily: "Cinzel",
              fontWeight: "bold",
              color: "var(--fontColor)",
              fontSize: "22px",
            }}
          >
            <HiOutlineMail
              style={{ width: "24px", height: "24px", marginRight: "20px" }}
            />
            Join mailing list
          </button>
        </div>
        <p>
          Do you have any feedback? <br /> Drop us a line at <span> </span>
          <a
            href="mailto:hello@tarotreaderapp.com"
            onClick={() => analytics.event(AnalyticsEvent.email_write_pressed)}
          >
            hello@tarotreaderapp.com
          </a>
          <span> </span>🙌
        </p>
        <p style={{ maxWidth: "500px", textAlign: "center" }}>
          The content on this website and the Tarot Reader application is not
          intended as professional advice. It is for informational and
          educational purposes only.
        </p>
        <div style={{ display: "flex" }}>
          <Link
            to="terms-of-service"
            style={{ marginRight: "10px" }}
            onClick={() =>
              analytics.event(AnalyticsEvent.terms_of_service_pressed)
            }
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            style={{ marginLeft: "10px" }}
            onClick={() =>
              analytics.event(AnalyticsEvent.privacy_policy_pressed)
            }
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
