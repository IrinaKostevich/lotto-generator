export default class ServiceError extends Error {
    constructor(message, details, error = null) {
        super(message);
        this.name = 'ServiceError';
        this.details = details;
        this.error = error;
    }
}
