let a;
let b;
let otvet = '';
let player = {
    name: '',
    year: '',
    hp: 10,
    speed: {
        inSpeed: 10,
        kfSpeed: 1
    },
    inventory: {}
}

a = 'start'
while (1) {
    b = prompt (`${otvet}`, '')
    switch (a) {
        case 'start':
            a = 'start0';
            otvet = `Добро пожаловать в эту мини-игру ${player.name}!!!`;
            break;
        case 'start0':
            a = 'start1';
            otvet = 'Это текстовый рогалик написаный на JS.';
            break;
        case 'start1':
            a = 'start1-';
            otvet = 'Пожалуйста напишите как мне вас называть.'
            break;
        case 'start1-':
            player.name = b;
            a = 'start'
            break;
    }
}




