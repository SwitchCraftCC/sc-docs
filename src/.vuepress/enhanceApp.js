// https://github.com/vuejs/vuepress/issues/1499#issuecomment-849148930
// fork from vue-router@3.0.2
// src/util/scroll.js
function getElementPosition(el) {
  const docEl = document.documentElement;
  const docRect = docEl.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top,
  };
}

function scrollToAnchor(to) {
  const targetAnchor = to.hash.slice(1);
  const targetElement = document.getElementById(targetAnchor) || document.querySelector(`[name="${targetAnchor}"]`);

  if (targetElement) {
    return window.scrollTo({
      top: getElementPosition(targetElement).y,
      // behavior: "smooth",
    });
  } else {
    return false;
  }
}

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData, // site metadata
                  isServer, // is this enhancement applied in server-rendering or client
                }) => {
  // Adapted from https://github.com/vuepress/vuepress-community/blob/7feb5c514090b6901cd7d9998f4dd858e0055b7a/packages/vuepress-plugin-smooth-scroll/src/enhanceApp.ts#L21
  // With a bug fix for handling long pages
  router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      return window.scrollTo({
        top: savedPosition.y,
        // behavior: "smooth",
      });
    } else if (to.hash) {
      if (Vue.$vuepress.$get("disableScrollBehavior")) {
        return false;
      }
      const scrollResult = scrollToAnchor(to);

      if (scrollResult) {
        return scrollResult;
      } else {
        window.onload = () => {
          scrollToAnchor(to);
        };
      }
    } else {
      return window.scrollTo({
        top: 0,
        // behavior: "smooth",
      });
    }
  }
}
