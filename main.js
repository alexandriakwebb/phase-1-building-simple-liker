// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorModal = document.querySelector('#modal');
errorModal.classList.add('hidden')

let likeArticles = document.querySelectorAll('.like-glyph')

likeArticles.forEach((article) => {
  article.addEventListener('click', (event) => {
    let heart = event.target
    mimicServerCall()  
      .then(() => {  
        if(heart.innerHTML === EMPTY_HEART){
          heart.innerHTML = FULL_HEART;
          heart.classList.add('activated-heart')
        } else if (heart.innerHTML === FULL_HEART) {
          heart.innerHTML = EMPTY_HEART;
          heart.classList.remove('activated-heart')
        }
      })  
      .catch(() => {  
        errorModal.classList.remove('hidden')
        errorModal.innerHTML = 'Server Error'
        setTimeout (() => {
          errorModal.classList.add('hidden');
        }, 3000)
      })  
  })
})





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
