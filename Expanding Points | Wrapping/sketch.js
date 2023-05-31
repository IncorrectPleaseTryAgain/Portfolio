/*
* Author: 
Michael Steenkamp

* Date: 
31-05-2023

* Name: 
Expanding Points | Wrapping

* Description:
This program simulates a set of points expanding outwards and then wrapping when they cross an edge
*/

const NUM_POINTS = 10000;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(500, 500);

  this.points = [];
  initializePoints();

  function initializePoints(){
    for(let i = 0; i < NUM_POINTS; i++){
      this.points[i] = new Point();
    }
  }
}

function draw() {
  background(0);

  this.points.forEach(point => {
    point.render();
    point.update();
  });

}
