document.querySelectorAll('article').forEach(article => {
    article.addEventListener('click', function () {
        const url = '/blogpost/' + this.dataset.postid
        location.href = url      
    }) })