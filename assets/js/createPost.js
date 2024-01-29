import { calcularTiempoTranscurrido } from "./calculoTiempo.js";

export function createPost (post, postsLista){
    const postArticle = document.createElement('article');
    postArticle.classList.add('post');

    const postLink = document.createElement('a');
    postLink.classList.add('post-link');
    postLink.setAttribute('data-id', post.id);

    const postHeader = document.createElement('header');
    postHeader.classList.add('post-header');

    const postTitulo = document.createElement('h3');
    postTitulo.classList.add('post-title');
    postTitulo.textContent = post.title;

    const postFooter = document.createElement('footer');
    postFooter.classList.add('post-footer');

    const postContent = document.createElement('p');
    postContent.classList.add('post-content');
    postContent.textContent = post.content;

    const postDate = document.createElement('p');
    postDate.classList.add('post-date');
    postDate.textContent = post.date;

    const fechaInicial = new Date(post.date);
    const tiempoTranscurrido = calcularTiempoTranscurrido(fechaInicial);

    const postDetalleFecha = document.createElement('p');
    postDetalleFecha.textContent = `Tiempo transcurrido es: Años: ${tiempoTranscurrido.anios}, Meses: ${tiempoTranscurrido.meses}, Semanas: ${tiempoTranscurrido.semanas}, Días: ${tiempoTranscurrido.dias}, Horas: ${tiempoTranscurrido.horas}, Minutos: ${tiempoTranscurrido.minutos}, Segundos: ${tiempoTranscurrido.segundos}`;

    postsLista.appendChild(postArticle);
    postArticle.appendChild(postLink);
    postLink.appendChild(postHeader);
    postHeader.appendChild(postTitulo);
    postLink.appendChild(postFooter);
    postFooter.appendChild(postContent);
    postFooter.appendChild(postDate);
    postFooter.appendChild(postDetalleFecha);

    return postArticle

}