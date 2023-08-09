fetch('http://localhost:3000/quotes?_embed=likes')
  .then(res => res.json())
  .then(data => {
    const ul = document.getElementById("quote-list");
    data.forEach(element => {
      const li = document.createElement('li');
      const blockquote = document.createElement('blockquote');
      const btnLike = document.createElement('button');
      const btnDel = document.createElement('button');

      blockquote.innerHTML += `<p class="mb-0">${element.quote}.</p>
      <footer class="blockquote-footer">${element.author}</footer>
      <br>
      <button class='btn-success'>Likes: <span></span></button>`;

      li.appendChild(blockquote);
      ul.appendChild(li)
      const newLike = {
        quoteId: element.id,
        createdAt: Date.now(), 
      };
      
      // dataObject.likes.push(newLike);
      const likeBtn = blockquote.querySelector('.btn-success');
      likeBtn.addEventListener('click', function () {
        fetch(`http://localhost:3000/likes`,{
          method:'POST',
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(newLike)
      })
      .then(response =>response.json())
      .then(data =>console.log(data))
    });
  })
})
