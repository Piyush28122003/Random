// script.js
const textElement = document.getElementById('text');
const message = `
Hello Pooja,

#include <love>
using namespace feelings;

int main() {
    cout << "I like you 💖" << endl;
    return 0;
}`;

let index = 0;

function typeEffect() {
    if (index < message.length) {
        textElement.innerHTML += message[index];
        index++;
        setTimeout(typeEffect, 50); // Adjust typing speed here
    }
}

window.onload = typeEffect;
