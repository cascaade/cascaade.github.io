const projectsContainer = document.getElementById('projects-container');
const loadMoreProjectsButton = document.getElementById('load-more-projects-button');

function createProjectCard(data) {
    const stuff =  `<img src="assets/${data.img}" alt="Image" class="project-image">
                    <div class="project-info-container">
                        <span class="project-name">${data.name}<span class="timestamp">${data.time}</span></span>
                        <span class="project-desc">${data.desc}</span>
                    </div>`;

    const div = document.createElement('div');
    div.classList.add('project-card');
    div.innerHTML = stuff;

    div.onclick = () => {
        window.location.href = '/view/?p=' + data.path;
    }
    
    projectsContainer.append(div);
}

const projectsDB = [
    {
        name: 'Flappy Bird',
        desc: 'Not just any old minimalist game...',
        img: 'bird.png',
        time: '7/12/25',
        path: 'bird',
    },
];

let cardsPerRow = window.innerWidth > 1300 ? 3 : 1 // based on css styling
let perClick = cardsPerRow * 2 // 2 new rows per "more" click
let i = 0;

function genMoreCards(initial) {
    const rect = loadMoreProjectsButton.getBoundingClientRect();
    const y = rect.top + window.scrollY - window.innerHeight * cardsPerRow/10; // 10 seems to be most reasonable for all platforms

    for (let x = i; x < i + perClick; x++) {
        if (x >= projectsDB.length) break;
        createProjectCard(projectsDB[x]);
    }

    i += perClick;

    if (i < projectsDB.length) {
        loadMoreProjectsButton.style.display = 'block';
    } else {
        loadMoreProjectsButton.style.display = 'none';
    }

    if (!initial) { // if not generating the first chunk of cards
        navScroll(y, '#projects');
    }
}

genMoreCards(true);