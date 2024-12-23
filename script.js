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
const rotationAngles = [
  5, -3, 7, -5, 4, -6, 3, -4, 6, -2, 5, -7, 4, -3, 4, -5, -7, 4, -3, 3,
];

// Polaroid data
const polaroids = [
  {
    caption: "My favourite Christmas tree",
    imagePos: { x: 0, y: 38 },
    imagePath: "img/abeer2.jpg",
    zIndex: 1,
  },
  {
    caption: "HAPPY BIRTHDAY ABEER",
    imagePos: { x: 0, y: 37 },
    imagePath: "img/ananya.jpg",
    zIndex: 1,
  },
  // {
  //   caption:
  //     "I miss your emo abeer phase (fr if you were a guy, I would have asked you out)",
  //   imagePos: { x: 0, y: -10 },
  //   imagePath: "img/abeer3.jpg",
  //   zIndex: 1,
  // },
  {
    caption: "Happy Birthday",
    imagePos: { x: -15, y: -10 },
    imagePath: "",
    zIndex: 1,
  },
  {
    caption: "WE LOVE YOU SO MUCH",
    imagePos: { x: -15, y: -10 },
    imagePath: "img/anushka4.jpg",
    zIndex: 1,
  },
  {
    caption: "You were always planning and plotting something",
    imagePos: { x: 0, y: 40 },
    imagePath: "img/abeer1.jpg",
    zIndex: 5,
  },
  {
    caption: "Happy Birthday Meri Jaan",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/jaanunjaani.jpg",
    zIndex: 4,
  },
  {
    caption: "Happy Birthday",
    imagePos: { x: 0, y: -10 },
    imagePath: "img/eimaan2.jpg",
    zIndex: 4,
  },
  {
    caption: "FUN FUN TIMES",
    imagePos: { x: 5, y: -10 },
    imagePath: "img/kat1.jpg",
    zIndex: 3,
  },
  {
    caption: "HAPPY BIRTHDAY ABEER",
    imagePos: { x: 5, y: 20 },
    imagePath: "img/ananya.jpg",
  },
  // {
  //   caption: "Neeeenja 🥷🏼",
  //   imagePos: { x: 0, y: -10 },
  //   imagePath: "img/neeeeenjas.jpg",
  //   zIndex: 1,
  // },
  {
    caption: "Happy birthday!! Ily and you mean so much to me Abeer 🫶🏼💜",
    imagePos: { x: 1, y: 20 },
    imagePath: "img/eimaan1.jpg",
    zIndex: 4,
  },
  {
    caption:
      "Happy 19th queen, i hope you have a great birthday and get to enjoy many more happily!!",
    imagePos: { x: 5, y: -10 },
    imagePath: "img/ayat.jpg",
    zIndex: 3,
  },
  {
    caption:
      "Through our Covid times in high school. We broke so many rules, but you are worth breaking each rule",
    imagePos: { x: 0, y: -50 },
    imagePath: "img/anushka3.jpg",
    zIndex: 3,
  },
  {
    caption:
      "Abeer, I still remember our math grade 9 class where our friendship started, who knew that it would turn out to be for forever ♾️ ❤️",
    imagePos: { x: 0, y: 20 },
    imagePath: "img/anushka5.jpg",
    zIndex: 5,
  },
  {
    caption: "HAPPY BIRTHDAY ABEER",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/khadija.jpg",
    zIndex: 4,
  },
  {
    caption: "Dusra Zamana",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/abdullah3.jpg",
    zIndex: 1,
  },
  {
    caption:
      "You were my true partner in computer engineering and comp sci class, Mr.Knowles knew that we were trouble to the tech world- maybe still are. I love this picture and I miss you sooo much, I wish we got to be together again",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/anushka1.jpg",
    zIndex: 5,
  },
  {
    caption: "Beach Day",
    imagePos: { x: -15, y: -10 },
    imagePath: "/path/to/your/image2.jpg",
    zIndex: 1,
  },
  {
    caption: "Beach Day",
    imagePos: { x: -15, y: -10 },
    imagePath: "/path/to/your/image2.jpg",
    zIndex: 1,
  },
  {
    caption: "We all love you",
    imagePos: { x: -5, y: 5 },
    imagePath: "img/group.jpg",
    zIndex: 1,
  },
  {
    caption: "",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/anushka2.jpg",
    zIndex: 1,
  },
];
const gallery = document.querySelector(".gallery");
polaroids.forEach((data, index) => {
  const polaroid = document.createElement("div");
  polaroid.className = "polaroid";
  polaroid.style.transform = `rotate(${
    rotationAngles[index % rotationAngles.length]
  }deg)`;

  // Actually set the z-index
  polaroid.style.zIndex = data.zIndex;

  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  const img = document.createElement("img");
  img.className = `img${index + 1}`;
  img.src = data.imagePath || "/api/placeholder/400/320";
  img.style.left = `${data.imagePos.x}%`;
  img.style.top = `${data.imagePos.y}%`;

  // Add click handler to open image modal
  polaroid.addEventListener("click", () => openImageModal(index));

  const caption = document.createElement("div");
  // Add both the general caption class and a unique caption class
  caption.className = `caption caption${index + 1}`;
  caption.textContent = data.caption;

  imageContainer.appendChild(img);
  polaroid.appendChild(imageContainer);
  polaroid.appendChild(caption);
  gallery.appendChild(polaroid);
});

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
  "vid/eimaan.mp4",
  "vid/khadija.mp4",
  "vid/kat.mp4",
  "vid/anushka.mp4",
  "vid/ayat.mp4",

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

// Update play button click handler
document.querySelector(".play-button").onclick = openVideoModal;
