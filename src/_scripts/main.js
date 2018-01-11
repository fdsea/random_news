// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
//import Link from '../_modules/link/link';
import Header from '../_modules/header/header';

let HEADER_NAMESPACE = {
  canvas: document.querySelector('.page-header__canvas-bg'),
  parent: document.querySelector('.page-header'),
  parentSize: function () {
    return {
      x: this.parent.clientWidth,
      y: this.parent.clientHeight
    }
  },
  ctx: function(){
    return this.canvas.getContext('2d')
  }
};

$(() => {
  
  function particles(canv, par, e){
    canv.width = par.clientWidth;
    canv.height = par.clientHeight;
    let x = canv.width;
    let y = canv.height;
    let ctx = canv.getContext('2d');
    let particlesArray = [];
    let particlesAmount = 100;
    let i = 0;
    for(i; i < particlesAmount; i++){
      particlesArray.push( new Header(ctx, x, y) )
    }
    return particlesArray;
  }

  function draw(arr){
   HEADER_NAMESPACE.ctx().clearRect(0,0,HEADER_NAMESPACE.parentSize().x,HEADER_NAMESPACE.parentSize().y);
    for(let i = 0; i < arr.length; i++){
      arr[i].createParticle();
    }
  }

 let arr =  particles(HEADER_NAMESPACE.canvas, HEADER_NAMESPACE.parent);
  console.log(arr);
 function animate(){
   
  draw(arr);
  window.requestAnimationFrame(animate);
 }
 animate(arr);
 
  










});


