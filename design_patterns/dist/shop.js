"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phoneFactory_1 = require("./phoneFactory");
// phoneFactory: PhoneFactory;
// s20: Samsung;
var Shop = /** @class */ (function () {
    function Shop() {
        this.phoneFactory = new phoneFactory_1.PhoneFactory();
        this.s20 = this.phoneFactory.addPhone({ type: "samsung" });
        this.s20.dialNumber();
    }
    return Shop;
}());
window.addEventListener("load", function () { return new Shop(); });
//# sourceMappingURL=shop.js.map