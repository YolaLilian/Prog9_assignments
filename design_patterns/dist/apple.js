"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apple = void 0;
var Apple = /** @class */ (function () {
    function Apple(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
    Apple.prototype.dialNumber = function () {
        var message = "This " + this.name + " is calling the number with the Apple phone app.";
        return message;
    };
    return Apple;
}());
exports.Apple = Apple;
//# sourceMappingURL=apple.js.map