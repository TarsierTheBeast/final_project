var namespace = "http://www.w3.org/2000/svg"

// All of your code for the game goes here! This is where you need to create your character, write your animation loop function, implement keyboard control, etc.

var character = makeImage("https://i0.wp.com/files.facepunch.com/garry/2015/July/23/2015-07-23_14-50-39.png?w=740",50,70,50,50)

var obstacleThree = makeImage("http://vignette2.wikia.nocookie.net/play-rust/images/b/b7/Bear_new.png/revision/latest?cb=20161109192908",40,130,80,80)

var obstacleOne = makeImage("http://vignette2.wikia.nocookie.net/play-rust/images/b/b7/Bear_new.png/revision/latest?cb=20161109192908",100,-30,100,100)

var obstacleFour = makeImage("http://vignette2.wikia.nocookie.net/play-rust/images/b/b7/Bear_new.png/revision/latest?cb=20161109192908",150,100,70,150)
var obstacleTwo = makeImage("http://vignette2.wikia.nocookie.net/play-rust/images/b/b7/Bear_new.png/revision/latest?cb=20161109192908",150,-50,250,100)

addEventListener("keydown",movecharacter)

function movecharacter(event){
  if(event.key==" "){
    move(character,0,-35)
  }
}

function animateObstacle(){
   var oneX=getX(obstacleOne)
  var twoX=getX(obstacleTwo)
  var threeX=getX(obstacleThree)
  var fourX=getX(obstacleFour)
  var y=getY(character)
  move(obstacleOne,-1,0)
  move(obstacleTwo,-1,0)
  move(obstacleThree,-1,0)
  move(obstacleFour,-1,0)

   if(oneX < -1 ){
    setX(obstacleOne,300)
  }if(twoX < -1 ){
    setX(obstacleTwo,300)
  }if(threeX < -1 ){
    setX(obstacleThree,300)
  }if(fourX < -1 ){
    setX(obstacleFour,300)
  }

  requestAnimationFrame(animateObstacle)


}
animateObstacle()

addEventListener("keydown",moveCharacter)
function moveCharacter(event){
  var x = getX(character)
  var y = getY(character)
  if(event.key == "a"&& x > 0)
    {
      move(character,-10,0)
    }else if(event.key == "d"&& x < 260)
      {
        move(character,10,0)
      }else if(event.key == "w"&& y > 0)
      {
        move(character,0,-10)
      }else if(event.key == "s"&& y < 130)
      {
        move(character,0,10)
      }
}




















// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  }
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  }
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(rect1, rect2) {
  var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width"))/2
  var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height"))/2
  return (centerX > getX(rect2) &&
          centerX < getX(rect2) + parseFloat(rect2.getAttribute("width")) &&
         centerY > getY(rect2) &&
         centerY < getY(rect2) + parseFloat(rect2.getAttribute("height")))
}
