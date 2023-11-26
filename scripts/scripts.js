// Mostrar tooltip al pasar el cursor sobre los íconos
const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((tooltip, index) => {
    const svg = document.getElementById(`svg${index + 1}`);
    const tooltipElement = document.getElementById(`tooltip${index + 1}`);

    svg.addEventListener('mouseover', () => {
        tooltipElement.style.display = 'block';
    });

    svg.addEventListener('mouseout', () => {
        tooltipElement.style.display = 'none';
    });
});
