let correctCode = "1234"; // Yahan apna pasandida secret code likhein

function pressKey(num) {
    let input = document.getElementById('passcode');
    if (input.value.length < 4) {
        input.value += num;
    }
}

function clearCode() {
    document.getElementById('passcode').value = '';
}

function checkCode() {
    let input = document.getElementById('passcode').value;
    if (input === correctCode) {
        let music = document.getElementById('bg-music');
        if (music) {
            music.play();
        }
        nextPage('page2');
    } else {
        alert("Ghalat Code! Dobara koshish karein.");
        clearCode();
    }
}

function nextPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}
