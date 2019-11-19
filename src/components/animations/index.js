document.addEventListener("DOMContentLoaded", function() { 

    const ulSquares = document.querySelector("ul.squares");

    for(let i = 0; i < 20; i++){
        const li = document.createElement("li");

        const random = (max, min) => Math.random() * (max - min) + min;
        const size = Math.floor(random(120, 10)); 
        const position = random(99, 1);
        const delay = random(5, 0.1);
        const duration = random(24, 12);

        li.style.width = `${size}px`;
        li.style.height = `${size}px`;
        li.style.bottom = `-${size}px`;
        li.style.animationDuration = `${duration}s`;
        li.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(),Math.random()})`;

        li.style.left = `${position}%`;

        ulSquares.appendChild(li);

        li.style.animationDelay = `${delay}s`;
    }
});

