// write your code here
// var likeCount = document.getElementById("#like-count")
// function count(){
//     likeCount.innerText = parseInt(likeCount.innerText) + 1;

// }
// console.log(count);
// const likes = document.querySelectorAll(".likes");
// console.log(likes);
// likes.forEach(function(like){
//     like.addEventListener('click',function(){
//         console.log(like.childNodes[0]);
//         if(like.childNode[0].classList.contains('far')){
//             console.log("Object")
//         }  
//     })
// })
fetch("http://localhost:3000/posts")
.then((resp) => resp.json())
// .then((currentLikeData) =>
// setLikeCounter(currentLikeData, id, setLikeCounter)
// );
var likeButton = document.getElementById("like-button")
likeButton.addEventListener("click", function(){
    document.getElementById("like-count").innerHTML = "like 1";
})
