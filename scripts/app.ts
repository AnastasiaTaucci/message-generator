import { part1, part2, part3 } from './messages.js'; // NOTE: .js extension!

function generateMessage(): string {
  const a = part1[Math.floor(Math.random() * part1.length)];
  const b = part2[Math.floor(Math.random() * part2.length)];
  const c = part3[Math.floor(Math.random() * part3.length)];
  return `${a} ${b} ${c}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("message");
  const button = document.getElementById("generate");

  if (output && button) {
    button.addEventListener("click", () => {
      output.textContent = generateMessage();
    });
  }
});
