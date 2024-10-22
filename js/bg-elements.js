const BGElements = () => {
    const elements = document.querySelectorAll('.set-bg');

    elements.forEach((element) => {
        element.style.backgroundImage = `url(${element.dataset.setbg})`
    });

    // for (element of elements) {
    //     const src = element.dataset.setbg;
    //     element.style.backgroundImage = `url(${src})`
    // }
};

BGElements();