class Planet {
    constructor(name, size, distanceFromSun) {
      this.name = name;
      this.size = size; // Represented in Earth diameters
      this.distanceFromSun = distanceFromSun; // Represented in millions of kilometers
      this.rotationAngle = 0; // Represented in degrees
    }
  
    rotate(degrees) {
      this.rotationAngle = (this.rotationAngle + degrees) % 360;
      console.log(`${this.name} is rotating. Current rotation angle: ${this.rotationAngle} degrees.`);
    }
  
    orbit() {
      console.log(`${this.name} is orbiting the Sun at a distance of ${this.distanceFromSun} million kilometers.`);
    }
  }
  
  // Example usage
  const earth = new Planet('Earth', 1, 150);
  const mars = new Planet('Mars', 0.53, 230);
  
  earth.orbit();
  earth.rotate(45);
  
  mars.orbit();
  mars.rotate(30);
  