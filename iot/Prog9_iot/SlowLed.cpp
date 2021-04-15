
#include "SlowLed.h"
#include <Adafruit_CircuitPlayground.h>

SlowLed::SlowLed(int pxlNum) {
  pixelNumber = pxlNum;
};

void SlowLed::move() {
  CircuitPlayground.setPixelColor(pixelNumber++, CircuitPlayground.colorWheel(25 * pixelNumber));
  delay(2500);
  CircuitPlayground.clearPixels();
  if (pixelNumber == 10) {
    pixelNumber = 0;
  }
}  
    
