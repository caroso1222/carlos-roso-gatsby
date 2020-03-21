/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "prismjs/themes/prism-okaidia.css"
import "./src/styles/global.scss"
require("prismjs/plugins/line-numbers/prism-line-numbers.css")

/**
 * Enlarges prism blocks that contain line-numbers. This is sort of a hack because we sometimes
 * need some code blocks to be larger. We find them with line-numbers.
 */
function enlargeCode() {
  const els = document.querySelectorAll('.line-numbers');
  els.forEach(el => {
    const parent = el.parentElement;
    parent.classList.add('gatsby-highlight--lg');
  });
}

export function onRouteUpdate() {
  enlargeCode();
}
