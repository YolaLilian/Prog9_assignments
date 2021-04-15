
#include "FastLed.h"
#include <Adafruit_CircuitPlayground.h>

FastLed::FastLed(int pxlNum) {
  pixelNumber = pxlNum;
};

void FastLed::move() {
  CircuitPlayground.setPixelColor(pixelNumber++, CircuitPlayground.colorWheel(25 * pixelNumber));
  delay(500);
  CircuitPlayground.clearPixels();
  if (pixelNumber == 10) {
    pixelNumber = 0;
  }
}  
