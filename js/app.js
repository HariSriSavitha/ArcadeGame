// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  // Variables applied to each of our instances go here
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  //movement of bugs and comes back to initial position
  this.x += dt * this.speed;
  if (this.x >= 505) {
    this.x = 0;
  }

  //collision
  if (player.x < this.x + 70 && player.x + 60 > this.x &&
    player.y < this.y + 45 && player.y + 70 > this.y) {
    swal({
      title: "you lost",
      imageUrl: "images/cry.gif",
      confirmButtonText: "Try again"
    });
    player.x = 200;
    player.y = 430;
  }

  if (player.y < 30) {
    swal({
        title: "Congrats!!!",
        imageUrl: "images/congo.gif",
        confirmButtonText: "Thank you",
      },
      function() {
        location.reload();
      });
  }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// player class with an update(), render() and a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
}

//player object in a variable called player
var player = new Player(200, 430);

Player.prototype.update = function(dt) {}
Player.prototype.render = function() {
  //displays the image of the player
  ctx.drawImage(Resources.get(this.sprite = "images/char-princess-girl.png"), this.x, this.y);
};

//this function helps the player to move
player.handleInput = function(input) {
  if (input == "left") {
    if (this.x > 0)
      this.x -= 100;
  }
  if (input == "right") {
    if (this.x < 400)
      this.x += 100;
  }
  if (input == "up") {
    if (this.y > 10)
      this.y -= 72;
  }
  if (input == "down") {
    if (this.y < 430)
      this.y += 72;
  }
}

//array to store the enemy bugs
var allEnemies = [];
//array containing the positions of the enemy bus on the canvas
var ePosition = [68, 136, 204];

ePosition.map(function(j) {
  var enemy = new Enemy((Math.random() * 400), j, Math.random() * 300);
  //enemy objects are placed in an array called allEnemies
  allEnemies.push(enemy);
})

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
