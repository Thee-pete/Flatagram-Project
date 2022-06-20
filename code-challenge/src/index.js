// write your code here
document.addEventListener('DOMContentLoaded', function() {
    displayImageAndDetails();
});
   
let imgTitle = document.getElementById('card-title')
let imgSrc = document.getElementById('card-image')
let imgLikesCount = document.getElementById('like-count')
let imgCommentList = document.getElementById('comments-list')


function displayImageAndDetails(){
    const imageDetails = fetch ("http://localhost:3000/images/1")
    .then(resp => resp.json())
    .then(data => renderImageAndDetails(data))
   

    return imageDetails
}

function renderImageAndDetails(imageDetails){
    
        imgTitle.textContent = imageDetails.title;
        imgSrc.src = imageDetails.image;
        imgLikesCount.textContent =imageDetails.likes + ' likes';
        fetchComments(imageDetails.comments);

                
}
function fetchComments(commentsArray){

    commentsArray.forEach(element => {  
    let comment = document.createElement('li')
    comment.appendChild(document.createTextNode(element.content))
    imgCommentList.appendChild(comment)
  
          
    })
  
    
   
}

