
#include "Led.h"

class FastLed: public Led {

  public:
    FastLed(int pxlNum);
    void move();

    int pixelNumber;

};
