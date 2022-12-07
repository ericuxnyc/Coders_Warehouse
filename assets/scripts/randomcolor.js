let body = document.querySelector("body");
let rgb_title = document.querySelector(".title_rgb");
let hex_title = document.querySelector(".title_hex");
let hsl_title = document.querySelector(".title_hsl");
let random = document.querySelector("button");
let red = () => Math.floor(Math.random() * 256);
let green = () => Math.floor(Math.random() * 256);
let blue = () => Math.floor(Math.random() * 256);
let color = () => `rgb(${red()}, ${green()}, ${blue()})`;

const randomColor = () => {};

let hexConverter = function (...args) {};
function rgbToHex(R, G, B) {
  return toHex(R) + toHex(G) + toHex(B);
}
function toHex(n) {
  n = parseInt(n, 10);
  if (isNaN(n)) return "00";
  n = Math.max(0, Math.min(n, 255));
  return (
    "0123456789ABCDEF".charAt((n - (n % 16)) / 16) +
    "0123456789ABCDEF".charAt(n % 16)
  );
}

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}
rgbToHex(red(), green(), blue());
let colorChange = () => {
  rgb_title.innerText = color();
  hex_title.innerText = rgbToHex(red(), green(), blue());
  //hsl_title.innerText = rgbToHsl(red(), green(), blue());
  body.style.background = color();
};
random.addEventListener("click", colorChange);
