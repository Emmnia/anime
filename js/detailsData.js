const detailsData = () => {
    const preloader = document.querySelector('.preloder');

    const renderGenreList = (genres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown');

        genres.forEach(genre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?genre=${genre}">${genre}</a></li>
            `);
        });
    };

    const renderBreadcrumb = (item) => {
        const breadcrumbsBlock = document.querySelector('.breadcrumb__links');
        breadcrumbsBlock.insertAdjacentHTML('beforeend', `
                <span>${item.ganre}</span>
            `);
    }

    const renderAnimeDetails = (item) => {
        const detailsBlock = document.querySelector('.col-lg-9');
        const animePic = document.querySelector('.anime__details__pic');
        animePic.style.backgroundImage = `url(${item.image})`;
        animePic.insertAdjacentHTML('beforeend', `
            <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
            `);

        detailsBlock.insertAdjacentHTML('beforeend', `
                <div class="anime__details__text">
                    <div class="anime__details__title">
                        <h3>${item.title}</h3>
                        <span>${item.original_title}</span>
                    </div>
                    <p>${item.description}</p>
                    <div class="anime__details__widget">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <ul>
                                    <li><span>Date aired:</span>${item.date}</li>
                                    <li><span>Rating:</span>${item.rating}</li>
                                    <li><span>Genre:</span>${item.tags.join(', ')}</li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6">
                            </div>
                        </div>
                    </div>
                </div>`);

        setTimeout(() => {
            preloader.classList.remove('active');
        }, 500);

        // Когда есть дефис, надо обращаться в квадратных скобках: item['original-title']
    };

    fetch('https://anime1024-433e7-default-rtdb.firebaseio.com/anime.json')
        .then(res => res.json())
        .then((data) => {
            const genres = new Set();
            const idParams = new URLSearchParams(window.location.search).get("itemID");
            const animeTitle = data.find((item) => item.id === Number(idParams));

            data.forEach((item) => {
                genres.add(item.ganre);
            });

            if (idParams && animeTitle) {
                renderAnimeDetails(animeTitle);
                renderBreadcrumb(animeTitle);
            } else {
                console.log('Аниме отсутствует!');
            }

            renderGenreList(genres);
        })
};

detailsData();

