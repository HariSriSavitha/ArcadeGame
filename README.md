# ArcadeGame
# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [How to download starter Project](#how-to-download-starter-project)
-   [Steps I performed to execute the game](#steps-i-performed-to-execute-the-game)
-   [How to play](#how-to-play)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

\##How to download starter Project

We can clone the starter code from Git-Hub. Download the starter code from the following link  <https://github.com/udacity/frontend-nanodegree-arcade-game>

## Steps I performed to execute the game

1.Initially after downloading the starter code there were some errors and were rectified in order to display a canvas.

2.In the `render()` function with the help of `drawImage()` method image of the player was shown by fixing the initial position of the player.

3.In order to move the player , functionality for `handleInput()` function was provided.

4.`enemy` objects with their positions on canvas are placed in an array called `allEnemies`.

5.The in built function, `random()` is used to generate random numbers so that the bugs can move randomly with different speeds.

6.When the player successfully  reaches the other end without colliding any of the bugs a congratulations pop up is displayed.

## How to play

1.The player should use the respective arrow keys to move left , right , top and bottom.

2.Player should move using arrow keys without colliding with any of the moving bugs.

3.If the player collides they reach to the original position.

4.After reaching the other end of the canvas without clashing any of the bug a
the game will be completed successfully.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
