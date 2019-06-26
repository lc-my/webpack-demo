//import _ from 'loadsh'
//import './style.css'
//import printMe from './print'

import {cube} from './math'


function component() {
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
    element.innerHTML = ['hello', '5 cube:' + cube(5)].join('\n\n');

    return element;
}

document.body.appendChild(component());

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}