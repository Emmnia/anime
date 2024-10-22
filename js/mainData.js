const mainData = () => {
    const renderAnimeList = (array, genres) => {
        console.log(array);
        console.log(genres);
    }

    const renderTopAnime = (array) => {
        const wrapper = document.querySelector('.filter__gallery');
        wrapper.innerHTML = '';
        array.forEach((item) => {
            wrapper.insertAdjacentHTML('beforeend', `
                <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
                <div class="ep">${item.rating} / 10</div>
                <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
                <h5><a href="/anime-details.html">${item.title}</a></h5>
                </div>
                `);
        });
        wrapper.querySelectorAll('.set-bg').forEach((element) => {
            element.style.backgroundImage = `url(${element.dataset.setbg})`
        });
    }

    fetch('https://anime1024-433e7-default-rtdb.firebaseio.com/anime.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const genres = new Set()
            renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));

            data.forEach((item) => {
                genres.add(item.ganre);
                renderAnimeList(data, genres);
            })
        })
};

mainData();