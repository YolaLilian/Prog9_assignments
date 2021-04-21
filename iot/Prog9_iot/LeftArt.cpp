
#include "LeftArt.h"

LeftArt::LeftArt() {
  Serial.begin(9600);
}

void LeftArt::draw() {
  Serial.println(",.-~*´¨¯¨`*·~-.¸-(_Left!_)-,.-~*´¨¯¨`*·~-.¸");
}
