// book search section
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const errorHandling = document.getElementById('errors'); // for error handling
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => 
      // error handling
        {
            if (data.numFound === 0) {
                errorHandling.textContent = 'No results were found try another search';
            } else {
                errorHandling.textContent = '';
            }
        displaySearchResult(data.docs);
} )
}
// search books display section
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    // count total founded book
    const getBookText = document.getElementById('get-book');
    getBookText.innerText = `Total books found: ${docs.length}`;

    searchResult.textContent = ''; // for empty display book section
    docs.forEach(doc => {
      console.log(doc);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col mt-3">
          <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" style="height: 500px;" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-title fw-bold">Title: ${doc.text[1]}</p>
              <p class="card-text">Author name: ${doc.author_name}</p>
              <p class="card-text">Publisher: ${doc.publisher}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Frist publish year: ${doc.first_publish_year}</small>
            </div>
          </div>
        </div>
        `;
        searchResult.appendChild(div); // push(append) a div into searchResult
    });
}
