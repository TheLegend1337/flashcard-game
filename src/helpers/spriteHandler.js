export default (options) => {
  //options wird als objekt übergeben
  let frameIndex = 0; // The current frame to be displayed
  let tickCount = 0; // Anzahl der Updates seit der letzte Frame angezeigt wurde
  let ticksPerFrame = options.ticksPerFrame || 0; // Anzahl der Updates des gleichen Frames bis der nächste angezeigt werden soll, steuert Animationsgeschwindigkeit(wird der gleiche Frame mehrmals angezeigt läuft die Animation insgesamt langsamer)
  let numberOfFrames = options.numberOfFrames || 1; //Anzahl der Frames im Sprite, Prüft ob links falsch ist wenn false dann rechts hinter dem Oder nehmen.

  const { context, width, height, image, loop } = options; //Destrukturierung Syntax
  //context ist bei Canvas immer notwendig zu übergeben das ist der CanvasRenderingContext2D interface
  //width, height: weite und höhe des zu rendernden Sprites,
  //image: Bildquelle des Sprites
  //loop: ob wir die Animation nur einmal ausführen oder loopen.

  return {
    render: function () {
      context.clearRect(0, 0, width, height); //weil wir diese Funktion immer auf den gesamten Canvas nutzen und für jede Sprite Animation einen eigenen Canvas nutzen

      context.drawImage(
        //zeichnet Teil unseres Sprite Images
        image, //welches Bild?
        frameIndex * width, //Position im Sprite multipliziert mit Breite des Sprites führt zum Lauf von links nach rechts
        0, //oberste Position im Sprite
        width, //weite im Sprite
        height, //Höhe im Sprite
        0, //Ziel, wo wir zeichnen auf x-Achse
        0, //Ziel, wo wir zeichnen auf y-Achse (links oben weil unser Bild im Canvas von links oben gezeichnet wird)
        width, //genau so Breit und Hoch wie in der Bildquelle aus der wir den Spriteausschnitt rausnehmen.
        height //...
      );
    },
    update: function () {
      //Todo: schauen ob update umbenannt werden soll da es nach einer schleife klingt aber es sich nicht um eine Handelt.
      //ich denke es sollte "updateFrame heißen und nicht update..."
      let animationCompleted = false;
      tickCount += 1;

      if (tickCount <= ticksPerFrame) return; //returnen immer wenn der gleiche Frame noch nicht oft genug angezeigt haben(siehe oben ticksPerFrame steuert Animationsgeschwindigkeit)

      tickCount = 0; //wenn wir den Frame oft genug angezeigt haben setzen wir tickCount wieder auf 0 und erhöhen frameInfex um den nächsten Frame aus dem Sprite zu rendern.

      // If the current frame index is in range
      if (frameIndex < numberOfFrames - 1) {
        //prüfen ob wir über unseren Sprite hinaus laufen würden
        // Go to the next frame
        frameIndex += 1;
      } else if (loop) {
        //wenn wir außerhalb des Sprites laufen sollten greift nicht die erste Bedingung und wir setzen die Position wieder im Sprite an den Anfang
        frameIndex = 0;
      } else {
        animationCompleted = true; //wenn wir nicht außerhalb des Sprites sind und nicht wiederholen, dann sind wir fertig.
      }
      return animationCompleted;
    },
  };
};
