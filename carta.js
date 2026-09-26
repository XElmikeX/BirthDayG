const envelope = document.querySelector(".envelope");
const heart = document.querySelector(".heart");
const front = document.querySelector(".front");
const text = document.querySelector(".text");
const boton = document.querySelector(".boton");
const sepatext = document.querySelector(".sepatext");
const finish = document.querySelector(".finished");
const despedida = document.querySelector(".despe");

function lanzarConfetti() {
    // Confetti desde los lados
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { x: 0, y: 0.5 }
        });
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { x: 1, y: 0.5 }
        });
    }, 200);
    
    // Confetti con colores personalizados
    setTimeout(() => {
        confetti({
            particleCount: 50,
            spread: 60,
            colors: ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff6fb7']
        });
    }, 600);
}

boton.addEventListener("click",()=>{
    envelope.classList.add("envelope1");
    heart.classList.add("heart1");
    front.classList.add("front1");
    text.classList.add("text1");
    boton.classList.add("boton1")
    sepatext.classList.add("sepatext1")
    finish.classList.add("finished1")
    despedida.classList.add("despe1")

    lanzarConfetti()
})