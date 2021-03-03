"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneFactory = void 0;
var samsung_1 = require("./samsung");
var apple_1 = require("./apple");
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory() {
    }
    PhoneFactory.prototype.addPhone = function (phoneOptions) {
        switch (phoneOptions.type) {
            case "samsung":
                // phone = new Phone();
                // new Samsung("s20", 1000, "samsung");
                // const samsung = phone as Samsung;
                // samsung.name = "s20";
                // samsung.price = 1000;
                return new samsung_1.Samsung("s20", 1000, "samsung");
                ;
            case "apple":
                // phone = new Phone();
                // const apple = phone as Apple;
                // apple.name = "iphone X";
                // apple.price = 1200;
                // return apple;	
                // phone = new Phone();
                // phone = ;
                // const samsung = phone as Samsung;
                // samsung.name = "s20";
                // samsung.price = 1000;
                return new apple_1.Apple("iphoneX", 1000, "apple");
            default:
                throw new Error('Select a smartphone brand');
        }
    };
    return PhoneFactory;
}());
exports.PhoneFactory = PhoneFactory;
//# sourceMappingURL=phoneFactory.js.map