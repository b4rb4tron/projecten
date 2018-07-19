export class Point {
    constructor(public x?: number, public y?: number){
   }
   draw() {
       console.log(`x: ${this.x} y: ${this.y}`);
   }

}
