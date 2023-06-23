import mixpanel from "mixpanel-browser";

import API_KEY

mixpanel.init(API_KEY, {
  debug: true,
  track_pageview: true,
});

export const analytics = {
  event: (name: string, params?: any) => {
    // firebaseAnalytics.logEvent(name, params)
    mixpanel.track(name, params);
  },
};
