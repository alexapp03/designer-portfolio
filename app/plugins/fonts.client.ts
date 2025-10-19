export default defineNuxtPlugin(() => {
  // Load Google Fonts asynchronously to avoid render blocking
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
    link.media = "print";
    link.onload = function () {
      // @ts-expect-error - media property exists on HTMLLinkElement
      this.media = "all";
    };
    document.head.appendChild(link);

    // Fallback for older browsers
    const noscriptLink = document.createElement("noscript");
    noscriptLink.innerHTML =
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap">';
    document.head.appendChild(noscriptLink);
  }
});
