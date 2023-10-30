import mixpanel from "mixpanel-browser";

const initKey = process.env.REACT_APP_KEY;
mixpanel.init(initKey || "", {
  debug: false,
  track_pageview: true,
});

export const analytics = {
  event: (name: string, params?: any) => {
    // firebaseAnalytics.logEvent(name, params)
    mixpanel.track(name, params);
  },
};
