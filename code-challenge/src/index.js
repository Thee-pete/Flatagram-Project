
function updateLikes(){
    
    fetch ("http://localhost:3000/images/1")
    .then(resp => resp.json())
    .then(data => {
       
        document.getElementById('like-button').addEventListener('click', ()=> {
    
            data.likes +=1 

            document.getElementById('like-count').textContent = data.likes
        
            fetch  ("http://localhost:3000/images/1", {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "likes" : data.likes
            })

        })
    })
})

}
updateLikes();