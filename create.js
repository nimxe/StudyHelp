document.addEventListener('DOMContentLoaded', function () {
    const termBox = document.querySelector('.term');
    const definitionBox = document.querySelector('.definition');
    const termText = document.getElementById('term-text');
    const definitionText = document.getElementById('definition-text');
    const checkButton = document.querySelector('.check');
    const nextButton = document.querySelector('.next');
    const addButton = document.querySelector('.add');

    const termInput = document.querySelector('.user-term');
    const definitionInput = document.querySelector('.user-definition');

    let flashcards = [];
    let currentCard = null;

    function getRandomCard() {
        if (flashcards.length === 0) {
            termText.textContent = "No flashcards yet. Add some.";
            termBox.style.display = "block";
            definitionBox.style.display = "none";
            return;
        }

        const randomIndex = Math.floor(Math.random() * flashcards.length);
        currentCard = flashcards[randomIndex];
        termText.textContent = currentCard.term;
        definitionText.textContent = currentCard.definition;
        termBox.style.display = "block";
        definitionBox.style.display = "none";
    }

    checkButton.addEventListener('click', function () {
        if (currentCard) {
            definitionBox.style.display = 'block';
        }
    });

    nextButton.addEventListener('click', function () {
        getRandomCard();
    });

    addButton.addEventListener('click', function () {
        const termValue = termInput.value.trim();
        const definitionValue = definitionInput.value.trim();

        if (termValue && definitionValue) {
            flashcards.push({ term: termValue, definition: definitionValue });
            termInput.value = '';
            definitionInput.value = '';
            getRandomCard();
        } else {
            alert("Please enter both a term and a definition.");
        }
    });

    getRandomCard();
});
