// DOM ELEMENTS
const createBtn = document.getElementById('create-btn');
const postForm = document.getElementById('create-form');
// Global Variables
let actualView = 'posts'

function switchView() {
    if (actualView === 'posts') {
        postForm.style.display = 'block';
        createBtn.textContent = 'View Posts'
        actualView = 'createNew';
        return
    }
    if (actualView === 'createNew') {
        postForm.style.display = 'none';
        createBtn.textContent = 'New Post'
        actualView = 'posts';
        return
    }
}

function newPostHandler(e) {
    e.preventDefault();
    
    // Collect Values from form
    const postTitle = document.getElementById('post-title').value.trim();
    const postDescription = document.getElementById('post-description').value.trim();

    if (postTitle && postDescription) {
        console.log('I need a route first!');
    }
}

createBtn.addEventListener('click', switchView)

postForm.addEventListener('submit', newPostHandler)