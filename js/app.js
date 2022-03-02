const API_Link = 'https://imdb-api.com/en/API/Top250Movies/k_3kq7tc40'


getData = () => {
    fetch(API_Link)
.then((res) => res.json())
.then((data) => {
    const rawData = data.items
    console.log('data', rawData);

});

}

getData();