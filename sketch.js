var bullet;
var wall;

var speed, weight, thickness;

function setup() {
  createCanvas(windowWidth, windowHeight);

  speed = Math.round(random(223, 321));
  weight = Math.round(random(32, 52));
  thickness = Math.round(random(22, 83))

  wall = createSprite(width/2 + 600, 350, thickness, height/2);
  wall.shapeColor = "grey";

  bullet = createSprite(150, 350, 30, 8);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
}

function draw() {
  background("black");  

  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness;

    if(damage > 10) {
      wall.shapeColor = "red";
      
      stroke("red");
      fill("red");
      textSize(40);
      text("Rejected", width/2, height/2);
    } 

    if(damage < 10) {
      wall.shapeColor = "green";

      stroke("green");
      fill("green");
      textSize(40);
      text("Good", width/2, height/2);
    }

  }
  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  } else {
    return false;
  }
}