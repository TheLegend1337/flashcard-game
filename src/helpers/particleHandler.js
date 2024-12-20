export default class SparkParticle {
  constructor(
    canvasContext,
    canvasWidth,
    canvasHeight,
    originX,
    originY,
    originShiftX,
    originShiftY,
    maxSize,
    minSize,
    color = "orange",
    alpha = 1,
    decay = 0.01,
  ) {
    this.canvasContext = canvasContext;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.originX = originX;
    this.originY = originY;
    this.directionX = Math.random() < 0.5 ? -1 : 1;
    this.directionY = Math.random() < 0.5 ? -1 : 1;
    this.originShiftX = this.directionX * (Math.random() * 35 + originShiftX);
    this.originShiftY = this.directionY * (Math.random() * 35 + originShiftY);
    this.velocityX = (Math.random() - 0.5) * 1;
    this.velocityY = (Math.random() - 0.5) * 1;
    this.radius = Math.random() * (maxSize - minSize) + minSize;
    this.color = color;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.globalAlpha = alpha;
    this.decay = decay;
  }
  update() {
    this.originX += this.velocityX; //Movement on X
    this.originY += this.velocityY; //Movement on Y
    this.globalAlpha = Math.max(0, this.globalAlpha - this.decay); //Gradually reduce Opacity
  }

  drawSpark() {
    // this.canvasContext.save();
    this.canvasContext.globalAlpha = this.globalAlpha;
    //Position Particle

    //Styling for Spark
    this.canvasContext.shadowColor = "orange";
    this.canvasContext.shadowBlur = 10;
    this.canvasContext.beginPath();
    this.canvasContext.arc(
      this.originX + this.originShiftX,
      this.originY + this.originShiftY,
      this.radius,
      this.startAngle,
      this.endAngle,
    );
    this.canvasContext.fillStyle = this.color;
    this.canvasContext.fill();
    // this.canvasContext.restore();
  }
  static emitParticles(
    canvasContext,
    canvasWidth,
    canvasHeight,
    originX,
    originY,
    originShiftX,
    originShiftY,
    maxSize,
    minSize,
  ) {
    const particles = [];

    const animateParticles = () => {
      const isSpawnParticle = Math.random() <= 0.1;
      if (isSpawnParticle) {
        const particle = new SparkParticle(
          canvasContext,
          canvasWidth,
          canvasHeight,
          originX,
          originY,
          originShiftX,
          originShiftY,
          maxSize,
          minSize,
        );
        particles.push(particle);
      }

      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].globalAlpha <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }
        particles[i].update();
        particles[i].drawSpark();
      }

      requestAnimationFrame(animateParticles);
    };
    requestAnimationFrame(animateParticles);
  }
}
