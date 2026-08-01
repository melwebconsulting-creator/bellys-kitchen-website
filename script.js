/* ==========================================================================
   BELLY'S KITCHEN - TOUR DE TABLE
   Master Vanilla JavaScript Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Database of Full Recipes (For Modal Views)
     -------------------------------------------------------------------------- */
  const RECIPE_DATABASE = {
    galette: {
      title: "Sun-Drenched Tomato & Garlic Confit Galette",
      subtitle: "Belly's Signature Bake • Chapter II",
      time: "45 Minutes",
      difficulty: "Easy",
      servings: "4 Servings",
      image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=1200&q=80",
      description: "Flaky butter pastry folded over sweet heirloom tomatoes, slow-confited garlic, fresh wild thyme, and creamy goat cheese. Best enjoyed warm under the afternoon sun.",
      ingredients: [
        "200g All-Purpose Flour (Chilled)",
        "110g Unsalted Butter (Cold, cut into small cubes)",
        "60ml Ice Water",
        "4 Heirloom Tomatoes (Sliced thick & salted)",
        "1 Head Garlic (Slow confited in olive oil)",
        "120g Soft Goat Cheese or Creamy Ricotta",
        "1 tbsp Fresh Wild Thyme Leaves",
        "Flaky Sea Salt & Cracked Black Pepper"
      ],
      steps: [
        "In a chilled bowl, cut frozen butter cubes into flour until peas-sized crumbs form. Add ice water 1 tbsp at a time until dough just holds together.",
        "Form into a flat disk, wrap in parchment paper, and chill in refrigerator for 30 minutes.",
        "Slice tomatoes thick and lay on linen paper towels dusted with sea salt for 20 minutes to draw out moisture.",
        "Roll dough into a 12-inch circle on parchment paper. Spread soft goat cheese in center leaving a 2-inch border.",
        "Arrange tomato slices and soft confit garlic cloves over cheese. Sprinkle wild thyme and black pepper.",
        "Fold dough edges over tomatoes to form rustic galette border. Brush edges with olive oil or egg wash.",
        "Bake at 200°C (400°F) for 35 minutes until pastry is deep golden brown and tomatoes are bubbly."
      ],
      chefTip: "Always salt heirloom tomatoes prior to assembling. Moisture is the enemy of a flaky crust!"
    },
    pappardelle: {
      title: "Wild Mushroom & Sage Pappardelle",
      subtitle: "Family Pasta • Chapter VIII",
      time: "35 Minutes",
      difficulty: "Medium",
      servings: "4 Servings",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
      description: "Hand-cut ribbon pasta tossed with caramelized porcini, wild chanterelles, crispy sage butter, and aged Parmigiano Reggiano.",
      ingredients: [
        "400g Fresh Egg Pasta Dough or Dried Pappardelle",
        "300g Mixed Wild Mushrooms (Porcini, Chanterelles)",
        "80g Unsalted Butter",
        "12 Fresh Sage Leaves",
        "2 Cloves Garlic (Thinly Sliced)",
        "60ml Dry White Wine",
        "80g Parmigiano Reggiano (Grated)",
        "Sea Salt & Extra Virgin Olive Oil"
      ],
      steps: [
        "Heat 2 tbsp olive oil in a heavy iron skillet over high heat. Add torn mushrooms in a single layer without crowding.",
        "Sear for 5 minutes until deep golden brown before stirring. Season with salt and sliced garlic.",
        "Push mushrooms to side, melt butter and add whole sage leaves until crisp and butter turns nutty brown.",
        "Deglaze pan with white wine, scraping up browned bits from bottom.",
        "Boil pappardelle in salted water for 3 minutes (fresh) or 9 minutes (dried) until al dente.",
        "Transfer pasta directly into sage butter sauce, adding 1/2 cup starchy pasta water. Toss vigorously with grated parmesan until emulsified."
      ],
      chefTip: "Never wash mushrooms with water — wipe gently with a damp towel to keep them from absorbing excess liquid."
    },
    stew: {
      title: "Tuscan White Bean & Kale Stew",
      subtitle: "Cozy Comfort • Chapter VIII",
      time: "60 Minutes",
      difficulty: "Easy",
      servings: "6 Servings",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
      description: "Slow-cooked Cannellini beans, lacinato kale, smoked paprika, rosemary oil, and crusty garlic sourdough croutons.",
      ingredients: [
        "400g Dried Cannellini Beans (Soaked overnight) or 2 Cans",
        "1 Large Yellow Onion (Finely diced)",
        "2 Carrots & 2 Celery Stalks (Diced Sofrito)",
        "1 Bunch Lacinato Tuscan Kale (Ribs removed, chopped)",
        "4 Cloves Garlic & 1 Rosemary Sprig",
        "1 litre Vegetable Broth",
        "1 tbsp Smoked Paprika & Extra Virgin Olive Oil",
        "Garlic Toast for serving"
      ],
      steps: [
        "In a Dutch oven, sauté onion, carrots, and celery in olive oil over low heat for 20 minutes until sweet and translucent.",
        "Add minced garlic, rosemary sprig, and smoked paprika; stir for 2 minutes until fragrant.",
        "Add soaked beans and vegetable broth. Bring to a boil, then reduce heat to low and simmer covered for 45 minutes.",
        "Purée 1 cup of beans with broth and stir back into pot to create natural creamy thickness.",
        "Fold in chopped Tuscan kale and cook 10 minutes until tender.",
        "Ladle into warm ceramic bowls and finish with a heavy drizzle of raw extra virgin olive oil."
      ],
      chefTip: "A parmesan rind simmered in the broth adds incredible umami depth!"
    },
    sourdough: {
      title: "Rustic Roasted Garlic Sourdough",
      subtitle: "Daily Loaf • Chapter VIII",
      time: "Overnight",
      difficulty: "Advanced",
      servings: "1 Large Boule",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
      description: "Crispy blistered crust with an airy, open crumb infused with sweet roasted garlic cloves and wild yeast aroma.",
      ingredients: [
        "450g Unbleached Bread Flour",
        "50g Whole Wheat Flour",
        "375g Warm Water (75% Hydration)",
        "100g Active Sourdough Starter",
        "10g Fine Sea Salt",
        "1 Head Garlic (Roasted whole & peeled)"
      ],
      steps: [
        "Mix flours and warm water; let rest for 45 minutes (Autolyse).",
        "Incorporate active starter and sea salt. Perform 4 sets of stretch and folds every 30 minutes over 2 hours.",
        "Fold soft roasted garlic cloves into dough during third stretch.",
        "Bulk ferment at room temperature until dough expands by 50% with visible air bubbles.",
        "Shape into a tight boule and place into a flour-dusted banneton basket. Chill in fridge overnight (12–16 hours).",
        "Preheat Dutch oven to 230°C (450°F). Score top of loaf with razor blade and bake covered for 25 mins, then uncovered for 20 mins."
      ],
      chefTip: "Listen to the crust crackle when taken out of oven — that's the bread singing its approval!"
    },
    tart: {
      title: "Wild Berry & Lavender Honey Tart",
      subtitle: "Sweet Tradition • Chapter VIII",
      time: "50 Minutes",
      difficulty: "Medium",
      servings: "8 Slices",
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80",
      description: "Butter pastry shell filled with vanilla bean mascarpone and piled high with fresh summer blackberries, raspberries, and wildflower lavender honey.",
      ingredients: [
        "1 Pre-baked Sweet Pastry Shell (Pâte Sucrée)",
        "250g Mascarpone Cheese",
        "150ml Heavy Cream (Whipped)",
        "1 Vanilla Bean (Scraped seeds)",
        "3 tbsp Powdered Sugar",
        "300g Mixed Fresh Wild Berries",
        "2 tbsp Wildflower Honey infused with dried lavender"
      ],
      steps: [
        "Beat mascarpone, whipped cream, powdered sugar, and vanilla bean seeds together until smooth whipped peaks form.",
        "Spread mascarpone cream evenly into cool pre-baked pastry crust.",
        "Arrange fresh blackberries, raspberries, and blueberries densely over cream.",
        "Warm lavender honey slightly and drizzle over fresh berries right before serving.",
        "Garnish with edible flower petals or lemon zest."
      ],
      chefTip: "Keep all ingredients chilled so the mascarpone filling stays velvety and structured."
    },
    chicken: {
      title: "Lemon & Smoked Rosemary Roast Chicken",
      subtitle: "Sunday Feast • Chapter VIII",
      time: "75 Minutes",
      difficulty: "Medium",
      servings: "4 Servings",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
      description: "Whole crisp-skin roast chicken slathered in herb compound butter, garlic cloves, and roasted lemons.",
      ingredients: [
        "1 Whole Organic Pasture-Raised Chicken (approx 1.8kg)",
        "100g Softened Unsalted Butter",
        "3 tbsp Fresh Rosemary & Thyme (Finely chopped)",
        "2 Organic Lemons (Halved)",
        "1 Head Garlic (Halved horizontally)",
        "1 tbsp Smoked Sea Salt & Black Pepper"
      ],
      steps: [
        "Pat chicken thoroughly dry with paper towels inside and out (crucial for crisp skin!).",
        "Mix softened butter with chopped rosemary, thyme, garlic salt, and pepper.",
        "Gently separate skin from breast meat and rub herb butter directly underneath skin.",
        "Stuff cavity with lemon halves and halved garlic head. Truss legs with kitchen twine.",
        "Roast at 200°C (400°F) for 70–75 minutes until skin is golden brown and internal temperature reaches 75°C (165°F).",
        "Rest carved chicken 15 minutes on wooden board before serving."
      ],
      chefTip: "Resting the roast chicken preserves all natural juices inside!"
    }
  };


  /* --------------------------------------------------------------------------
     2. Entrance Loading Curtain & Book Unfold Animation
     -------------------------------------------------------------------------- */
  const loadingCurtain = document.getElementById('loading-curtain');
  const loadingBar = document.getElementById('loading-bar');
  const openBtn = document.getElementById('open-cookbook-btn');

  if (loadingCurtain) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 15;
      if (loadingBar) loadingBar.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        if (openBtn) openBtn.classList.remove('hidden');
      }
    }, 150);

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        loadingCurtain.classList.add('dismissed');
      });
    }
  }


  /* --------------------------------------------------------------------------
     3. Header, Navigation & Active Chapter Highlight
     -------------------------------------------------------------------------- */
  const header = document.getElementById('main-header');
  const navItems = document.querySelectorAll('.nav-item');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // Active Chapter Observer
  const chapters = document.querySelectorAll('.chapter-section');
  const observerOptions = { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 };

  const chapterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const chapterId = entry.target.id;
        navItems.forEach(item => {
          if (item.dataset.chapter === chapterId) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  chapters.forEach(ch => chapterObserver.observe(ch));


  /* --------------------------------------------------------------------------
     4. Table of Contents Drawer
     -------------------------------------------------------------------------- */
  const tocToggleBtn = document.getElementById('toc-toggle-btn');
  const tocCloseBtn = document.getElementById('toc-close-btn');
  const tocBackdrop = document.getElementById('toc-backdrop');
  const tocDrawer = document.getElementById('toc-drawer');

  function openTOC() { if (tocDrawer) tocDrawer.classList.add('open'); }
  function closeTOC() { if (tocDrawer) tocDrawer.classList.remove('open'); }

  if (tocToggleBtn) tocToggleBtn.addEventListener('click', openTOC);
  if (tocCloseBtn) tocCloseBtn.addEventListener('click', closeTOC);
  if (tocBackdrop) tocBackdrop.addEventListener('click', closeTOC);

  document.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', closeTOC);
  });


  /* --------------------------------------------------------------------------
     5. Servings Calculator for Spotlight Recipe
     -------------------------------------------------------------------------- */
  const servingsCountEl = document.getElementById('servings-count');
  const decBtn = document.getElementById('servings-dec-btn');
  const incBtn = document.getElementById('servings-inc-btn');
  const ingredientQtys = document.querySelectorAll('.ing-qty');

  let currentServings = 4;
  const baseServings = 4;

  function updateServings(newServings) {
    if (newServings < 1 || newServings > 20) return;
    currentServings = newServings;
    if (servingsCountEl) servingsCountEl.textContent = currentServings;

    const ratio = currentServings / baseServings;
    ingredientQtys.forEach(qtyEl => {
      const baseQty = parseFloat(qtyEl.dataset.base);
      if (!isNaN(baseQty)) {
        const scaled = Math.round(baseQty * ratio * 10) / 10;
        qtyEl.textContent = scaled;
      }
    });
  }

  if (decBtn) decBtn.addEventListener('click', () => updateServings(currentServings - 1));
  if (incBtn) incBtn.addEventListener('click', () => updateServings(currentServings + 1));


  /* --------------------------------------------------------------------------
     6. Interactive Sticky Notes Form (Add Note)
     -------------------------------------------------------------------------- */
  const addNoteForm = document.getElementById('add-note-form');
  const notebookBoard = document.querySelector('.notebook-board');

  if (addNoteForm && notebookBoard) {
    addNoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('note-author-input').value.trim();
      const text = document.getElementById('note-text-input').value.trim();

      if (!author || !text) return;

      const colors = ['note-terracotta', 'note-olive', 'note-mustard', 'note-sage'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const noteDiv = document.createElement('div');
      noteDiv.className = `sticky-note ${randomColor}`;
      noteDiv.innerHTML = `
        <div class="note-pin"></div>
        <span class="note-date">Pinned Today</span>
        <h3 class="note-title">Family Tip</h3>
        <p class="note-body">"${text}"</p>
        <span class="note-signature">— ${author}</span>
      `;

      notebookBoard.prepend(noteDiv);
      addNoteForm.reset();
    });
  }


  /* --------------------------------------------------------------------------
     7. Polaroid Gallery Filter & Lightbox
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const polaroidItems = document.querySelectorAll('.polaroid-item');
  const lightbox = document.getElementById('polaroid-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxStory = document.getElementById('lightbox-story');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      polaroidItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  polaroidItems.forEach(item => {
    item.addEventListener('click', () => {
      if (lightboxImg) lightboxImg.src = item.dataset.img;
      if (lightboxTitle) lightboxTitle.textContent = item.dataset.caption;
      if (lightboxStory) lightboxStory.textContent = item.dataset.story;
      if (lightbox) lightbox.classList.add('open');
    });
  });

  function closeLightbox() { if (lightbox) lightbox.classList.remove('open'); }
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);


  /* --------------------------------------------------------------------------
     8. Table Conversation Card Deck
     -------------------------------------------------------------------------- */
  const conversationCards = [
    "What is a childhood dish that instantly transports you back to your grandparents' kitchen?",
    "If you could cook a meal for any historical figure, who would it be and what would you make?",
    "What is the single most important ingredient in your kitchen pantry that you cannot live without?",
    "What was the biggest cooking disaster in your family that everyone still laughs about today?",
    "Describe your ideal Sunday afternoon around a outdoor wooden dining table.",
    "What is a recipe you learned by heart without ever looking at a measuring spoon?"
  ];

  const deckCardText = document.getElementById('deck-card-text');
  const drawCardBtn = document.getElementById('draw-card-btn');
  let currentCardIndex = 0;

  if (drawCardBtn && deckCardText) {
    drawCardBtn.addEventListener('click', () => {
      currentCardIndex = (currentCardIndex + 1) % conversationCards.length;
      deckCardText.style.opacity = '0';
      setTimeout(() => {
        deckCardText.textContent = `"${conversationCards[currentCardIndex]}"`;
        deckCardText.style.opacity = '1';
      }, 200);
    });
  }


  /* --------------------------------------------------------------------------
     9. Recipe Vault Search & 3D Card Flip Logic
     -------------------------------------------------------------------------- */
  const recipeSearchInput = document.getElementById('recipe-search-input');
  const vaultTabs = document.querySelectorAll('.vault-tab');
  const recipeCards = document.querySelectorAll('.recipe-card-3d');

  function filterVaultRecipes() {
    const searchTerm = recipeSearchInput ? recipeSearchInput.value.toLowerCase() : '';
    const activeTab = document.querySelector('.vault-tab.active')?.dataset.category || 'all';

    recipeCards.forEach(card => {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const snippet = card.querySelector('.card-snippet')?.textContent.toLowerCase() || '';
      const category = card.dataset.category;

      const matchesSearch = title.includes(searchTerm) || snippet.includes(searchTerm);
      const matchesCategory = activeTab === 'all' || category === activeTab;

      if (matchesSearch && matchesCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (recipeSearchInput) recipeSearchInput.addEventListener('input', filterVaultRecipes);

  vaultTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      vaultTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterVaultRecipes();
    });
  });

  // 3D Card Flip Event Handlers
  document.querySelectorAll('.flip-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.recipe-card-3d');
      if (card) card.classList.add('flipped');
    });
  });

  document.querySelectorAll('.flip-btn-back').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.recipe-card-3d');
      if (card) card.classList.remove('flipped');
    });
  });


  /* --------------------------------------------------------------------------
     10. Recipe Journal Modal (Full Recipe View)
     -------------------------------------------------------------------------- */
  const recipeModal = document.getElementById('recipe-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalBody = document.getElementById('modal-content-body');

  function openRecipeModal(recipeId) {
    const data = RECIPE_DATABASE[recipeId];
    if (!data || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-recipe-header">
        <span class="handwritten-annotation">${data.subtitle}</span>
        <h2 class="recipe-main-title">${data.title}</h2>
        <div class="recipe-meta-ribbon" style="margin: 15px 0;">
          <div class="meta-item"><span class="meta-icon">⏱️</span><span class="meta-val">${data.time}</span></div>
          <div class="meta-item"><span class="meta-icon">🍳</span><span class="meta-val">${data.difficulty}</span></div>
          <div class="meta-item"><span class="meta-icon">🍽️</span><span class="meta-val">${data.servings}</span></div>
        </div>
      </div>

      <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 24px;" />

      <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 24px;">${data.description}</p>

      <div class="modal-grid" style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 30px;">
        <div class="modal-ingredients" style="background: var(--bg-cream); padding: 20px; border-radius: var(--radius-sm); border: 1px solid rgba(139,90,43,0.15);">
          <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--wood-dark);">Ingredients</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
            ${data.ingredients.map(ing => `<li>• ${ing}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-steps">
          <h3 style="font-size: 1.3rem; margin-bottom: 12px; color: var(--wood-dark);">Preparation Journal</h3>
          <ol style="padding-left: 20px; display: flex; flex-direction: column; gap: 12px; font-size: 1rem; color: var(--text-dark);">
            ${data.steps.map(step => `<li style="line-height: 1.5;">${step}</li>`).join('')}
          </ol>
          
          <div style="margin-top: 20px; background: #fffde7; border-left: 4px solid var(--mustard); padding: 14px; border-radius: 4px;">
            <strong style="color: var(--wood-dark);">Belly's Secret Tip:</strong>
            <p style="font-family: var(--font-handwriting); font-size: 1.25rem; color: var(--terracotta); margin-top: 4px;">"${data.chefTip}"</p>
          </div>
        </div>
      </div>
    `;

    if (recipeModal) recipeModal.classList.add('open');
  }

  function closeRecipeModal() { if (recipeModal) recipeModal.classList.remove('open'); }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-recipe-modal-btn');
    if (btn) {
      const id = btn.dataset.recipeId;
      openRecipeModal(id);
    }
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeRecipeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeRecipeModal);


  /* --------------------------------------------------------------------------
     11. Kitchen Timer & Web Audio Synth Alarm
     -------------------------------------------------------------------------- */
  const timerMinutesEl = document.getElementById('timer-minutes');
  const timerSecondsEl = document.getElementById('timer-seconds');
  const timerStartBtn = document.getElementById('timer-start-btn');
  const timerResetBtn = document.getElementById('timer-reset-btn');
  const presetBtns = document.querySelectorAll('.timer-preset-btn');
  const quickTimerLaunchBtn = document.getElementById('quick-timer-launch-btn');

  let timerInterval = null;
  let totalSeconds = 15 * 60;
  let isTimerRunning = false;

  function updateTimerDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (timerMinutesEl) timerMinutesEl.textContent = String(mins).padStart(2, '0');
    if (timerSecondsEl) timerSecondsEl.textContent = String(secs).padStart(2, '0');
  }

  function playChimeSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.5); // A5

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (err) {
      console.log('Audio Context unavailable:', err);
    }
  }

  function startTimer() {
    if (isTimerRunning) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      if (timerStartBtn) timerStartBtn.textContent = 'Start Timer ▶';
      return;
    }

    isTimerRunning = true;
    if (timerStartBtn) timerStartBtn.textContent = 'Pause ⏸';

    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        isTimerRunning = false;
        if (timerStartBtn) timerStartBtn.textContent = 'Start Timer ▶';
        playChimeSound();
        alert("⏱️ Belly's Kitchen Timer: Your dish is ready!");
      }
    }, 1000);
  }

  function resetTimer(mins = 15) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    totalSeconds = mins * 60;
    if (timerStartBtn) timerStartBtn.textContent = 'Start Timer ▶';
    updateTimerDisplay();
  }

  if (timerStartBtn) timerStartBtn.addEventListener('click', startTimer);
  if (timerResetBtn) timerResetBtn.addEventListener('click', () => resetTimer(15));

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.dataset.mins);
      resetTimer(mins);
    });
  });

  if (quickTimerLaunchBtn) {
    quickTimerLaunchBtn.addEventListener('click', () => {
      const mins = parseInt(quickTimerLaunchBtn.dataset.minutes);
      resetTimer(mins);
      document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
    });
  }


  /* --------------------------------------------------------------------------
     12. Measurement Converter
     -------------------------------------------------------------------------- */
  const tempCInput = document.getElementById('temp-c');
  const tempFResult = document.getElementById('temp-f-result');
  const weightGInput = document.getElementById('weight-g');
  const weightCupResult = document.getElementById('weight-cup-result');
  const volMlInput = document.getElementById('vol-ml');
  const volFlResult = document.getElementById('vol-fl-result');

  if (tempCInput && tempFResult) {
    tempCInput.addEventListener('input', () => {
      const c = parseFloat(tempCInput.value);
      if (!isNaN(c)) {
        const f = Math.round((c * 9/5) + 32);
        let gasMark = '';
        if (c >= 140 && c < 160) gasMark = ' / Gas Mark 2';
        else if (c >= 160 && c < 180) gasMark = ' / Gas Mark 3-4';
        else if (c >= 180 && c < 200) gasMark = ' / Gas Mark 4-5';
        else if (c >= 200) gasMark = ' / Gas Mark 6+';
        tempFResult.textContent = `${f}°F${gasMark}`;
      }
    });
  }

  if (weightGInput && weightCupResult) {
    weightGInput.addEventListener('input', () => {
      const g = parseFloat(weightGInput.value);
      if (!isNaN(g)) {
        const cups = (g / 125).toFixed(1);
        weightCupResult.textContent = `${cups} Cups`;
      }
    });
  }

  if (volMlInput && volFlResult) {
    volMlInput.addEventListener('input', () => {
      const ml = parseFloat(volMlInput.value);
      if (!isNaN(ml)) {
        const oz = (ml * 0.033814).toFixed(1);
        volFlResult.textContent = `${oz} fl oz`;
      }
    });
  }


  /* --------------------------------------------------------------------------
     13. Ambient Kitchen Hearth Sound Synthesizer
     -------------------------------------------------------------------------- */
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  let audioContext = null;
  let noiseNode = null;
  let isAmbiancePlaying = false;

  function toggleKitchenAmbiance() {
    if (isAmbiancePlaying) {
      if (audioContext) audioContext.suspend();
      isAmbiancePlaying = false;
      if (audioToggleBtn) audioToggleBtn.style.background = 'var(--bg-parchment)';
      return;
    }

    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create soft pink crackle noise for hearth fire sound
        const bufferSize = audioContext.sampleRate * 2;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          data[i] *= 0.03; // Low subtle volume
          b6 = white * 0.115926;
        }

        noiseNode = audioContext.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400; // Warm cozy low rumble

        noiseNode.connect(filter);
        filter.connect(audioContext.destination);
        noiseNode.start();
      } else {
        audioContext.resume();
      }

      isAmbiancePlaying = true;
      if (audioToggleBtn) audioToggleBtn.style.background = 'var(--terracotta)';
    } catch (e) {
      console.log('Audio Ambient Error:', e);
    }
  }

  if (audioToggleBtn) audioToggleBtn.addEventListener('click', toggleKitchenAmbiance);


  /* --------------------------------------------------------------------------
     14. Back-to-Top Ribbon & Dynamic Copyright Year
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const currentYearEl = document.getElementById('current-year');

  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
