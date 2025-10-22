// Matrix background
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cols = Math.floor(canvas.width / 14);
const ypos = Array(cols).fill(0);

function matrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#00f"; // neon blue
  ctx.font = "14px monospace";
  for (let i = 0; i < ypos.length; i++) {
    const text = String.fromCharCode(33 + Math.random() * 94);
    ctx.fillText(text, i * 14, ypos[i]);
    ypos[i] = ypos[i] > canvas.height + Math.random() * 10000 ? 0 : ypos[i] + 14;
  }
  requestAnimationFrame(matrix);
}
matrix();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Contact form demo
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) { alert("Please fill all fields."); return false; }
  alert(`Thanks ${name}! (Demo) Your message has been received.`);
  e.target.reset();
  return false;
}

// Current year
document.getElementById("year").innerText = new Date().getFullYear();

// Hacker-style rotating quotes
const quotes = [
  "“Ethical hacking is thinking like an attacker to defend like a hero.”",
  "“Never trust, always verify – Zero Trust mindset.”",
  "“Automate tasks, secure systems, monitor networks.”",
  "“Cybersecurity is not a tool, it's a skill.”",
  "“Network defense starts with awareness and action.”"
];

let currentQuote = 0;
let charIndex = 0;
const quoteText = document.getElementById("quoteText");
const typingSpeed = 50; // ms per character
const delayBetweenQuotes = 2000;

function typeQuote() {
  if (charIndex < quotes[currentQuote].length) {
    quoteText.textContent += quotes[currentQuote][charIndex];
    charIndex++;
    setTimeout(typeQuote, typingSpeed);
  } else {
    setTimeout(eraseQuote, delayBetweenQuotes);
  }
}

function eraseQuote() {
  if (charIndex > 0) {
    quoteText.textContent = quotes[currentQuote].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseQuote, 25);
  } else {
    currentQuote = (currentQuote + 1) % quotes.length;
    setTimeout(typeQuote, 500);
  }
}

typeQuote();

// Quotes matrix effect
const quotesCanvas = document.getElementById("quotesMatrix");
const quotesCtx = quotesCanvas.getContext("2d");
quotesCanvas.width = window.innerWidth;
quotesCanvas.height = 200; // height same as quotes section
const qCols = Math.floor(quotesCanvas.width / 14);
const qYpos = Array(qCols).fill(0);

function quotesMatrix() {
  quotesCtx.fillStyle = "rgba(0,0,0,0.05)";
  quotesCtx.fillRect(0, 0, quotesCanvas.width, quotesCanvas.height);
  quotesCtx.fillStyle = "#00f";
  quotesCtx.font = "14px monospace";
  for (let i = 0; i < qYpos.length; i++) {
    const text = String.fromCharCode(33 + Math.random() * 94);
    quotesCtx.fillText(text, i * 14, qYpos[i]);
    qYpos[i] = qYpos[i] > quotesCanvas.height + Math.random() * 1000 ? 0 : qYpos[i] + 14;
  }
  requestAnimationFrame(quotesMatrix);
}
quotesMatrix();

window.addEventListener("resize", () => {
  quotesCanvas.width = window.innerWidth;
});

// Scroll-triggered glow effect
const sections = document.querySelectorAll('.section-glow');

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // initial check
