export default class ServiceError extends Error {
    constructor(message, details = null, error = null) {
        super(message);
        this.name = 'ServiceError';
        this.details = details;
        this.error = error;
    }
}
