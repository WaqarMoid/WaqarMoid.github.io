document.addEventListener('DOMContentLoaded', () => {

    // ===== HERO GRID BACKGROUND =====
    const heroGrid = document.getElementById('hero-grid');
    if (heroGrid) {
        for (let i = 0; i < 800; i++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            heroGrid.appendChild(cell);
        }
    }

    // ===== NAVBAR SCROLL =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ===== SCROLL REVEAL =====
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));

    // ===== CONTRIBUTION GRAPH =====
    const graph = document.getElementById('contrib-graph');
    if (graph) {
        const totalWeeks = 52;
        const days = totalWeeks * 7;
        
        // Generate realistic-looking activity
        const activity = [];
        let momentum = 0;
        for (let i = 0; i < days; i++) {
            // Create natural-looking streaks
            if (Math.random() > 0.65) {
                const r = Math.random();
                if (r < 0.35) momentum = 0;
                else if (r < 0.6) momentum = 1;
                else if (r < 0.8) momentum = 2;
                else if (r < 0.93) momentum = 3;
                else momentum = 4;
            }
            // Weekends are less active
            const dayOfWeek = i % 7;
            if ((dayOfWeek === 0 || dayOfWeek === 6) && Math.random() > 0.4) {
                activity.push(Math.max(0, momentum - 1));
            } else {
                activity.push(momentum);
            }
        }

        activity.forEach((level, i) => {
            const day = document.createElement('div');
            day.className = 'contrib-day';
            day.setAttribute('data-level', level);
            const date = new Date();
            date.setDate(date.getDate() - (days - i));
            day.title = `${level === 0 ? 'No' : level * 2 + Math.floor(Math.random() * 3)} contributions on ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
            graph.appendChild(day);
        });
    }

    // ===== FETCH GITHUB REPOS =====
    const repoGrid = document.getElementById('repo-grid');
    if (repoGrid) {
        const langColors = {
            'Python': '#3572A5',
            'JavaScript': '#f1e05a',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'Jupyter Notebook': '#DA5B0B',
            'TypeScript': '#3178c6',
            'C': '#555555',
            'C++': '#f34b7d',
            'Java': '#b07219',
            'R': '#198CE7',
            null: '#8b949e'
        };

        fetch('https://api.github.com/users/WaqarMoid/repos?per_page=30&sort=updated')
            .then(res => res.json())
            .then(repos => {
                repos
                    .filter(r => !r.fork && r.name !== 'WaqarMoid.github.io')
                    .forEach(repo => {
                        const chip = document.createElement('a');
                        chip.href = repo.html_url;
                        chip.target = '_blank';
                        chip.className = 'repo-chip reveal';
                        const langColor = langColors[repo.language] || langColors[null];
                        chip.innerHTML = `
                            <i class="fas fa-book-bookmark"></i>
                            <span class="repo-chip-name">${repo.name}</span>
                            ${repo.language ? `<span class="repo-chip-lang"><i class="fas fa-circle" style="color:${langColor}"></i> ${repo.language}</span>` : ''}
                        `;
                        repoGrid.appendChild(chip);
                        // Observe for reveal animation
                        observer.observe(chip);
                    });
            })
            .catch(() => {
                repoGrid.innerHTML = '<p style="color:var(--text-muted)">Could not load repositories.</p>';
            });
    }
});
