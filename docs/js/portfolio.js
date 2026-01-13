// Data structure for experiences and blog posts
const workExperience = [
    {
        title: "Junior Software Engineer In Test",
        link: "https://arxtron.com",
        date: "May 2024 - August 2025",
        preview: "C control and communication libraries; PLC; MES and other Manufacturing Measurement Tools; Automation",
        images: ["https://via.placeholder.com/400x300"],
        content: "TODO"
    }
];

const projectExperience = [
    {
        title: "Thrive - Happy Habbits",
        link: "https://apps.apple.com/us/app/thrive-happy-habits/id6473956994",
        date: "2024",
        preview: "React Native Application for iOS and Android.",
        images: ["assets/thrive-splash.png"],
        content: "TODO"
    },
    {
        title: "eedi - Predicting Student Scores",
        date: "2024",
        preview: "Machine Learning project predicting student scores",
        images: ["https://via.placeholder.com/400x300"],
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
    
    return `
        <div class="item-card">
            ${imageHtml}
            <div class="item-card-content">
                <h3>${item.title}</h3>
                <div class="date">${item.date}</div>
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
        ? `<div style="margin-bottom: 1rem;"><a href="${item.link}" target="_blank">View Project →</a></div>`
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