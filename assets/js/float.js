document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById('floatBox');
    setInterval(() => {
        const x = (Math.random() - 0.5) * 3.5;
        const y = (Math.random() - 0.5) * 3.5;
        box.style.transform = `translate(${x}vw, ${y}vh)`;
        console.log("she")
    }, 400);
    console.log("he")
});