const data = {
    "1" : {sound: "media/sounds/a.mp3"},
    "2" : {sound: "media/sounds/b.mp3"},
    "3" : {sound: "media/sounds/c.mp3"},
    "4" : {sound: "media/sounds/d.mp3"},
    "5" : {sound: "media/sounds/e.mp3"},
    "6" : {sound: "media/sounds/f.mp3"},
    "7" : {sound: "media/sounds/g.mp3"},
    "8" : {sound: "media/sounds/h.mp3"},
};
 //décomposer chaque élément du tableau
function construct() {
    for(const letter in data) {
        const keyDiv = document.createElement("div");
        keyDiv.classList.add("drum");

        let h2 = document.createElement("h2");
        h2.textContent = letter; //1,2,3,etc

        keyDiv.appendChild(h2) // h2 est l'enfant de la balise div créee

        document.getElementById("musicBox").appendChild(keyDiv); // keyDiv est l'enfant de la div avec l'id musicBox

        // Evenement au clique
        keyDiv.addEventListener("click", (event) => {
            let letter = event.currentTarget.querySelector("h2").textContent;
            playDrum(letter)
        });
    }
};

// function pour jouer de la musique
function playDrum(letter) {
    const audio = new Audio()
    audio.src = data[letter].sound;
    audio.play();
};

construct();

// Quand on presse une touche
window.addEventListener("keydown", handleKeyEvents);

function handleKeyEvents(event) {
    playDrum(event.key.toUpperCase());
}

