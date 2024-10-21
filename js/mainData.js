const mainData = () => {
    fetch('./db.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.anime);
        })
};

mainData();