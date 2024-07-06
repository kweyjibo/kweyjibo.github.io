(async function view() {
  const el = document.getElementById("view-count");

  if (el) {
    const grabedurl = window.location.pathname;

    const url = `https://counter.dolzhenko.dev/hit?url=https://kweyjibo.com/+${grabedurl}`;

    try {
      const response = await fetch(url, {
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.text();
        el.insertAdjacentText("beforeend", data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("❗️Error " + error.message);
    }
  }
})();
