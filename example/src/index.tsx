import { Render, PIXI } from 'vicuna';

const app = new Render().app;

var bunny = PIXI.Sprite.fromImage('images/door.png');
bunny.anchor.set(0.5);
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;
bunny.width = 512 / 4;
bunny.height = 512 / 4;
console.log(app.screen.width, app.screen.height);
app.stage.addChild(bunny);
