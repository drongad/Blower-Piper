class Blower {
  constructor(x,y,w,h){
      var options={
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,w,h,options)
      this.w = w
      this.h = h

      World.add(world,this.body)
  }
  show(){
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      fill("white")
      rectMode(CENTER)
      rect(0,0,this.w,this.h)
      pop()
  }
}