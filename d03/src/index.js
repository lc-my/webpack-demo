//import _ from 'loadsh'
//import './style.css'
//import printMe from './print'

import { cube } from './math'


if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!');
}

function component(){
    /*var element = document.createElement("div");

    element.innerHTML = _.join(['hello','webpack'],'');
    element.classList.add('hello');

    /!*var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);*!/


    var button = document.createElement('button');
    button.innerHTML= 'click on me';
    button.onclick = printMe;
    element.appendChild(button);*/

    var element = document.createElement('pre');
    element.innerHTML = ['hello','5 cube:'+cube(5)].join('\n\n');

    return element;
}

document.body.appendChild(component());
/*
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js',function () {
        console.log('Accepting the updated printMe module!');
        /!*printMe();*!/
        document.body.removeChild(element);
        let element = component();
        document.body.appendChild(element);
    });

}*/
