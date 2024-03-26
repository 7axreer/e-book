// const shopButton = document.getElementById('shop-button'),
//     shopClose = document.getElementById('shop-close'),
//     shopContent = document.getElementById('shop-content')

// if (shopButton) {
//     shopButton.addEventListener('click', () => {
//         shopContent.classList.add('show-shop')
//     })
// }

// if (shopClose) {
//     shopClose.addEventListener('click', () => {
//         shopContent.classList.remove('show-shop')
//     })
// }

const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

const
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content');

if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
};

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -25,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,

    },
    breakpoints: {
        1220: {
            spaceBetween: -32,
        }

    }

});

let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',


    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});

let swiperTestimonal = new Swiper('.testimonal__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',


    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})

sr.reveal(`.home__content, .featured, .new__content,
            .join__data, .testimonal__content, .footer__content`)
sr.reveal(`.home__content-images`, { delay: 600 })
sr.reveal(`.services__content-card`, { interval: 100 })
sr.reveal(`.featured__content-swiper`, { origin: 'bottom' })
sr.reveal(`.discount__data`, { origin: 'left' })
sr.reveal(`.discount__content-images`, { origin: 'right' })
sr.reveal(`.join__content-back`, { delay: 100 })

// if (ScrollTrigger.isTouch !== 1) {

//     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//     ScrollSmoother.create({
//         wrapper: '.wrapper',
//         content: '.content',
//         smooth: 1.5,
//         effects: true,
//     })
// }

const
    productBtns = document.querySelectorAll('.product__Book-Btn'), /* pasdegi korzina */
    basketBtn = document.querySelector('#shop-button'),  /* tepadagi korzina */
    basketModal = document.querySelector('#shop-content'), /* korzina bosilganda chiqadigon modal oyna */
    closeBtnModal = document.querySelector('#shop-close'), /* korzinani berkitish uchun knopka */
    basketChecklist = document.querySelector('.shop__checklist'), /* mahsulot qo'shiladigon qismi */
    basketIndicator = document.querySelector('.shop-indicator'),
    basketTotalPrice = document.querySelector('.shop-totalPrice'), /* umumiy narx chiqadigon qismi */
    basketPrint = document.querySelector('.shop__bottom'); /* chek chiqarish uchun */
    printChecklist = document.querySelector('.print__body'),
    printTotalSum = document.querySelector('.print__footer')

const product = {
    lord: {
        name: 'Lord',
        price: 19.99,
        amount: 0,
        img: './assets/img/book-1.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    simple: {
        name: 'Simple',
        price: 14.99,
        amount: 0,
        img: './assets/img/book-2.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    muted: {
        name: 'Muted',
        price: 10.09,
        amount: 0,
        img: './assets/img/book-3.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    dreams: {
        name: 'Dreams',
        price: 14.99,
        amount: 0,
        img: './assets/img/book-4.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    autumn: {
        name: 'Autumn',
        price: 12.99,
        amount: 0,
        img: './assets/img/book-5.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    work: {
        name: 'Work',
        price: 10.99,
        amount: 0,
        img: './assets/img/book-6.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    tree: {
        name: 'Tree',
        price: 19.99,
        amount: 0,
        img: './assets/img/book-7.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    modern: {
        name: 'Modern',
        price: 13.99,
        amount: 0,
        img: './assets/img/book-8.png',
        get totalSum() {
            return this.price * this.amount;
        }
    },

    // bird: {
    //     name: 'Bird',
    //     price: 11.99,
    //     amount: 0,
    //     img: './assets/img/book-9.png',
    //     get totalSum() {
    //         return this.price * this.amount;
    //     }
    // },

    // sword: {
    //     name: 'Sword',
    //     price: 11.99,
    //     amount: 0,
    //     img: './assets/img/book-10.png',
    //     get totalSum() {
    //         return this.price * this.amount;
    //     }
    // },
};

basketBtn.addEventListener('click', () => basketModal.classList.add('show-shop'));
closeBtnModal.addEventListener('click', () => basketModal.classList.remove('show-shop'));

productBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        plusOrMinus(this)
    })
});

function plusOrMinus(button) {
    var parent = button.closest('.featured__content-card');
    var parentId = parent.getAttribute('id')
    product[parentId].amount++;
    console.log(parentId);
    basket();
}

function basket() {

    const productArray = [];
    var totalCount = 0;
    basketIndicator.classList.remove('active');

    for (const key in product) {
        const po = product[key];
        const productCard = document.querySelector(`#${po.name.toLowerCase()}`);
        const productCardInd = productCard.querySelector('.featured__content-count');  
        
        if (po.amount) {
            productArray.push(po);
            basketIndicator.classList.add('active');
            totalCount += po.amount
            productCardInd.classList.add('active');
            productCardInd.innerHTML = po.amount;
        } else {
            productCardInd.classList.remove('active');
            productCardInd.innerHTML = 0;
        }
        basketIndicator.innerHTML = totalCount;
    }
    basketChecklist.innerHTML = '';

    for (let i = 0; i < productArray.length; i++) {
        basketChecklist.innerHTML += cardItemBook(productArray[i]);
    }
    basketTotalPrice.innerHTML = totalSumProducts();
}

function cardItemBook(dataBook) {
    
    const { name, totalSum: price, amount, img } = dataBook;
    return `
            <div class="shop__product">

                <div class="shop__product-info">
                <img src="${img}" alt="">
                    <div class="shop__product-sub">
                        <h3 class="shop__product-name">${name}</h3>
                        <p class="basket_checklist-price">$ <span>${price.toLocaleString()}</span></p>
                    </div>
                </div>

                <div class="shop__product-counter" id="${name.toLowerCase()}__card">
                    <button class="shop__product-symbol" data-symbol="-">-</button>
                    <output class="shop__product-output">${amount}</output>
                    <button class="shop__product-symbol" data-symbol="+">+</button>
                </div>

            </div>
            `
}

window.addEventListener('click', function (event) {
    const btn = event.target;
    
    if (btn.classList.contains('shop__product-symbol')) {
        const attr = btn.getAttribute('data-symbol')
        
        const parent = btn.closest('.shop__product-counter')
        console.log(attr);
        
        if (parent) {
            const idProduct = parent.getAttribute('id').split('__')[0];
            
            if (attr == '+') {
                product[idProduct].amount++
            } else if (attr == '-') {
                product[idProduct].amount--
            }
            
            basket()
        }
    }
})

function totalSumProducts() {
    let total = 0;
    
    for(const key in product) {
        total += product[key].totalSum
    }
    
    return "$ " + total.toLocaleString()
}

basketPrint.addEventListener('click', function () {
    printChecklist.innerHTML = ''
    
    for ( const key in product) {

        const {name, totalSum, amount} = product[key]

        if (amount) {
            
            printChecklist.innerHTML += `
                                        <div class="print__item">
                                            <p class="print__body-item_name">
                                                <span class="name">${name} Book</span>
                                                <span class="count">${amount}</span>
                                                <p class="print__body-item_sum">$ ${totalSum.toLocaleString()}</p>
                                            </p>
                                        </div>
            
                                        `

            
        }
    }
    printTotalSum.innerHTML = totalSumProducts()
    window.print()
})

