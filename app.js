const mainContainer = document.querySelector('.container');
const thanks = document.querySelector('.thank-you');
const btns = document.querySelectorAll('.btn');
const submit = document.getElementById('submit-btn');
const rating = document.getElementById('rating');




submit.addEventListener('click', () =>  {
    thanks.classList.remove('hidden');
    mainContainer.classList.add('hidden');

   
});

btns.forEach(btn => btn.addEventListener('click', (e) => {
    const target = e.target.innerText;
    
    rating.innerHTML = target;
    
}));