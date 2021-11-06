'use strict';

console.log('Redy to go');


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

function preload() {

    this.load.image('player', 'star.png');

};

function create() {
    var base = this.add.grid(400, 300, 800, 600, 32, 32, 0x00b9f2).setAltFillStyle(0x016fce).setOutlineStyle();

    let player = this.add.image(32+16,32+16, 'player');

    this.input.keyboard.on('keydown-D', function (event) {

        player.x += 32;

        // var tile = layer.getTileAtWorldXY(player.x + 32, player.y, true);

        // if (tile.index === 2)
        // {
        //     //  Blocked, we can't move
        // }
        // else
        // {
        //     player.x += 32;
        //     player.angle = 180;
        // }

    });
};


