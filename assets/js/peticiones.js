import { urls } from "./constant.js";
import { detail } from "./detalles.js";

async function peticionPost (){

    const postsList = await fetch(urls.post)
    const dataPosts = await postsList.json()
    console.log(dataPosts)
    const { posts } = dataPosts

    const postsLista = document.querySelector('.posts');
    postsLista.innerHTML= "";

    posts.forEach(post => {
        console.log(post)

        const postArticle = document.createElement('article')
        postArticle.classList.add('post')

        const postLink = document.createElement('a')
        postLink.classList.add('post-link')
        postLink.setAttribute('data-id', post.id)

        const postHeader = document.createElement('header')
        postHeader.classList.add('post-header')

        const postTitulo = document.createElement('h3')
        postTitulo.classList.add('post-title')
        postTitulo.textContent=post.title

        const postFooter = document.createElement('footer')
        postFooter.classList.add('post-footer')

        const postContent = document.createElement('p')
        postContent.classList.add('post-content')
        postContent.textContent=post.content

        const postDate = document.createElement('p')
        postDate.classList.add('post-date')
        postDate.textContent=post.date


        postsLista.appendChild(postArticle)
        postArticle.appendChild(postLink)
        postLink.appendChild(postHeader)
        postHeader.appendChild(postTitulo)
        postLink.appendChild(postFooter)
        postFooter.appendChild(postContent)
        postFooter.appendChild(postDate)

        postArticle.addEventListener('click', ()=>{
            const dataIdValue = postArticle.querySelector('.post-link').getAttribute('data-id');
            const todosPosts = document.querySelectorAll('.post')
            const detalle = document.querySelector('.detail-post')
            

            todosPosts.forEach(p=>{
                p.classList.add('hidden')

            })
            detalle.classList.remove('hidden')
            
           
            const textoDetalle = fetch(urls[dataIdValue]).then(res=>res.json().then(data=>{

                const detailSection = document.querySelector('.detail-post')
                detailSection.innerHTML=''
                postsList.innerHTML = ''
                
                const detailHeader = document.createElement('header')
                detailHeader.classList.add('detail-post-header')

                const detailButton = document.createElement('button')
                detailButton.classList.add('back-button')

                const detailI = document.createElement('i')
                detailI.classList.add('fas', 'fa-arrow-left', 'fa-solid', 'green')

                const detailH2 = document.createElement('h2')
                detailH2.textContent= data.title

                const detailParrafo = document.createElement('p')
                detailParrafo.classList.add('detail-post-content')
                detailParrafo.textContent=data.content

                const detailAutor = document.createElement('p')
                detailAutor.classList.add('detail-post-author')
                detailAutor.textContent=data.author

                detailSection.appendChild(detailHeader)
                detailHeader.appendChild(detailButton)
                detailButton.appendChild(detailI)
                detailHeader.appendChild(detailH2)
                detailSection.appendChild(detailParrafo)
                detailSection.appendChild(detailAutor)


                detailButton.addEventListener('click', ()=>{
                    detalle.classList.add('hidden')
                    todosPosts.forEach(p=>{
                        p.classList.remove('hidden')
        
                    })
                })


            }))
            
        })
    });
    
}

peticionPost();