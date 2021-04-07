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

const newPostHandler = async (e) => {
    e.preventDefault();
    
    // Collect Values from form
    const postTitle = document.getElementById('post-title').value.trim();
    const postDescription = document.getElementById('post-description').value.trim();

    if (postTitle && postDescription) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: postTitle,
                text: postDescription
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log(response);
        } else {
            alert(response.statusText);
        }
    }
}

createBtn.addEventListener('click', switchView)

postForm.addEventListener('submit', newPostHandler)