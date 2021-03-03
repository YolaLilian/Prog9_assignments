import { PhoneFactory } from './phoneFactory';

// phoneFactory: PhoneFactory;
// s20: Samsung;

class Shop {

	phoneFactory = new PhoneFactory();
	
	s20 = this.phoneFactory.addPhone( { type: "samsung" } );
	
	constructor() {

		this.s20.dialNumber();

	}

}

window.addEventListener("load", () => new Shop());