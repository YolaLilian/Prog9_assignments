
#include "Led.h"

class SlowLed: public Led {

  public:
    SlowLed(int pxlNum);
    void move();

    int pixelNumber;

    
};
