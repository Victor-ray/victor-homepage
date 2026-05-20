let counter = 1145;

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.querySelectorAll('.pixel-btn').forEach((btn, index) => {
    btn.style.animation = `pulse 2s infinite ${index * 0.2}s`;
});

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
`;
document.head.appendChild(style);

window.addEventListener('scroll', () => {
    const header = document.querySelector('.pixel-header');
    if (window.scrollY > 50) {
        header.style.transform = 'scale(0.95)';
    } else {
        header.style.transform = 'scale(1)';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === '1') showSection('about');
    if (e.key === '2') showSection('projects');
    if (e.key === '3') showSection('contact');
});

console.log('%c 欢迎来到 Victor 的像素世界! ', 'background: #39ff14; color: #0f0f23; font-size: 20px; font-family: monospace;');