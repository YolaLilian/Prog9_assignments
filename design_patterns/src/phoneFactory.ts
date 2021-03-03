import { Samsung } from './samsung';
import { Apple } from './apple';
import { Phone } from './interfaces/phone';
import { PhoneOptions } from './interfaces/phoneOptions';

export class PhoneFactory {

	public addPhone(phoneOptions: PhoneOptions) : Phone {

		switch (phoneOptions.type) {
			case "samsung":
				// phone = new Phone();
				// new Samsung("s20", 1000, "samsung");
				// const samsung = phone as Samsung;
				// samsung.name = "s20";
				// samsung.price = 1000;
				return new Samsung("s20", 1000, "samsung");;
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
				return new Apple("iphoneX", 1000, "apple");
			default: 
				throw new Error('Select a smartphone brand');
		}

	}

}