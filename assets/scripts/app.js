const addMovieModal = document.getElementById('add-modal');
//const addMovieModal1 = document.querySelector('add-modal');
const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header).lastElementChild;


const toggleMovieModal = () => {
    //check the class if its already in the element
    //addMovieModal.className = 'modal card';

    //access our add button and be able to click on it using the eventListener
    addMovieModal.classList.toggle('visible');
};


//add event listener
startAddMovieButton.addEventListener('click', toggleMovieModal);