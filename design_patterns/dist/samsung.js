"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Samsung = void 0;
var Samsung = /** @class */ (function () {
    function Samsung(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
    Samsung.prototype.dialNumber = function () {
        var message = "This " + this.name + " is calling the number with the Samsung phone app.";
        return message;
    };
    return Samsung;
}());
exports.Samsung = Samsung;
//# sourceMappingURL=samsung.js.map