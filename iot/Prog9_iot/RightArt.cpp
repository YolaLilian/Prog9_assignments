
#include "RightArt.h"

RightArt::RightArt() {
  Serial.begin(9600);
}

void RightArt::draw() {
  Serial.println(",.-~*´¨¯¨`*·~-.¸-(_Right!_)-,.-~*´¨¯¨`*·~-.¸");
}
