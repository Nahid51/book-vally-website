const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))

}

const displaySearchResult = docs => {
    // console.log(docs[0]);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(doc => {
        // console.log(doc);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
          <div onclick="loadBookDetail('${doc.id_goodreads}')" class="card-body">
            <h5 class="card-title">${doc.text[1]}</h5>
            <h5 class="card-text">${doc.author_name}</h5>
          </div>
          <div class="card-footer">
            <small class="text-muted">${doc.first_publish_year}</small>
          </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}
const loadBookDetail = bookId => {
    // console.log(bookId);

}






