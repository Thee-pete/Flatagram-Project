// write your code here
//  comment section
const ul = document.querySelector('#comments-list');
const commentSection = ()=>{
    fetch("http://localhost:3000/comments")
    .then((response)=>response.json())
    .then((data)=>fetchComments(data))
}

const fetchComments = (information)=>{
    information.forEach((element)=>{
        const li = document.createElement('li');
        li.textContent = `${element.content}`;
        ul.appendChild(li);
        removeComments(li,element.id);
    })
}

commentSection();

const addComments = ()=>{
    const form = document.querySelector('#comment-form');
    const inputBar = document.querySelector('.comment-input');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const li = document.createElement('li');
        li.textContent = inputBar.value;
        ul.appendChild(li);
        postComments(inputBar.value);
        removeComments(li);
    })
}

addComments()

const postComments = (comment)=>{
    fetch("http://localhost:3000/comments",{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            "imageId": 1,
            "content":`${comment}`
        })
    })
}


const removeComments = (listItem,item)=>{
    listItem.addEventListener('click',(event)=>{
        listItem.remove();
        deleteComments(item);
    })
}

const deleteComments = (itemToDelete)=>{
    fetch(`http://localhost:3000/comments/${itemToDelete}`,{
        method:'DELETE'
    })
}
//comments for db.json
// {
//     "id": 1,
//     "imageId": 1,
//     "content": "What a cute dog!"
//   },
//   {
//     "id": 2,
//     "imageId": 1,
//     "content": "He's got a nose for bugs!"
//   },
//   {
//     "id": 3,
//     "imageId": 1,
//     "content": "Woof!"
//   }