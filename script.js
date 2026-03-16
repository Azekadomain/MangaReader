const viewer = document.getElementById("viewer");

const pages = [
  "manga/climber/ch1/001.png",
  "manga/climber/ch1/002.png",
  "manga/climber/ch1/003.png",
];

pages.forEach((p) => {
  const img = document.createElement("img");
  img.src = p;
  viewer.appendChild(img);
});
