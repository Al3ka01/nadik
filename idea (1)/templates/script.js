let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');-
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem =document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const galleryWrapper = document.querySelector('.gallery-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let scrollAmount = 0;
    const scrollStep = 160;
    
    nextBtn.addEventListener('click', () => {
        scrollAmount += scrollStep;
        if (scrollAmount >= galleryWrapper.scrollWidth - galleryWrapper.clientWidth) {
            scrollAmount = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;
        }
        galleryWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    });
    
    prevBtn.addEventListener('click', () => {
        scrollAmount -= scrollStep;
        if (scrollAmount <= 0) {
            scrollAmount = 0;
        }
        galleryWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    });
    
    function openModal(title, description) {
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal').style.display = 'flex';
    }
    
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }