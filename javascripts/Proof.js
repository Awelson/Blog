document.addEventListener('DOMContentLoaded', () => {
    const proofContainers = document.querySelectorAll('.proof-container');

    proofContainers.forEach(container => {
        const proofSteps = container.querySelectorAll('.proof-step');
        const workspaceContents = container.querySelectorAll('.workspace-content');
        let currentStepIndex = 0;

        const proofStepsContainer = container.querySelector('.proof-steps');
        const workspaceContainer = container.querySelector('.workspace');
        const prevStepButton = container.querySelector('.prev-step');
        const nextStepButton = container.querySelector('.next-step');
        
        function updateProofSteps() {
            proofSteps.forEach((step, index) => {
                step.classList.remove('highlight');
                if (index === currentStepIndex) {
                    step.classList.add('highlight');
                }
            });
            updateWorkspace();
        }
        
        function updateWorkspace() {
            const currentStep = proofSteps[currentStepIndex];
            const stepNumber = currentStep.getAttribute('data-step');
            const workspaceContent = container.querySelector(`.workspace-content[data-step="${stepNumber}"]`);
            workspaceContainer.innerHTML = workspaceContent ? workspaceContent.innerHTML : '';
        }
        
        prevStepButton.addEventListener('click', () => {
            if (currentStepIndex > 0) {
                currentStepIndex--;
                updateProofSteps();
            }
        });
        
        nextStepButton.addEventListener('click', () => {
            if (currentStepIndex < proofSteps.length - 1) {
                currentStepIndex++;
                updateProofSteps();
            }
        });
        
        updateProofSteps(); // Initialize the proof steps and show the first step on page load
    });
});
