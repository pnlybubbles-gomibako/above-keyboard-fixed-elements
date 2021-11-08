const bottomBar = document.getElementById("bottombar");
const viewport = window.visualViewport;
const scrolling = document.getElementById("scrolling");

// ref: https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport
function viewportHandler() {
  const layoutViewport = document.getElementById("layoutViewport");
  const bottomBarHeight = bottomBar.getBoundingClientRect().height;
  scrolling.style.height = `${viewport.height - bottomBarHeight}px`;
  scrolling.style.bottom = `${bottomBarHeight}px`;

  const offsetTop =
    viewport.height -
    layoutViewport.getBoundingClientRect().height +
    viewport.offsetTop;
  console.log(viewport, layoutViewport.getBoundingClientRect())

  const transformStyle = `translateY(${offsetTop}px)`;

  bottomBar.style.transform = transformStyle;
  scrolling.style.transform = transformStyle;
}

window.visualViewport.addEventListener("scroll", viewportHandler);
window.visualViewport.addEventListener("resize", viewportHandler);
bottomBar.addEventListener("touchmove", (e) => e.preventDefault(), {
  passive: false,
});

document.body.style.minHeight = `${window.innerHeight}px`;
viewportHandler();
