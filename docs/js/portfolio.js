// Data structure for experiences and blog posts
const workExperience = [
    {
        title: "Junior Software Engineer In Test",
        link: "https://arxtron.com",
        date: "May 2024 - August 2025",
        preview: "Labwindows CVI control and communication libraries; TestStand functional testing; PLC automation; MES;",
        images: [],
        content: 
        "\
        This 16 month co-op term at Arxtron Technologies taught me so much, and I was able to experiment with a lot of new technologies.\
        \n\n\
        Worked on functional test and automation stations using TestStand + CVI or PLC, as well as developed standardized C libraries to be used in all future sequences. Designed and implemented in a clean and documented way ensuring future developer success. Internally, designed an MES for in-house manufactured PCBs, meeting senior engineer's specifications; tracking over 200+ PCB types over multiple stages of assembly.\
        "
    }
];

const projectExperience = [
    {
        title: "Time Loop Café",
        link: "https://mochamechanics.itch.io/time-loop-cafe",
        date: "2025",
        preview: "A Unity made game! See us at Level Up in April 2026!",
        images: ["assets/timeloop.png"],
        content: "You’re stuck in a time loop—customers repeat, chaos rewinds, but your memory stays. Anticipate orders, unlock clever shortcuts, and twist fate to keep the café running. Every reset is a chance to perfect your service… and escape this mysterious time loop!"
    },
    {
        title: "Thrive - Happy Habbits",
        link: "https://apps.apple.com/us/app/thrive-happy-habits/id6473956994",
        date: "2023",
        preview: "A mobile application geared towards improving the mental health of users through mental exercise",
        images: ["assets/thrive-splash.png"],
        content: "Worked as a full stack developer on the existing Django and ReactNative stack, deploying to both Android and iOS."
    },
    {
        title: "eedi - Predicting Student Scores",
        date: "2024",
        preview: "Machine Learning project predicting student scores",
        images: ["assets/311-epochs.png"],
        content: "A machine learning project, employing KNN, probabilistic models, and neural networks. \nImplemented, modified, and analyzed models in Python using PyTorch, Sci-Kit, and numpy using data provided by Eedi, an online education platform."
    }
];

const blogPosts = [

];

// Render functions
function createItemCard(item) {
    const imageHtml = item.images && item.images.length > 0 
        ? `<div class="item-card-image"><img src="${item.images[0]}" alt="${item.title}"></div>`
        : '';

    const dateHtml = item.date
        ? `<div class="date">${item.date}</div>`
        : '';

    return `
        <div class="item-card">
            ${imageHtml}
            <div class="item-card-content">
                <h3>${item.title}</h3>
                ${dateHtml}
                <div class="preview">${item.preview}</div>
            </div>
        </div>
    `;
}

function renderItems(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(createItemCard).join('');
    
    container.querySelectorAll('.item-card').forEach((card, index) => {
        card.addEventListener('click', () => showDetail(items[index]));
    });
}

function showDetail(item) {
    const detailBody = document.getElementById('detail-body');
    const imagesHtml = item.images && item.images.length > 0 
        ? `<div class="detail-images">${item.images.map(img => `<img src="${img}" alt="Project image">`).join('')}</div>`
        : '';
    
    const linkHtml = item.link 
        ? `<div style="margin-bottom: 1rem;"><a href="${item.link}" target="_blank">View →</a></div>`
        : '';
    
    detailBody.innerHTML = `
        <h2>${item.title}</h2>
        <div class="date">${item.date}</div>
        ${linkHtml}
        ${imagesHtml}
        <div class="detail-text">${item.content}</div>
    `;
    
    document.getElementById('detail-view').classList.add('active');
}

// Tab navigation
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Close detail view
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('detail-view').classList.remove('active');
});

document.getElementById('detail-view').addEventListener('click', (e) => {
    if (e.target.id === 'detail-view') {
        document.getElementById('detail-view').classList.remove('active');
    }
});

// Initialize
renderItems('work-experience', workExperience);
renderItems('project-experience', projectExperience);
renderItems('blog-posts', blogPosts);