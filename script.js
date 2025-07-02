document.addEventListener('DOMContentLoaded', () => {
  // Your arrays (digraphs, trigraphs, easyPhrases, vocabCategories) must be defined or imported before this script runs

  // Select elements
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  const testLink = document.getElementById('test-link');
  const digraphContainer = document.getElementById('digraph-buttons');
  const trigraphContainer = document.getElementById('trigraph-buttons');
  const phrasesList = document.getElementById('phrases-list');
  const vocabContainer = document.getElementById('vocab-buttons');

  // Initialize tab buttons
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active classes
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and its content
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');

      // Update Test Me link href
      if (tab.dataset.tab === 'digraphs-tab') {
        testLink.href = 'test.html';
      } else if (tab.dataset.tab === 'phrases-tab') {
        testLink.href = 'test-phrases.html';
      } else if (tab.dataset.tab === 'vocab-tab') {
        testLink.href = 'vocab-flashcards.html?category=all';
      }
    });
  });

  // Create buttons for digraphs
  digraphs.forEach(dg => {
    const btn = document.createElement('button');
    btn.textContent = dg;
    btn.addEventListener('click', () => {
      new Audio(`sounds/${dg}.mp3`).play();
    });
    digraphContainer.appendChild(btn);
  });

  // Create buttons for trigraphs
  trigraphs.forEach(tg => {
    const btn = document.createElement('button');
    btn.textContent = tg;
    btn.addEventListener('click', () => {
      new Audio(`sounds/${tg}.mp3`).play();
    });
    trigraphContainer.appendChild(btn);
  });

  // ✅ Create conversation phrase items using easyPhrases instead of conversationPhrases
  easyPhrases.forEach(({ af, en, sound }) => {
    const item = document.createElement('div');
    item.className = 'phrase-item';

    const texts = document.createElement('div');
    texts.className = 'phrase-texts';
    texts.innerHTML = `
      <span class="phrase-afrikaans">${af}</span>
      <span class="phrase-english">${en}</span>
    `;

    const playBtn = document.createElement('button');
    playBtn.className = 'icon-button';
    playBtn.setAttribute('aria-label', `Play audio: ${af}`);
    playBtn.textContent = '🔊';
    playBtn.addEventListener('click', () => {
      new Audio(`Phrases/${sound}`).play();
    });

    item.appendChild(texts);
    item.appendChild(playBtn);
    phrasesList.appendChild(item);
  });

  // ✅ Create vocab category buttons
  vocabCategories.forEach(({ id, name }) => {
    const btn = document.createElement('button');
    btn.className = 'vocab-button';
    btn.textContent = name;
    btn.addEventListener('click', () => {
      window.location.href = `vocab-flashcards.html?category=${id}`;
    });
    vocabContainer.appendChild(btn);
  });

  // Set initial "Test Me" button link based on default active tab
  const activeTab = document.querySelector('.tab.active');
  if (activeTab && activeTab.dataset.tab === 'phrases-tab') {
    testLink.href = 'test-phrases.html';
  } else {
    testLink.href = 'test.html';
  }
});
