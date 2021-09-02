const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const errorHandling = document.getElementById('errors');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => 
        {
            if (data.numFound === 0) {
                errorHandling.textContent = 'No result found';
            } else {
                errorHandling.textContent = '';
            }
        displaySearchResult(data.docs);
} )
}
const displaySearchResult = docs => {
    // console.log('Number of books',docs.length);
    const searchResult = document.getElementById('search-result');
    const getBookText = document.getElementById('get-book');
    const getBook = getBookText.innerText = docs.length;
    searchResult.textContent = '';
    docs.forEach(doc => {
        // console.log(doc);
        
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
          <div onclick="loadBookDetail('${doc.id_goodreads}')" class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" style="height: 500px;" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${doc.text[1]}</h5>
              <p class="card-text">${doc.author_name}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Frist publish year: ${doc.first_publish_year}</small>
            </div>
          </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}
const loadBookDetail = bookId => {
    // console.log(bookId);
}






