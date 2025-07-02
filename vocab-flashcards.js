const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("category");

const container = document.getElementById("flashcard-container");
const title = document.getElementById("vocab-title");
const toggleBtn = document.getElementById("lang-toggle-btn");

let currentIndex = 0;
let showAfrikaansFirst = true;

let flashcards = [];

if (categoryId === 'all') {
  // Flatten all vocabWords arrays into one big list
  Object.values(vocabWords).forEach(categoryArray => {
    flashcards.push(...categoryArray);
  });
} else {
  flashcards = vocabWords[categoryId] || [];
}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showFlashcard(index) {
  container.innerHTML = "";

  const cardWrapper = document.createElement("div");
  cardWrapper.className = "flashcard single-card";

  const front = document.createElement("div");
  front.className = "front";
  front.innerHTML = `
    <div class="card-word">${showAfrikaansFirst ? flashcards[index].af : flashcards[index].en}</div>
    <div class="button-row">
      <button class="icon-button next-btn" aria-label="Next card">✅</button>
    </div>
  `;

  const back = document.createElement("div");
  back.className = "back";
  back.innerHTML = `<div class="card-word">${showAfrikaansFirst ? flashcards[index].en : flashcards[index].af}</div>`;

  cardWrapper.appendChild(front);
  cardWrapper.appendChild(back);

  cardWrapper.addEventListener("click", (e) => {
    if (!e.target.classList.contains("icon-button")) {
      cardWrapper.classList.toggle("flipped");
    }
  });

  front.querySelector(".next-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % flashcards.length;
    showFlashcard(currentIndex);
  });

  container.appendChild(cardWrapper);
}

toggleBtn.addEventListener("click", () => {
  showAfrikaansFirst = !showAfrikaansFirst;
  toggleBtn.textContent = showAfrikaansFirst ? "Afrikaans → English 🔁" : "English → Afrikaans 🔁";
  currentIndex = 0;
  shuffle(flashcards);
  showFlashcard(currentIndex);
});

if (!flashcards.length) {
  container.innerHTML = `<p>⚠️ No words found for category: "${categoryId}"</p>`;
} else {
  const categoryObj = vocabCategories.find(cat => cat.id === categoryId);
  title.textContent = categoryObj ? categoryObj.name : "Vocab";
  shuffle(flashcards);
  showFlashcard(currentIndex);

  // Inside your "else" block when flashcards exist
  toggleBtn.style.display = "inline-block"; // 👈 show the toggle button
  toggleBtn.textContent = "Afrikaans → English 🔁";

}

