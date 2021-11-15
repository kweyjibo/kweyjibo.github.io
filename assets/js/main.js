"use strict";

function main() {
  let bottonTop = document.getElementById('bottonTop');

  let getScroll = () => {
    if (window.scrollY > 100) {
      bottonTop.style.display = 'block';
    } else {
      bottonTop.style.display = 'none';
    }
  }
  
  window.addEventListener('scroll', getScroll);
  getScroll();
}

if (document.readyState !== "loading") {
  main()
} else {
  window.addEventListener("DOMContentLoaded", main);
} 