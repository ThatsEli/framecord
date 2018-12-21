export class LogManager {

	public static logLevel: number = 1;

	public static log(message: string, errorType: ErrorType) {
		if(this.logLevel >= errorType) {
			let prefix: string;
			switch (this.logLevel) {
				case ErrorType.info: prefix = '[I]'; break;
				case ErrorType.warning: prefix = '[W]'; break;
				case ErrorType.error: prefix = '[E]'; break;
				default: prefix = '[I]';
			}
			console.log(prefix + message);
		}
	}

}

export enum ErrorType {
	info = 1,
	warning = 2,
	error = 3
}