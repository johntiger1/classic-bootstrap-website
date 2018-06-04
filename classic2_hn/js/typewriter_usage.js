var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    typingSpeed: 75,
    deleteSpeed: 25
});

const speed = 2000;

typewriter.typeString('hacker')
    .pauseFor(speed)
    .deleteAll()
    .typeString('researcher')
    .pauseFor(speed)
    .deleteAll()
    .typeString('developer')
    .pauseFor(speed)
    .deleteAll()
    .changeTypingSpeed(50)
    .typeString('early adopter of the next web')
    .start();

// var typed = new Typed('.element', {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30
// });