// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Generate mock GitHub contribution graph
    const graphContainer = document.getElementById('contribution-graph');
    if (graphContainer) {
        const weeks = 53;
        const daysPerWeek = 7;
        const totalDays = weeks * daysPerWeek;
        
        // Create an array of activity levels (0-4)
        // We'll make it look somewhat realistic with streaks and busy periods
        const levels = [];
        let currentLevel = 0;
        
        for (let i = 0; i < totalDays; i++) {
            // Randomly change the activity level, or keep it the same to create clusters
            if (Math.random() > 0.7) {
                // Bias towards lower activity (0 or 1)
                const rand = Math.random();
                if (rand < 0.5) currentLevel = 0;
                else if (rand < 0.75) currentLevel = 1;
                else if (rand < 0.9) currentLevel = 2;
                else if (rand < 0.97) currentLevel = 3;
                else currentLevel = 4;
            }
            levels.push(currentLevel);
        }

        // Generate the DOM elements
        for (let i = 0; i < totalDays; i++) {
            const day = document.createElement('div');
            day.className = 'graph-day';
            day.setAttribute('data-level', levels[i]);
            
            // Add a simple tooltip title (optional)
            const date = new Date();
            date.setDate(date.getDate() - (totalDays - i));
            day.title = `${levels[i] === 0 ? 'No' : levels[i] * 3} contributions on ${date.toDateString()}`;
            
            graphContainer.appendChild(day);
        }
    }

    // Add subtle reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.bento-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s, box-shadow 0.2s ease, border-color 0.2s ease`;
        observer.observe(card);
    });
});
