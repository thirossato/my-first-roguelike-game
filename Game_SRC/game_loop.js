var FONT = 32;
var COLS = 15;
var ROWS = 10;
var ACTORS = 10;

var config = {
    type: Phaser.AUTO,
    width: COLS * FONT * 0.6,
    height: ROWS * FONT,
    scene: { create }
}

var map;
var asciidisplay;

// initialize phaser, passing config as param, call create() once done
var game = new Phaser.Game(config);

function create() {
    // init keyboard commands
    this.input.keyboard.on('keydown-LEFT', () => { console.log('apertou pra esquerda') });
    this.input.keyboard.on('keydown-RIGHT', () => { console.log('apertou pra direita') });
    this.input.keyboard.on('keydown-UP', () => { console.log('apertou pra cima') });
    this.input.keyboard.on('keydown-DOWN', () => { console.log('apertou pra baixo') });

    //init the map
    initMap();

    //init the screen
    asciidisplay = [];
    for (var y = 0; y < ROWS; y++) {
        var newRow = [];
        asciidisplay.push(newRow);
        for (let x = 0; x < COLS; x++) {
            newRow.push(initCell(this,'', x, y))
        }
    }
    drawMap();
}

function initCell(gameObj,chr, x, y) {
    // add a single cell in a given position to the ascii display
    return gameObj.add.text(FONT * 0.6 * x, FONT * y, chr, { fontFamily: 'Georgia, Times, serif', color:'#fff' });
}

function initMap() {
    map = [];
    for (var y = 0; y < ROWS; y++) {
        var newRow = [];
        for (var x = 0; x < COLS; x++) {
            if (Math.random() > 0.8) {
                newRow.push('#');
            } else {
                newRow.push('.')
            }
        }
        map.push(newRow);
    }
}

function drawMap() {
    for (var y = 0; y < ROWS; y++) {
        for (var x = 0; x < COLS; x++) {
            asciidisplay[y][x].text = map[y][x];
        }
    }
}
