'use strict';


document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('[data-link]'),
          gangsta = document.querySelector('.gangsta');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Если еще раз сука нажмешь, то я тебе яйца нахуй отпилю');
        });
    });

    class FooterText {
        constructor(text, parent) {
            this.text = text
            this.parent = document.querySelector(parent)
        }

        render() {
            const element = document.createElement('div')
            element.innerHTML = `<div class="title title_hook col-10 offset-1 col-md-10 offset-md-1" data-hook>${this.text}</div>`
            this.parent.prepend(element)
        }
    }

    let trap = new FooterText(
        'Пока что футера нет <br> прошу, сэр, не нажимайте на меня',
        'footer'
        ).render()

    let hook = document.querySelectorAll('[data-hook]');
    
    let i = 1

    hook[i - 1].addEventListener('click', () => {
        hook[i - 1].remove()
        new FooterText(
            'Старый, ты щас пулю словишь',
            'footer'
            ).render();
        hook = document.querySelectorAll('[data-hook]');
        i += 1;
        if (i === 2) {
            hook[i - 2].addEventListener('click', () => {
                hook[i - 2].remove()
                new FooterText(
                    "Ты щас доиграешься сука!",
                    'footer'
                    ).render();
                hook = document.querySelectorAll('[data-hook]');
                i += 1;
                if (i === 3) {
                    hook[i - 3].addEventListener('click', () => {
                        hook[i - 3].remove()
                        gangsta.classList.remove('hide');
                        gangsta.classList.add('show');
                        document.documentElement.scrollTop = 1440;
                    })
                }
            })
        }    
    }) 
})
