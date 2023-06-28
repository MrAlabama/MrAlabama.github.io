'use strict';



document.addEventListener('DOMContentLoaded', () => {

    const profileLink = document.querySelector('.profile_link_icon'),
          textProfileLink = document.querySelector('.profile_link'),
          infoLink = document.querySelector('.info_link'),
          textInfoLink = document.querySelector('.info_textlink');

    profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Еще раз сука нажмешь, то я тебе яйца нахуй отпилю');
    });

    textProfileLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Еще раз сука нажмешь, то я тебе яйца нахуй отпилю');
    });

    infoLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Еще раз сука нажмешь, то я тебе яйца нахуй отпилю');
    });

    textInfoLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Еще раз сука нажмешь, то я тебе яйца нахуй отпилю');
    });
})