


const toggleHeart = () => {
  const likeButton = document.querySelector("#like-button")
    
  likeButton.addEventListener("click", (event)  =>{
 if(likeButton.textContent === "♥"){
    likeButton.textContent = "♡"
 } else {
    likeButton.textContent = "♥";
    likeCounter();
 }
 })
}

let n=0
const likeCounter = () => {
 const   likeCount = document.querySelector("#like-count");
 n++;
 likeCount.textContent = `${n} likes`
}

toggleHeart();