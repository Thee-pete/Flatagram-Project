// write your code here
document.addEventListener('DOMContentLoaded', function() {
    
    doAll()
  
});
   
let imgTitle = document.getElementById('card-title')
let imgSrc = document.getElementById('card-image')
let imgLikesCount = document.getElementById('like-count')
let imgCommentList = document.getElementById('comments-list')


function doAll(){
    displayImageAndDetails()
    hideImage()
    changeDog()
  
    
}


function displayImageAndDetails(){
    const imageDetails = fetch ("http://localhost:3000/images/1")
    .then(resp => resp.json())
    .then(data => renderImageAndDetails(data))
    return imageDetails
}

function renderImageAndDetails(imageDetails){
        imgTitle.textContent = imageDetails.title;
        imgSrc.src = imageDetails.image;
        imgLikesCount.textContent =imageDetails.likes;
        fetchComments(imageDetails.comments);
     
        
}
function fetchComments(commentsArray){
    commentsArray.forEach(element => {  
    let comment = document.createElement('li')
    comment.appendChild(document.createTextNode(element.content))
    imgCommentList.appendChild(comment)          
    })
       
}
function hideImage(){
    document.getElementById('card-title').addEventListener('click', ()=> {
        let cardImg = document.getElementById('card-image')
        if (cardImg.style.display === "none") {
            cardImg.style.display = "block";
          } else {
            cardImg.style.display = "none";
          }
    })
}
function changeDog(){
    document.getElementById('card-image').addEventListener('click', () =>{
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {

            fetch ("http://localhost:3000/images/1", {
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
    
                },
                body: JSON.stringify({
                    "image": data.message
                })
            })

        })
       
    })
}







