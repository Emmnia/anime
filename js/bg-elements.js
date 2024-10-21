const BGElements = () => {
    const elements = document.querySelectorAll('.set-bg');

    for (element of elements) {
        const src = element.dataset.setbg;
        element.style.backgroundImage = `url(${src})`
    }
};

BGElements();