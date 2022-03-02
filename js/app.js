const API_Link = 'https://imdb-api.com/en/API/Top250Movies/k_3kq7tc40'

//  get all the data =======================================
getData = () => {
    fetch(API_Link)
.then((res) => res.json())
.then((data) => {
    const reData = reFactorData(data.items);

    reFactorData(data.items);
    console.log(reData);
    movieCards(reData);

});
};
// ==========================================================

// Refactor data ==========
reFactorData = (movies) => {
    let movieData = []

    movies.map((m) => {
        movieData.push(
            {
                id: m.id,
                title: m.title,
                year: m.year,
                rank: m.rank,
                image: m.image,
                imdbRating: m.imdbRating,
                likes: 0,
                comments: ''
            }
        )

    });
    return movieData;
    // console.log('new movies', movieData);
}

// Create reusable movie card ==================================

movieCards = (reFacMovies) => {
    let movieCards = ``
    reFacMovies.map((m) => {
        movieCards += `<div class="movieCard">
        <img src="${m.image}" alt="${m.title}" />
        <div class="movieCardDetails">
            <h2>${m.title}</h2>
            <p>${m.year}</p>
            <p>IMDB Rating: <span>${m.imdbRating}</span></p>
            <div class="movieCardSocial">
            <a href="#"><i class="fas fa-heart"></i></a>
            <a href="#"><i class="fas fa-share-alt"></i></a>
            <a href="#"><i class="fas fa-comment"></i></a>
            </div>
        </div>
        </div>`

    });
console.log('movie card', movieCards);
    document.querySelector('body').innerHTML = movieCards;

};


getData();