// your JS code here
const form = document.getElementById("userForm");
const submitBtn = document.getElementById("submitBtn");
const checkbox = document.querySelector('input[name="terms"]');

checkbox.addEventListener("change", () => {
  submitBtn.disabled = !checkbox.checked;
});


form.addEventListener("submit", (e) => {
  if (!checkbox.checked) {
    e.preventDefault();
    alert("You must accept the terms and conditions.");
  }
});
