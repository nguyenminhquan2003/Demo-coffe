const model = {
    currentCoffe: null,
    coffes: [
        {
            name: 'Cà Phê Đen ',
            imgSrc: 'img/cafe-den.jpg',
        },

        {
            imgSrc: 'img/Ca-phe-sua-da.jpg',
            name: 'Cà Phê Sữa',
        },

        {
            name: 'Capuchino',
            imgSrc: 'img/capuchino.jpg',
        },

        {
            name: 'Latte',
            imgSrc: 'img/latte.jpg',
        },

        {
            name: 'Sinh Tố Dưa Hấu',
            imgSrc: 'img/sinh-to-dua-hau.jpg',
        },

        {
            name: 'Sinh Tố Dâu Tây',
            imgSrc: 'img/sinh-to-dau-tay.jpg',
        },

        {
            name: 'Hướng Dương',
            imgSrc: 'img/hat-huong-duong.jpg',
        },
    ],
};

const controller = {
    init() {
        model.currentCoffe = model.coffes[0];
        coffeListView.init();
        coffeView.init();
    },

    getCurrentCoffe(){
        return model.currentCoffe;
    },

    getCoffes(){
        return model.coffes;
    },

    setCurrentCoffe(coffe) {
        model.currentCoffe = coffe;
    },

    incrementCounter(){
        coffeView.render();
    },
};

const coffeView = {
    init() {
        this.coffeElem = document.getElementById('coffe');
        this.coffeNameElem = document.getElementById('coffe-name');
        this.coffeImageElem = document.getElementById('coffe-img');

        this.render();
    },
    render(){
        const currentCoffe = controller.getCurrentCoffe();
        this.coffeNameElem.textContent = currentCoffe.name;
        this.coffeImageElem.src = currentCoffe.imgSrc;
        this.coffeImageElem.style.cursor = 'pointer';
    },
};

const coffeListView = {
    init(){
        this.coffeListElem = document.getElementById('coffe-list');
        this.render();
    },

    render() {
        let coffe;
        let elem;
        let i;

        const coffes = controller.getCoffes();

        this.coffeListElem.innerHTML= '';

        for(let i = 0; i < coffes.length; i++){
            coffe = coffes[i];

            elem = document.createElement('li')
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = coffe.name;
            elem.addEventListener(
                'click',
                (function(coffeCopy) {
                    return function() {
                        controller.setCurrentCoffe(coffeCopy);
                        coffeView.render();
                    };
                })(coffe)
            );
            this.coffeListElem.appendChild(elem);
        }
    },
};

controller.init();