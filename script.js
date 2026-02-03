const buttons = document.querySelectorAll('.details-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.classList.toggle('hidden');
    });
});