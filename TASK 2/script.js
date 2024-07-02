document.getElementById('translate-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const originalLanguage = document.getElementById('original-language-select').value;
    const targetLanguage = document.getElementById('target-language-select').value;
    
    if (inputText.trim() === "") {
        alert("Please enter some text to translate.");
        return;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${originalLanguage}|${targetLanguage}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.responseData.translatedText;
            document.getElementById('translated-text').innerText = translatedText;
        })
        .catch(error => {
            console.error("Error fetching translation:", error);
            alert("An error occurred while fetching the translation.");
        });
});
