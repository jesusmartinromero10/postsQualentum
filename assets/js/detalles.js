export function createDetail (data, postsLista, postsList, detalle, todosPosts){
    postsLista.classList.add('loader');
    const detailSection = document.querySelector('.detail-post');
    detailSection.innerHTML = '';
    postsList.innerHTML = '';

    const detailHeader = document.createElement('header');
    detailHeader.classList.add('detail-post-header');

    const detailButton = document.createElement('button');
    detailButton.classList.add('back-button');

    const detailI = document.createElement('i');
    detailI.classList.add('fas', 'fa-arrow-left', 'fa-solid', 'green');

    const detailH2 = document.createElement('h2');
    detailH2.textContent = data.title;

    const detailParrafo = document.createElement('p');
    detailParrafo.classList.add('detail-post-content');
    detailParrafo.textContent = data.content;

    const detailAutor = document.createElement('p');
    detailAutor.classList.add('detail-post-author');
    detailAutor.textContent = data.author;

    detailSection.appendChild(detailHeader);
    detailHeader.appendChild(detailButton);
    detailButton.appendChild(detailI);
    detailHeader.appendChild(detailH2);
    detailSection.appendChild(detailParrafo);
    detailSection.appendChild(detailAutor);

    postsLista.classList.remove('loader');

    detailButton.addEventListener('click', () => {
        postsLista.classList.add('loader');
        detalle.classList.add('hidden');
        todosPosts.forEach(p => {
            p.classList.remove('hidden');
            postsLista.classList.remove('loader');
        });
    });
    return postsLista
}