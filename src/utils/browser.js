import Bowser from "bowser";

const browser = Bowser.getParser(window.navigator.userAgent);

export const getBrowser = () => browser.getBrowser();
export const needsFooterSupport = () => browser.satisfies({
  mobile: {
    safari: '>=9',
    chrome: '>=80'
  },
});
