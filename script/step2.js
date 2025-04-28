function goToNextStep(currentStepId, nextStepId) {
    // Hide the current step
    document.getElementById(currentStepId).classList.remove('active');
    // Show the next step
    document.getElementById(nextStepId).classList.add('active');
}