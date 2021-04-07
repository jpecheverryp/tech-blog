const createBtn = document.getElementById('create-btn');
const postForm = document.getElementById('create-form');
let actualView = 'posts'

createBtn.addEventListener('click', switchView)

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