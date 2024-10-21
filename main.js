const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};

async function animateAlice(element) {
    if (element) {
        try {
            await element.animate(aliceTumbling, aliceTiming).finished;
        } catch (error) {
            console.error(`Error animating Alice: ${error}`);
        }
    } else {
        console.error(`Element not found for animation.`);
    }
}

async function sequenceAliceAnimations() {
    const alice1 = document.querySelector("#alice1");
    const alice2 = document.querySelector("#alice2");
    const alice3 = document.querySelector("#alice3");

    await animateAlice(alice1);
    await animateAlice(alice2);
    await animateAlice(alice3);
}

sequenceAliceAnimations();
