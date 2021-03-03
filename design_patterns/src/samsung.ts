import { Phone } from "./interfaces/phone";

export class Samsung implements Phone {

	public name: 	string;
	public price: 	number;
	public type:	string;

	constructor(name: string, price: number, type: string) {

		this.name = 	name;
		this.price =	price;
		this.type =		type;

	}

	dialNumber() {

		const message = `This ${this.name} is calling the number with the Samsung phone app.`;
		return message;

	}

}