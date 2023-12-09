'use strict'; 

const start = document.querySelector('.start'),
      html = document.querySelector('html');

start.addEventListener('click', (e) => {

    document.querySelector('body').remove();

    const body = document.createElement('body');
    html.append(body);

    class GetClickOfUser {
        constructor(parent,img,text,addImg) {
            this.parent = document.querySelector(parent),
            this.img = img,
            this.text = text,
            this.addImg = addImg,
            this.time = 2000
        }
    
        render() {
            const element = document.createElement('section');
            element.classList.add("question");
    
            element.innerHTML = `
            <div data-choice class="question_left" id="1">Да</div>
            <div data-choice class="question_rigth" id="2">Нет</div>
            <div class="question_info">${this.text}</div>
            `

            if (this.addImg) {
                this.time = 4000
                const lieElement = document.createElement('section');
                lieElement.style.background = this.addImg;
                lieElement.classList.add("final", "final_lie");
        
                lieElement.innerHTML = `
                <div class="question_info">ЛОЖЬ!!</div>
                `

                setTimeout(() => {
                    document.querySelectorAll('.final').forEach(n => n.classList.add('hide'));
                }, 2000);

                this.parent.prepend(lieElement);
            }

            setTimeout(() => {
                document.querySelectorAll('.question_info').forEach(n => n.classList.add('hide'));
            }, this.time);
            
            this.parent.prepend(element);
            
            document.querySelectorAll('.question_info').forEach(n => n.style.background = this.img);
        };
        
        buy() {
            const element = document.createElement('section');
            element.style.background = this.img;
            element.classList.add("final", "final_main");

            element.innerHTML = `
                <div class="question_info">Купите Radicance!!!!</div>
            `;
    
            this.parent.prepend(element);

            if (this.addImg) {
                const element = document.createElement('section');
                element.style.background = this.addImg;
                element.classList.add("final", "final_add");
                element.style.zIndex = "999"
                element.innerHTML = `
                    <div class="question_info">${this.text}</div>
                `;
                setTimeout(() => {
                    document.querySelectorAll('.final_add').forEach(n => n.classList.add('hide'));
                }, 2000);
                this.parent.prepend(element);
            }
        }
    }

    
    new GetClickOfUser(
        "body",
        "#222 url('img/Money.jpg') center center/cover no-repeat",
        "У вас есть деньги?"
    ).render();
    
    
    
    let choice = document.querySelectorAll('[data-choice]');
    
    
    choice.forEach(n => {
        n.addEventListener('click', (e) => {
            document.querySelector('.question').remove();
            let target = e.target;
            let check = +target.id
            if (check == 1) {
                console.log(choice)
                new GetClickOfUser(
                    "body",
                    "#222 url('img/Radiance.png') center center/cover no-repeat",
                    ""
                ).buy();
            } else {
                new GetClickOfUser(
                    "body", 
                    "#222 url('img/Rabota.jpg') center center/cover no-repeat",
                    "У вас есть работа?"
                ).render();

                choice = document.querySelectorAll('[data-choice]');

                choice.forEach(n => {
                    n.addEventListener('click', (e) => {
                    document.querySelector('.question').remove();
                    let target = e.target;
                    let check = +target.id
                    if (check == 1) {



                        new GetClickOfUser(
                            "body", 
                            "#222 url('img/Zarplata.jpg') center center/cover no-repeat",
                            "Они вам платят?"
                        ).render();

                        choice = document.querySelectorAll('[data-choice]');
                        
                        choice.forEach(n => {
                            n.addEventListener('click', (e) => {
                            document.querySelector('.question').remove();
                            let target = e.target;
                            let check = +target.id
                            if (check == 1) {
                                console.log(choice)
                                new GetClickOfUser(
                                    "body",
                                    "#222 url('img/Radiance.png') center center/cover no-repeat",
                                    "Заработайте",
                                    "#222 url('img/Zarabotok.jpg') center center/cover no-repeat"
                                ).buy();
                            } else {
                                new GetClickOfUser(
                                    "body", 
                                    "#222 url('img/Imush.jpg') center center/cover no-repeat",
                                    "У вас есть Имущество?"
                                ).render();
                
                                choice = document.querySelectorAll('[data-choice]');
                
                                choice.forEach(n => {
                                    n.addEventListener('click', (e) => {
                                    document.querySelector('.question').remove();
                                    let target = e.target;
                                    let check = +target.id
                                    if (check == 1) {
                                        console.log(choice)
                                        new GetClickOfUser(
                                            "body",
                                            "#222 url('img/Radiance.png') center center/cover no-repeat",
                                            "Продайте!",
                                            "#222 url('img/Dogovor.jpg') center center/cover no-repeat"
                                        ).buy();
                                    } else {
                                        new GetClickOfUser(
                                            "body", 
                                            "#222 url('img/Chort.jpg') center center/cover no-repeat",
                                            "У вас есть душа???"
                                        ).render();
                        
                                        choice = document.querySelectorAll('[data-choice]');
                        
                                        choice.forEach(n => {
                                            n.addEventListener('click', (e) => {
                                                document.querySelector('.question').remove();
                                                let target = e.target;
                                                let check = +target.id;
                                                let test = 0
                                                if (check == 1) {
                                                    console.log(choice)
                                                    new GetClickOfUser(
                                                        "body",
                                                        "#222 url('img/Radiance.png') center center/cover no-repeat",
                                                        "Продайте",
                                                        "#222 url('img/ProdajaSoul.jpeg') center center/cover no-repeat"
                                                    ).buy();
                                                } else {
                                                    function soul () {
                                                        new GetClickOfUser(
                                                            "body", 
                                                            "#222 url('img/Chort.jpg') center center/cover no-repeat",
                                                            "У вас есть душа???",
                                                            "#222 url('img/Radiance.png') center center/cover no-repeat"
                                                        ).render();
                                                
                                                        choice = document.querySelectorAll('[data-choice]');
                                                
                                                        choice.forEach(n => {
                                                            n.addEventListener('click', (e) => {
                                                                document.querySelector('.question').remove();
                                                                target = e.target;
                                                                check = +target.id;
                                                                if (check == 1) {
                                                                    new GetClickOfUser(
                                                                        "body",
                                                                        "#222 url('img/Radiance.png') center center/cover no-repeat",
                                                                        "Продайте",
                                                                        "#222 url('img/ProdajaSoul.jpeg') center center/cover no-repeat"
                                                                    ).buy();
                                                                } else {
                                                                    soul()
                                                                }
                                                            })
                                                        });
                                                    }
        
                                                    soul()
        
                                                }   
                                            })
                        
                                        });
                                    }
                                    })
                
                                });

                            }
                            })
                        });

                    } else {
                        new GetClickOfUser(
                            "body", 
                            "#222 url('img/Imush.jpg') center center/cover no-repeat",
                            "У вас есть Имущество?"
                        ).render();
        
                        choice = document.querySelectorAll('[data-choice]');
        
                        choice.forEach(n => {
                            n.addEventListener('click', (e) => {
                            document.querySelector('.question').remove();
                            let target = e.target;
                            let check = +target.id
                            if (check == 1) {
                                console.log(choice)
                                new GetClickOfUser(
                                    "body",
                                    "#222 url('img/Radiance.png') center center/cover no-repeat",
                                    "Продайте!",
                                    "#222 url('img/Dogovor.jpg') center center/cover no-repeat"
                                ).buy();
                            } else {
                                new GetClickOfUser(
                                    "body", 
                                    "#222 url('img/Chort.jpg') center center/cover no-repeat",
                                    "У вас есть душа???"
                                ).render();
                
                                choice = document.querySelectorAll('[data-choice]');
                
                                choice.forEach(n => {
                                    n.addEventListener('click', (e) => {
                                        document.querySelector('.question').remove();
                                        let target = e.target;
                                        let check = +target.id;
                                        let test = 0
                                        if (check == 1) {
                                            console.log(choice)
                                            new GetClickOfUser(
                                                "body",
                                                "#222 url('img/Radiance.png') center center/cover no-repeat",
                                                "Продайте",
                                                "#222 url('img/ProdajaSoul.jpeg') center center/cover no-repeat"
                                            ).buy();
                                        } else {
                                            function soul () {
                                                new GetClickOfUser(
                                                    "body", 
                                                    "#222 url('img/Chort.jpg') center center/cover no-repeat",
                                                    "У вас есть душа???",
                                                    "#222 url('img/Radiance.png') center center/cover no-repeat"
                                                ).render();
                                        
                                                choice = document.querySelectorAll('[data-choice]');
                                        
                                                choice.forEach(n => {
                                                    n.addEventListener('click', (e) => {
                                                        document.querySelector('.question').remove();
                                                        target = e.target;
                                                        check = +target.id;
                                                        if (check == 1) {
                                                            new GetClickOfUser(
                                                                "body",
                                                                "#222 url('img/Radiance.png') center center/cover no-repeat",
                                                                "Продайте",
                                                                "#222 url('img/ProdajaSoul.jpeg') center center/cover no-repeat"
                                                            ).buy();
                                                        } else {
                                                            soul()
                                                        }
                                                    })
                                                });
                                            }

                                            soul()

                                        }   
                                    })
                
                                });
                            }
                            })
        
                        });
                    }
                    })

                });
            }
        })
    })
    
})





