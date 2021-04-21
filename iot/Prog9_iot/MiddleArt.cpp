
#include "MiddleArt.h"

MiddleArt::MiddleArt() {
  Serial.begin(9600);
}

void MiddleArt::draw() {
  Serial.println(",.-~*´¨¯¨`*·~-.¸-(_Middle!_)-,.-~*´¨¯¨`*·~-.¸");
}
