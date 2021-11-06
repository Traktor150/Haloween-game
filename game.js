'use strict';

console.log('Redy to go');



let preload = () => {

};

let create = () => {

    const x = 200;
    const y = 200;
    const width = 100;
    const height = 100;
    const cellwith = 10;
    const cellheight = 10;
    let grid = this.addEventListener.grid(x, y,width,height,cellwith, cellheight, 0xff0000);
};

let config = {
    type: Phaser.AUTO,
    with: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
}

let game = new Phaser.Game(config);