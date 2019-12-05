import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  text = '';
  constructor() {  }

  ngOnInit() {
    let bg = document.getElementById('container');
    let count = 20;
    for (let i = 0; i < count; i++) {
      let glitchBox = document.createElement('div');
      glitchBox.className = 'box';
      bg.appendChild(glitchBox);
    }
    setInterval(function() {
      let glitch = document.getElementsByClassName('box');
      for (let i = 0; i < glitch.length; i++) {
        (glitch[i] as HTMLElement).style.left = Math.floor(Math.random()*100) + 'vw';
        (glitch[i] as HTMLElement).style.top = Math.floor(Math.random()*100) + 'vh';
        (glitch[i] as HTMLElement).style.width = Math.floor(Math.random()*400) + 'px';
        (glitch[i] as HTMLElement).style.height = Math.floor(Math.random()*50) + 'px';
        (glitch[i] as HTMLElement).style.position = 'absolute';
        (glitch[i] as HTMLElement).style.background = 'url("../../assets/Assassins-Creed-Logo.png")';
        (glitch[i] as HTMLElement).style.backgroundAttachment = 'fixed';
        (glitch[i] as HTMLElement).style.backgroundRepeat = 'no-repeat';
        (glitch[i] as HTMLElement).style.backgroundPosition = 'center ' + Math.floor(Math.random()*50) + 'px';
        (glitch[i] as HTMLElement).style.zIndex = '1';
      }
    }, 200)
  }
  
  show() {
    if(this.text == ''){
      this.text = 'Nothing is true, everything is permitted'
    } else if(this.text == 'Nothing is true, everything is permitted'){
      this.text = 'The wisdom of our Creed is revealed through these words'
    } else if(this.text == 'The wisdom of our Creed is revealed through these words') {
      this.text = 'Our three tenets are:'
    }else if(this.text == 'Our three tenets are:') {
      this.text = 'Stay your blade from the flesh of an innocent'
    }else if(this.text == 'Stay your blade from the flesh of an innocent') {
      this.text = 'Hide in plain sight'
    }else if(this.text == 'Hide in plain sight') {
      this.text = 'Never compromise the Brotherhood'
    }else if(this.text == 'Never compromise the Brotherhood') {
      this.text = '';
    }

    if(document.getElementById('typewriter')) {
      document.getElementById('typewriter').id = 'typewriter2'
    }else {
      document.getElementById('typewriter2').id = 'typewriter'
    }
  }
}
