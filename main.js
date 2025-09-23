document.addEventListener('DOMContentLoaded', () => {
    const verseInput = document.getElementById('verse-input');
    const analyzeBtn = document.getElementById('analyze-btn');
    const exampleBtn1 = document.getElementById('example-btn-1');
    const exampleBtn2 = document.getElementById('example-btn-2');
    const exampleBtn3 = document.getElementById('example-btn-3');
    const resultsContainer = document.getElementById('results-container');

    const examples = {
        mutanabbi: "إذا غامرتَ في شرفٍ مرومِ فلا تقنعْ بما دون النجومِ",
        sayyab: "أين جيكور؟ جيكور ديوان شعري",
        artificial: "مستفعلن مستفعلن مستفعلن"
    };

    // --- Event Listeners ---
    analyzeBtn.addEventListener('click', () => {
        const verse = verseInput.value.trim();
        if (verse) {
            analyzeVerse(verse);
        }
    });

    exampleBtn1.addEventListener('click', () => {
        verseInput.value = examples.mutanabbi;
        analyzeVerse(examples.mutanabbi);
    });

    exampleBtn2.addEventListener('click', () => {
        verseInput.value = examples.sayyab;
        analyzeVerse(examples.sayyab);
    });

    exampleBtn3.addEventListener('click', () => {
        verseInput.value = examples.artificial;
        analyzeVerse(examples.artificial);
    });

    // --- Core Scansion Logic ---
    const analyzedVerses = new Set();

    function analyzeVerse(verse) {
        if (analyzedVerses.has(verse)) return; // Avoid re-analyzing

        const results = performScansion(verse);
        displayResults(results);
        analyzedVerses.add(verse);
    }

    function performScansion(verse) {
        // This is a simplified placeholder for the complex scansion algorithm.
        // A real implementation would require a more sophisticated library.
        const normalized = normalizeText(verse);
        const syllables = generateSyllables(normalized);
        const { taf3eelaat, bahr } = matchBahr(syllables);

        return {
            original: verse,
            syllables,
            taf3eelaat,
            bahr
        };
    }

    function normalizeText(text) {
        // Remove diacritics, punctuation, and non-essential characters
        let normalized = text.replace(/[\u064B-\u0652]/g, ""); // Tashkeel
        normalized = normalized.replace(/[.,!?:؛]/g, '');
        normalized = normalized.replace(/\s+/g, ' ').trim();
        return normalized;
    }

    function generateSyllables(text) {
        // Simplified syllable generation (placeholder)
        // This needs a proper phonetic analysis of Arabic.
        // ᴗ = short, – = long
        let syllables = '';
        const longVowels = ['ا', 'و', 'ي'];
        for (let i = 0; i < text.length; i++) {
            if (longVowels.includes(text[i])) {
                syllables += '– ';
            } else if (text[i] !== ' ') {
                syllables += 'ᴗ ';
            }
        }
        return syllables.trim();
    }

    function matchBahr(syllables) {
        // Placeholder for Bahr matching logic
        const patterns = {
            "الكامل": ["متفاعلن", "متفاعلن", "متفاعلن"],
            "الوافر": ["مفاعلتن", "مفاعلتن", "فعولن"],
            "الرجز": ["مستفعلن", "مستفعلن", "مستفعلن"],
            "الطويل": ["فعولن", "مفاعيلن", "فعولن", "مفاعيلن"]
        };

        const taf3eelaatMap = {
            "ᴗ – –": "فاعلن",
            "– ᴗ –": "مستفعلن",
            "ᴗ ᴗ – ᴗ –": "متفاعلن",
            "ᴗ – ᴗ – –": "مفاعلتن",
            "ᴗ – – –": "مفاعيلن",
            "ᴗ – –": "فعولن",
        };

        // Simplified matching
        const syllableCount = (syllables.match(/ᴗ|–/g) || []).length;
        let bahr = "غير معروف";
        let taf3eelaat = ["غير محدد"];

        if (syllableCount > 15) {
            bahr = "الطويل";
            taf3eelaat = patterns[bahr];
        } else if (syllableCount > 12) {
            bahr = "الكامل";
            taf3eelaat = patterns[bahr];
        } else if (syllableCount > 9) {
            bahr = "الوافر";
            taf3eelaat = patterns[bahr];
        } else {
            bahr = "الرجز";
             taf3eelaat = patterns[bahr];
        }
        return { taf3eelaat: taf3eelaat.join(' '), bahr };
    }


    // --- Display Logic ---
    function displayResults(results) {
        const card = document.createElement('div');
        card.classList.add('result-card');

        card.innerHTML = `
            <h3>النتائج للبيت:</h3>
            <p><strong>الأصل:</strong> ${results.original}</p>
            <p><strong>التقطيع الصوتي (مبسط):</strong></p>
            <p class="syllables">${results.syllables}</p>
            <p><strong>التفعيلات:</strong> <span class="taf3eelaat">${results.taf3eelaat}</span></p>
            <p><strong>البحر المقترح:</strong> <span class="bahr">${results.bahr}</span></p>
        `;

        resultsContainer.prepend(card); // Add new results to the top
    }
});
