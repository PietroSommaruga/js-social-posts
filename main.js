const postList = [
    {
        id: 'Phil Mangione',
        photo: 'https://unsplash.it/300/300?image=15',
        data: '4 mesi fa',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: '999+',
    },
    {
        id: 'Connor Mcgregor', 
        photo: 'https://unsplash.it/300/300?image=15',
        data: '4 anno fa',
        text: 'Non pensavo fosse cosi difficile',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 7,
    },
    {
        id: 'Mike Tyson',
        photo: 'https://unsplash.it/300/300?image=15',
        data: '4 anni fa',
        text: 'Bello vedere che solo 7 persone hanno messo mi piace a Mc Gregor',
        image: '',
        likes: '100k',
    },
    {
        id: 'Matteo Salvini',
        photo: 'https://unsplash.it/300/300?image=15',
        data: 'ieri',
        text: 'Non so piu cosa inventarmi',
        image: '',
        likes: 80,
    }
]

const postContainer = document.getElementById('container');
for (let i = 0; i < postList.length; i++) {
    const post = postList[i]
    postContainer.innerHTML +=
`<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.photo}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.id}</div>
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
                        <a class="like-button  js-like-button" href="#" data-postid="1">
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
}