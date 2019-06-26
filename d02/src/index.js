import { cube } from './math'


function component(){

    var element = document.createElement('pre');
    element.innerHTML = ['hello','5 cube:'+cube(5)].join('\n\n');

    return element;
}

document.body.appendChild(component());
