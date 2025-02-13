const storyText = document.getElementById("storyText");
const storyDiv = document.getElementById("story");

const stories = {
  1: {
    text: "Hey, i kinda want to confess something, wanna know?",
    choices: [
      { text: "Yes! 💕", next: 3 },
      { text: "No. 😶", next: 4 },
    ],
  },
  2: {
    text: "Oh, okelah gapapa..",
    choices: [],
  },
  3: {
    text: "There's nothing serious haha, love you so much.",
    choices: [
      { text: "Oh yeah?, Then?", next: 5 },
      { text: "Ok?", next: 6 },
    ],
  },
  4: {
    text: "Umm, ok..😶",
    choices: [],
  },
  5: {
    text: "I hope if we were meant together, let's meet up in one place one day hehew💖",
    choices: [],
  },
  6: {
    text: "Gua tau gua garing pls 😶",
    choices: [],
  },
};

function makeChoice(choice) {
  const story = stories[choice];
  storyText.textContent = story.text;

  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach((btn) => btn.remove());

  if (story.choices.length > 0) {
    story.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.textContent = choice.text;
      button.onclick = () => makeChoice(choice.next);
      storyDiv.appendChild(button);
    });
  }
}

// Floating Heart Animation
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.position = "fixed";
  heart.style.bottom = "0";
  heart.style.fontSize = "24px";
  heart.style.color = "pink";
  heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear infinite`;
  heart.textContent = "❤️";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);

// Add CSS styles dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes floatUp {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
