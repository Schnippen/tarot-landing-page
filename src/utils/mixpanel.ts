import mixpanel from "mixpanel-browser";

mixpanel.init("ssd", {
  debug: true,
  track_pageview: true,
});

export const analytics = {
  event: (name: string, params?: any) => {
    // firebaseAnalytics.logEvent(name, params)
    mixpanel.track(name, params);
  },
};
