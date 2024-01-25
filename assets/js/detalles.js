export function detail() {
    const clickPosts = document.querySelectorAll('.post');
    let dataIdValue;
    clickPosts.forEach(clickPost => {
        clickPost.addEventListener('click', () => {
            // Obtener el valor del atributo data-id
            dataIdValue = clickPost.querySelector('.post-link').getAttribute('data-id');
            
            return dataIdValue
            
        });
    });

}


