import mixpanel from "mixpanel-browser";

const api = process.env.REACT_APP_API_KEY;
let api2 = "";
if (typeof api === "string") {
  api2 = api;
} else {
  api2 = "";
}

mixpanel.init(api2, {
  debug: false,
  track_pageview: true,
});

export const analytics = {
  event: (name: string, params?: any) => {
    // firebaseAnalytics.logEvent(name, params)
    mixpanel.track(name, params);
  },
};
