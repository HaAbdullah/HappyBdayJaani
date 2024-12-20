function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
}

const backgroundGallery = document.querySelector(".background-gallery");
for (let i = 0; i < 50; i++) {
  const polaroid = document.createElement("div");
  polaroid.className = "background-polaroid";
  polaroid.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

  const colorBox = document.createElement("div");
  colorBox.className = "background-color-box";
  colorBox.style.backgroundColor = getRandomPastelColor();

  polaroid.appendChild(colorBox);
  backgroundGallery.appendChild(polaroid);
}

const rotationAngles = [5, -3, 7, -5, 4, -6, 3, -4, 6, -2, 5, -7, 4, -3, 6];

const polaroids = [
  { caption: "First Memory", imagePos: { x: -10, y: -5 } },
  { caption: "Beach Day", imagePos: { x: -15, y: -10 } },
  { caption: "Party Time", imagePos: { x: -5, y: -15 } },
  { caption: "Coffee Date", imagePos: { x: -12, y: -8 } },
  { caption: "Movie Night", imagePos: { x: -8, y: -12 } },
  { caption: "Road Trip", imagePos: { x: -10, y: -10 } },
  { caption: "Game Night", imagePos: { x: -15, y: -5 } },
  { caption: "Birthday 2023", imagePos: { x: -5, y: -15 } },
  { caption: "Shopping Day", imagePos: { x: -12, y: -12 } },
  { caption: "Dinner Out", imagePos: { x: -8, y: -8 } },
  { caption: "Concert", imagePos: { x: -10, y: -5 } },
  { caption: "Birthday 2024", imagePos: { x: -5, y: -10 } },
];

const gallery = document.querySelector(".gallery");
polaroids.forEach((data, index) => {
  const polaroid = document.createElement("div");
  polaroid.className = "polaroid";
  polaroid.style.transform = `rotate(${
    rotationAngles[index % rotationAngles.length]
  }deg)`;

  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  const img = document.createElement("img");
  img.src = "/api/placeholder/400/320";
  img.style.left = `${data.imagePos.x}%`;
  img.style.top = `${data.imagePos.y}%`;

  const caption = document.createElement("div");
  caption.className = "caption";
  caption.textContent = data.caption;

  imageContainer.appendChild(img);
  polaroid.appendChild(imageContainer);
  polaroid.appendChild(caption);
  gallery.appendChild(polaroid);
});

const modal = document.querySelector(".modal");
const videoPlayer = document.getElementById("video-player");
let currentVideoIndex = 0;
const videos = [
  "/api/placeholder/400/320",
  "/api/placeholder/400/320",
  "/api/placeholder/400/320",
];

function openModal() {
  modal.style.display = "flex";
  videoPlayer.src = videos[currentVideoIndex];
}

function closeModal() {
  modal.style.display = "none";
  videoPlayer.pause();
}

document.querySelector(".prev-button").addEventListener("click", () => {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  videoPlayer.src = videos[currentVideoIndex];
});

document.querySelector(".next-button").addEventListener("click", () => {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  videoPlayer.src = videos[currentVideoIndex];
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
