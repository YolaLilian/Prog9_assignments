
#include <Adafruit_CircuitPlayground.h>
#include "Led.h"
#include "FastLed.h"
#include "SlowLed.h"

int pixeln = 0;
//int buttonA = 19;
//int buttonB = 5;
//bool leftButtonPressed;
//bool rightButtonPressed;
bool flowActive;

SlowLed sL = SlowLed(0);
FastLed fL = FastLed(0);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  CircuitPlayground.begin();

//  pinMode(buttonA, INPUT);
//  pinMode(buttonB, INPUT);
  Serial.println("Circuit Playground test!");

  flowActive = true;

   attachInterrupt(
    digitalPinToInterrupt(4),
    buttonA,
    RISING
  );
  attachInterrupt(
    digitalPinToInterrupt(5),
    buttonB,
    RISING
  );
};

void loop() {
  // put your main code here, to run repeatedly:
//  leftButtonPressed = CircuitPlayground.leftButton();
//  rightButtonPressed = CircuitPlayground.rightButton();
  
//  if (leftButtonPressed) {
//    flowActive = true;
//  } else if (rightButtonPressed) {
//    flowActive = false;
//  }
  
  if (flowActive) {
    sL.move();
  } else {
    fL.move();
  }
};

void buttonA() {
  flowActive = true;
}

void buttonB() {
  flowActive = false;
};
