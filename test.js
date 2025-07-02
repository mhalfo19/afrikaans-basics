let flashcards = [];
let currentIndex = 0;
let mode = "easy"; // current mode

const container = document.getElementById("flashcard-container");

// Determine which flashcards dataset is available on this page
if (typeof easyFlashcards !== 'undefined' && typeof hardFlashcards !== 'undefined') {
  // Digraph flashcards page
  flashcards = [...easyFlashcards];
} else if (typeof easyPhrases !== 'undefined' && typeof hardPhrases !== 'undefined') {
  // Phrases flashcards page
  flashcards = [...easyPhrases];
} else {
  console.error("No flashcard data found.");
}

// Create toggle button BELOW the flashcard container
const toggleBtn = document.createElement("button");
toggleBtn.id = "mode-toggle-btn";
toggleBtn.style.marginTop = "1em";  // spacing above the button
toggleBtn.textContent = `Mode: Easy 🔄`;
container.insertAdjacentElement('afterend', toggleBtn);  // insert after container

// Shuffle the flashcards randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Show the current flashcard by index
function showFlashcard(index) {
  container.innerHTML = "";

  const cardWrapper = document.createElement("div");
  cardWrapper.className = "flashcard single-card";

  const front = document.createElement("div");
  front.className = "front";
  front.innerHTML = `
    <div class="card-word">${flashcards[index].af}</div>
    <div class="button-row">
      <button class="icon-button sound-btn" aria-label="Play audio">🔊</button>
      <button class="icon-button next-btn" aria-label="Next card">✅</button>
    </div>
  `;

  const back = document.createElement("div");
  back.className = "back";
  back.innerHTML = `<div class="card-word">${flashcards[index].en}</div>`;

  cardWrapper.appendChild(front);
  cardWrapper.appendChild(back);

  // Flip card on click, but NOT on buttons
  cardWrapper.addEventListener("click", (e) => {
    if (!e.target.classList.contains("icon-button")) {
      cardWrapper.classList.toggle("flipped");
    }
  });

  // Play sound (adjust path depending on flashcard type)
  front.querySelector(".sound-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    let soundPath = "Digraph Words/";
    if (typeof easyPhrases !== 'undefined') {
      // We're on phrases page
      soundPath = "Phrases/";
    }
    new Audio(`${soundPath}${flashcards[index].sound}`).play();
  });

  // Next card
  front.querySelector(".next-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % flashcards.length;
    showFlashcard(currentIndex);
  });

  container.appendChild(cardWrapper);
}

// Toggle between easy and hard flashcards
toggleBtn.addEventListener("click", () => {
  if (mode === "easy") {
    mode = "hard";
    if (typeof hardFlashcards !== 'undefined') {
      flashcards = [...hardFlashcards];
    } else if (typeof hardPhrases !== 'undefined') {
      flashcards = [...hardPhrases];
    }
    toggleBtn.textContent = `Mode: Hard 🔄`;
  } else {
    mode = "easy";
    if (typeof easyFlashcards !== 'undefined') {
      flashcards = [...easyFlashcards];
    } else if (typeof easyPhrases !== 'undefined') {
      flashcards = [...easyPhrases];
    }
    toggleBtn.textContent = `Mode: Easy 🔄`;
  }
  shuffle(flashcards);
  currentIndex = 0;
  showFlashcard(currentIndex);
});

// Shuffle once when page loads
shuffle(flashcards);
showFlashcard(currentIndex);
