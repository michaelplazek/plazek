import "./src/app/global.css"

/**
 * Since HTML is prerendered, need to wait until the JS
 * has loaded to show the screen. This hack fixes the flashing
 * on refresh.
*/
export const onInitialClientRender = () => {
  const item = document.getElementById("hide-content");
  item.removeAttribute("id");
};