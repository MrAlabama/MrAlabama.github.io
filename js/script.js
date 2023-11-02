'use strict';

// test 1

document.addEventListener('DOMContentLoaded', () => {




    const modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal_warning_close'),
          modalOpen = document.querySelector('.profile_img')

    modal.classList.add('hide')

    modalOpen.addEventListener('click', () => {
        modal.classList.remove('hide')
        modal.classList.add('show')
        let timer = setTimeout(() => {
            modal.classList.remove('show')
            modal.classList.add('hide')
        }, 10000)
        modalClose.addEventListener('click', () => {
            clearTimeout(timer)
            modal.classList.remove('show')
            modal.classList.add('hide')
        })
    })




})
