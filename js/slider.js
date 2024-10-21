const slider = () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: "fade",
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
};

slider();
