
#include <Adafruit_CircuitPlayground.h>
#include "Led.h"
#include "FastLed.h"
#include "SlowLed.h"

int pixeln = 0;
bool flowActive;

SlowLed sL = SlowLed(0);
FastLed fL = FastLed(0);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  CircuitPlayground.begin();

  Serial.println("Circuit Playground test!");

  flowActive = true;

  attachInterrupt(
    digitalPinToInterrupt(7),
    switchSpeed,
    CHANGE
  );
};

void loop() {
  // put your main code here, to run repeatedly:
  
  if (flowActive) {
    sL.move();
  } else {
    fL.move();
  }
};

void switchSpeed() {

  if (CircuitPlayground.slideSwitch()) { 
    flowActive = true;
  }

  if (!CircuitPlayground.slideSwitch()) {
    flowActive = false;
  }
}
