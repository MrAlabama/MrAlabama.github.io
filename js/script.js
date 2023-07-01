'use strict';



document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('.non-release')

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Еще раз сука нажмешь, то я тебе яйца нахуй отпилю');
        });
    });

})
