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
  5, -3, 7, -5, 4, -6, 3, -4, 6, -2, 5, -7, 4, -3, 4, -5, 3, 4, -3, 3,
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
    caption: "Our Earliest Photo",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/group2.jpg",
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
    imagePos: { x: 0, y: 0 },
    imagePath: "img/group3.jpg",
    zIndex: 1,
  },
  {
    caption: "WE LOVE YOU SO MUCH",
    imagePos: { x: 0, y: 10 },
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
    caption:
      "U were my sunshine every day in high school, thank you for always being here for me. I love you abeer ❤️”",
    imagePos: { x: 0, y: 0 },
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
    imagePos: { x: 5, y: 5 },
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
    imagePos: { x: 5, y: 10 },
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
    caption: "<3",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/grad.jpg",
    zIndex: 1,
  },
  {
    caption: "Iconic",
    imagePos: { x: 0, y: 0 },
    imagePath: "img/us.jpg",
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
  "vid/annie.mp4",
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/i3tVyz6zOjE?si=-980QdiwFCPGmQD2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/W0rlMB7mNwM?si=FIGdOsDX1p0DKsWP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
];

function openVideoModal() {
  isVideoModal = true;
  modal.style.display = "flex";
  videoContainer.style.display = "block";
  imageContainer.style.display = "none";
  updateVideoContent();
}

function updateVideoContent() {
  if (videos[currentVideoIndex].includes("iframe")) {
    videoContainer.innerHTML = videos[currentVideoIndex];
  } else {
    videoContainer.innerHTML = `<video id="video-player" width="100%" controls>
      <source src="${videos[currentVideoIndex]}" type="video/mp4">
    </video>`;
  }
}

function openImageModal(index) {
  isVideoModal = false;
  currentPolaroidIndex = index;
  modal.style.display = "flex";
  videoContainer.style.display = "none";
  imageContainer.style.display = "block";

  const polaroidData = polaroids[currentPolaroidIndex];
  const img = new Image();
  img.onload = function () {
    modalImage.src = this.src;
    modalCaption.textContent = polaroidData.caption;
  };
  img.src = polaroidData.imagePath || "/api/placeholder/400/320";
}

function closeModal() {
  modal.style.display = "none";
  if (isVideoModal) {
    videoContainer.innerHTML = ""; // Clear video content completely
  }
}
// Navigation button event listeners
document.querySelector(".prev-button").addEventListener("click", () => {
  if (isVideoModal) {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    if (videos[currentVideoIndex].includes("iframe")) {
      videoContainer.innerHTML = videos[currentVideoIndex];
    } else {
      videoContainer.innerHTML = `<video id="video-player" width="100%" controls>
        <source src="${videos[currentVideoIndex]}" type="video/mp4">
      </video>`;
    }
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
    if (videos[currentVideoIndex].includes("iframe")) {
      videoContainer.innerHTML = videos[currentVideoIndex];
    } else {
      videoContainer.innerHTML = `<video id="video-player" width="100%" controls>
        <source src="${videos[currentVideoIndex]}" type="video/mp4">
      </video>`;
    }
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

let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson",
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function () {
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];
  const elapsedTime = Date.now() - startTime;

  // Stop drawing after 5 seconds and hide the canvas
  if (elapsedTime > 13000) {
    canvas.style.display = "none"; // Hide the canvas
    return; // Stop further drawing
  }
  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function () {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
const startTime = Date.now();

Draw();
const audio = new Audio("bday.wav");

document.addEventListener("click", function initAudio() {
  audio.play().catch((e) => console.log("Audio play failed:", e));
  // Remove the event listener after first click
  document.removeEventListener("click", initAudio);
});
