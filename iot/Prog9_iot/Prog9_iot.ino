
#include <Adafruit_CircuitPlayground.h>
#include "Led.h"
#include "FastLed.h"
#include "SlowLed.h"
#include "Art.h"
#include "LeftArt.h"
#include "MiddleArt.h"
#include "RightArt.h"

int pixeln = 0;
bool flowActive;

SlowLed sL = SlowLed(0);
FastLed fL = FastLed(0);
LeftArt lA = LeftArt();
MiddleArt mA = MiddleArt();
RightArt rA = RightArt();

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  CircuitPlayground.begin();

  CircuitPlayground.setAccelRange(LIS3DH_RANGE_2_G);

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

  drawArt();
};

void switchSpeed() {

  if (CircuitPlayground.slideSwitch()) { 
    flowActive = true;
  }

  if (!CircuitPlayground.slideSwitch()) {
    flowActive = false;
  }
}

void drawArt() {

  if (CircuitPlayground.motionX() < -3.0) {
    rA.draw();
  }
  if (CircuitPlayground.motionX() >= -2.9 && CircuitPlayground.motionX() <= 2.9) {
    mA.draw();
  } 
  if (CircuitPlayground.motionX() > 3.0){
    lA.draw();
  }
}
