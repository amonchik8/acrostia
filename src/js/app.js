import Glide from "@glidejs/glide";

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1,
  gap: 0,
}).mount();