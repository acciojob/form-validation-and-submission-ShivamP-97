const submitBtn = document.getElementById("submitBtn");
const checkbox = document.querySelector('input[name="terms"]');

submitBtn.disabled = true;

checkbox.addEventListener("change", () => {
  submitBtn.disabled = !checkbox.checked;
});
