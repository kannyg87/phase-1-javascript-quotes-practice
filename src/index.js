const li = document.createElement('li')
const blockquote = document.createElement('blockquote')
const btnLike = document.createElement('button')
const btnDel = document.createElement('button')

console.log((btnDel))
fetch('http://localhost:3000/quotes?_embed=likes')
.then(res=>res.json())
.then(data=>{
  console.log(data)
  data.forEach(element => {
   blockquote.innerHTML +=`<p class="mb-0">${element.quote}.</p>
   <footer class="blockquote-footer">${element.author}</footer>
   <br>
   <button class='btn-success'>Likes: <span></span></button>`
   const ul =document.getElementById("quote-list")
   li.appendChild(blockquote)
   ul.appendChild(li)
   const likeBtn = blockquote.querySelector('.btn-success')
   console.log(likeBtn)

   likeBtn.addEventListener('click', function(){
    console.log("object")
  })

  });
})