import { Link } from "react-router-dom";
import { AnalyticsEvent } from "../../utils/constants";
import { analytics } from "../../utils/mixpanel";
import appStore from "../../images/app-store.svg";
import React from "react";

function AppStoreButton() {
  return (
    <Link
      to="/available-soon"
      onClick={() => analytics.event(AnalyticsEvent.apple_store_pressed)}
    >
      <img src={appStore} alt="Get on App Store" width="161.5" height="54" />
    </Link>
  );
}

export default AppStoreButton;
