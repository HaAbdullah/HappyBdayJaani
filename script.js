// Utility function for generating random pastel colors
function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
}

// Create background polaroids
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

// Rotation angles for main polaroids
const rotationAngles = [5, -3, 7, -5, 4, -6, 3, -4, 6, -2, 5, -7, 4, -3, 6];

// Polaroid data
const polaroids = [
  {
    caption: "Happy Birthday Meri Jaan",
    imagePos: { x: 0, y: 70 },
    imagePath: "img/jaanunjaani.jpg",
  },
  {
    caption: "Happy Birthday",
    imagePos: { x: 0, y: -10 },
    imagePath: "",
  },
  {
    caption: "Happy Birthday",
    imagePos: { x: 0, y: -10 },
    imagePath: "/",
  },
  {
    caption: "Happy Birthday",
    imagePos: { x: -15, y: -10 },
    imagePath: "/",
  },
  {
    caption: "Happy Birthday",
    imagePos: { x: 0, y: 10 },
    imagePath: "img/eimaan3.jpg",
  },
  {
    caption: "Happy Birthday",
    imagePos: { x: 0, y: -10 },
    imagePath: "img/eimaan2.jpg",
  },
  {
    caption: "Happy birthday!! Ily and you mean so much to me Abeer 🫶🏼💜",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/eimaan1.jpg",
  },
  {
    caption: "Beach Day",
    imagePos: { x: 0, y: -10 },
    imagePath: "/path/to/your/image2.jpg",
  },
  {
    caption: "Neeeenja 🥷🏼",
    imagePos: { x: 0, y: -10 },
    imagePath: "/img/neeeeenjas.jpg",
  },
  {
    caption: "Beach Day",
    imagePos: { x: -15, y: -10 },
    imagePath: "/path/to/your/image2.jpg",
  },
  {
    caption: "Beach Day",
    imagePos: { x: -15, y: -10 },
    imagePath: "/path/to/your/image2.jpg",
  },
  {
    caption: "Beach Day",
    imagePos: { x: -15, y: -10 },
    imagePath: "/path/to/your/image2.jpg",
  },
];

// Modal elements
const modal = document.querySelector(".modal");
const videoContainer = document.getElementById("video-container");
const imageContainer = document.getElementById("image-container");
const videoPlayer = document.getElementById("video-player");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");

let currentVideoIndex = 0;
let currentPolaroidIndex = 0;
let isVideoModal = true;

// Video sources
const videos = [
  "/vid/eimaan.mp4",
  "/api/placeholder/400/320",
  "/api/placeholder/400/320",
];

// Modal functions
function openVideoModal() {
  isVideoModal = true;
  modal.style.display = "flex";
  videoContainer.style.display = "block";
  imageContainer.style.display = "none";
  videoPlayer.src = videos[currentVideoIndex];
}

function openImageModal(index) {
  isVideoModal = false;
  currentPolaroidIndex = index;
  modal.style.display = "flex";
  videoContainer.style.display = "none";
  imageContainer.style.display = "block";

  const polaroidData = polaroids[currentPolaroidIndex];

  // Create a new image to get natural dimensions
  const img = new Image();
  img.onload = function () {
    // Update modal image
    modalImage.src = this.src;
    modalCaption.textContent = polaroidData.caption;
  };
  img.src = polaroidData.imagePath || "/api/placeholder/400/320";
}

function closeModal() {
  modal.style.display = "none";
  if (isVideoModal) {
    videoPlayer.pause();
  }
}

// Navigation button event listeners
document.querySelector(".prev-button").addEventListener("click", () => {
  if (isVideoModal) {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];
  } else {
    currentPolaroidIndex =
      (currentPolaroidIndex - 1 + polaroids.length) % polaroids.length;
    const polaroidData = polaroids[currentPolaroidIndex];
    modalImage.src = polaroidData.imagePath || "/api/placeholder/400/320";
    modalCaption.textContent = polaroidData.caption;
  }
});

document.querySelector(".next-button").addEventListener("click", () => {
  if (isVideoModal) {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoPlayer.src = videos[currentVideoIndex];
  } else {
    currentPolaroidIndex = (currentPolaroidIndex + 1) % polaroids.length;
    const polaroidData = polaroids[currentPolaroidIndex];
    modalImage.src = polaroidData.imagePath || "/api/placeholder/400/320";
    modalCaption.textContent = polaroidData.caption;
  }
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
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
  img.className = `img${index + 1}`; // Assign unique class name like img1, img2, etc.
  img.src = data.imagePath || "/api/placeholder/400/320";
  img.style.left = `${data.imagePos.x}%`;
  img.style.top = `${data.imagePos.y}%`;

  // Add click handler to open image modal
  polaroid.addEventListener("click", () => openImageModal(index));

  const caption = document.createElement("div");
  caption.className = "caption";
  caption.textContent = data.caption;

  imageContainer.appendChild(img);
  polaroid.appendChild(imageContainer);
  polaroid.appendChild(caption);
  gallery.appendChild(polaroid);
});

// Update play button click handler
document.querySelector(".play-button").onclick = openVideoModal;
