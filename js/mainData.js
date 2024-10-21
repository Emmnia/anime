const mainData = () => {
    fetch('https://anime1024-433e7-default-rtdb.firebaseio.com/anime.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
};

mainData();