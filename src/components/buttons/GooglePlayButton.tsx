import React from 'react'
import { AnalyticsEvent } from '../../utils/constants';
import { analytics } from '../../utils/mixpanel';

import googlePlayImage from "../../images/google-play.png";

function GooglePlayButton() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.mobiletarotandroid"
      onClick={() => analytics.event(AnalyticsEvent.google_play_pressed)}
    >
      <img
        src={googlePlayImage}
        alt="Get on Google Play"
        height="80"
        width="206.7"
      ></img>
    </a>
  );
}

export default GooglePlayButton