const post = [
    {
        id: 1,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.',
        image: 'https://unsplash.it/600/300?image=160',
        author: {
            name: 'Phil Mangione',
            photo: 'https://unsplash.it/300/300?image=15',
        },
        likes: 999,
        data: '2021/05/06',
    },
    {
        id: 2,
        text: 'Non pensavo fosse cosi difficile',
        image: 'https://unsplash.it/600/300?image=100',
        author: {
            name: 'Connor Mcgregor', 
            photo: 'https://unsplash.it/300/300?image=17',
        },
        likes: 7,
        data: '4 anno fa',
    },
    {
        id: 3,
        text: 'Bello vedere che solo 7 persone hanno messo mi piace a Mc Gregor',
        image: '',
        author: {
            name: 'Mike Tyson',
            photo: 'https://unsplash.it/300/300?image=10',
        },
        likes: 100,
        data: '4 anni fa',
    },
    {
        id: 4,
        text: 'Non so piu cosa inventarmi',
        image: '',
        author: {
            name: 'Matteo Salvini',
            photo: 'https://unsplash.it/300/300?image=16',
        },
        likes: 80,
        data: 'ieri',
    }
];

    
function createTemplateHtml(post){    
    const template =
    `<div class="post">
    <div class="post__header">
    <div class="post-meta">                    
    <div class="post-meta__icon">
    <img class="profile-pic" src="${post.author.photo}">                    
    </div>
    <div class="post-meta__data">
    <div class="post-meta__author">${post.author.name}</div>
    <div class="post-meta__time">${post.data}</div>
    </div>                    
    </div>
    </div>
    <div class="post__text">${post.text}</div>
    <div class="post__image">
    <img src="${post.image}" alt="">
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
    <div class="likes__cta">
    <a class="like-button  js-like-button" href="#">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>
    </div>
    <div class="likes__counter">
    Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
    </div>
    </div> 
    </div>            
    </div>`
    return template;
}

const containerHtml = document.getElementById('container');
for ( let i= 0; i< post.length; i++){
    const currentPost = post[i];
    containerHtml.innerHTML += createTemplateHtml(currentPost)
}

const likeButtons = document.querySelectorAll('.js-like-button')
// per ogn post c'è un solo pulsante like.

const likeCounter = document.querySelectorAll('.js-likes-counter')

for(let i = 0; i < likeButtons.length; i++) {
    const button = likeButtons[i];
    
    button.addEventListener('click', function (){

        event.preventDefault();

        const currentCounterHtml = likeCounter[i];

        this.classList.add('like-button-liked');

        const currentCounterInt = parseInt(currentCounterHtml.innerHTML);

        console.log(currentCounterInt)

        currentCounterHtml.innerHTML = currentCounterInt + 1;

        post[i].likes++;


    },
    {
        once: true
    }
    );
}
