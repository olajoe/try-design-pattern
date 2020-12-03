// class Folder {
//   render() {}
// }

// class Factory {
//   createFolder() {}
// }

// class WinFolder extends Folder {
//   render() {
//     return "<div class='windows'></div>";
//   }
// }

// class LinuxFolder extends Folder {
//   render() {
//     return "<div class='linux'></div>";
//   }
// }

// class WinFactory extends Factory {
//   createFolder() {
//     return new WinFolder()
//   }
// }

// class LinuxFactory extends Factory {
//   createFolder() {
//     return new LinuxFolder()
//   }
// }

// class AbstractFactory {
//   static factory(type) {
//     switch (type) {
//       case "windows":
//         return new WinFactory();
//       case "linux":
//         return new LinuxFactory();

//       default:
//         break;
//     }
//   }
// }

// let guiFactory = AbstractFactory.factory("windows")
// let folder = guiFactory.createFolder()
// console.log(folder.render());

// Example 2 ----

/**
  ----
  AbstractFactory
  ShapeFactory extends AbstractFactory
  FactoryProducer (generates factories)
  ----
  Shape
  Rectangle
  Triangle
  ----
  RoundedShapeFactory
  RoundedRectangle
  RoundedTriangle
*/

class Shape {
  draw() {
    null
  }
}

class Rectangle extends Shape {
  draw() {
    console.log('Rectangle!')
  }
}

class Triangle extends Shape {
  draw() {
    console.log('Triangle!')
  }
}

class RoundedRectangle extends Shape {
  draw() {
    return console.log('Rounded-Rectangle');
  }
}
class RoundedTriangle extends Shape {
  draw() {
    return console.log('Rounded-Triangle');
  }
}

class AbstractFactory {
  getShape(type){
    null
  }
}

class ShapeFactory extends AbstractFactory {
  getShape(type) {
    switch (type) {
      case 'rectangle':
        return new Rectangle()
      case 'triangle':
        return new Triangle()
      default:
        break
    }
  }
}

class RoundedShapeFactory extends AbstractFactory {
  getShape(type) {
    switch (type) {
      case 'rectangle':
        return new RoundedRectangle()
      case 'triangle':
        return new RoundedTriangle()
      default:
        break
    }
  }
}

class FactoryProducer {
  static getFactory(type) {
    switch (type) {
      case 'rounded':
        return new RoundedShapeFactory()
      default:
        return new ShapeFactory()
    }
  }
}


let shapeFactory = FactoryProducer.getFactory()
const rect = shapeFactory.getShape('rectangle')
const tri = shapeFactory.getShape('triangle')

rect.draw()
tri.draw()

shapeFactory = FactoryProducer.getFactory('rounded')
const rectRounded = shapeFactory.getShape('rectangle')
const triRounded = shapeFactory.getShape('triangle')

rectRounded.draw()
triRounded.draw()


