let currentStep = 0;

function toggleVisibility(id) {
  const element = document.getElementById(id);
  element.classList.toggle('hidden');
}

function startCooking() {
  currentStep = 0;
  highlightStep();
  updateProgress();
}

function nextStep() {
  const totalSteps = document.querySelectorAll("#stepList li").length;

  // Only move to next step if not already at the last one
  if (currentStep < totalSteps - 1) {
    currentStep++;
    highlightStep();
    updateProgress();
  }
}

function highlightStep() {
  const steps = document.querySelectorAll("#stepList li");
  steps.forEach((step, index) => {
    step.style.fontWeight = index === currentStep ? "bold" : "normal";
  });
}

function updateProgress() {
  const steps = document.querySelectorAll("#stepList li").length;
  const progress = document.getElementById("progress");
  const percent = ((currentStep + 1) / steps) * 100;
  progress.style.width = `${percent}%`;
}
