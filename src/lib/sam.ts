import SAM from 'sam-js';

type Options = {
	pitch?: number;
	speed?: number;
	mouth?: number;
	throat?: number;
};

export class Sam {
	private sam: SAM;

	constructor(options?: Options) {
		this.sam = new SAM(options);
	}

	adjust(options: Options) {
		this.sam = new SAM(options);
	}

	speak(text: string) {
		return this.sam.speak(text);
	}

	download(text: string) {
		return this.sam.download(text);
	}
}

export const createSAM = (options: Options) => new Sam(options);

export default Sam;
