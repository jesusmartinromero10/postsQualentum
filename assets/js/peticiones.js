

import { urls } from "./constant.js";
import { createPost } from "./createPost.js";
import { createDetail } from "./detalles.js";

async function peticionPost() {
    try {
        const postsLista = document.querySelector('.posts');
        postsLista.innerHTML = "";
        postsLista.classList.add('loader');

        const postsList = await fetch(urls.post);
        if (!postsList.ok) {
            throw new Error('Network response was not ok');
        }

        const dataPosts = await postsList.json();
        const { posts } = dataPosts;

        posts.forEach(post => {
            try {
                const postArticle = createPost(post, postsLista)
                postsLista.classList.remove('loader');

                postArticle.addEventListener('click', () => {
                    try {
                        const dataIdValue = postArticle.querySelector('.post-link').getAttribute('data-id');
                        const todosPosts = document.querySelectorAll('.post');
                        const detalle = document.querySelector('.detail-post');

                        todosPosts.forEach(p => {
                            p.classList.add('hidden');
                        });

                        detalle.classList.remove('hidden');

                        const textoDetalle = fetch(urls[dataIdValue]).then(res => {
                            if (!res.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return res.json();
                        }).then(data => {
                            try {
                                createDetail(data, postsLista, postsList, detalle, todosPosts)
                            } catch (error) {
                                console.error('Error processing details:', error);
                            }
                        }).catch(error => {
                            console.error('Error fetching data:', error);
                        });
                    } catch (error) {
                        console.error('Error processing detail article click:', error);
                    }
                });
            } catch (error) {
                console.error('Error processing post:', error);
            }
        });
    } catch (error) {
        console.error('Error processing posts:', error);
    }

    

    
}

peticionPost()


