import ServiceError from './errors.js';

const LOTTOS_URL = 'https://duckling-lotto-generator-cloud.appspot.com/api/lottos';

export default async function getLottos() {
    try {
        const response = await fetch(LOTTOS_URL, { method: 'GET' });
        const body = await response.json();

        if (!response.ok) {
            throw new ServiceError('Cannot get lottos', body);
        }

        return body;
    } catch (error) {
        throw new ServiceError('Cannot get lottos', { error: 'Unknown error.' }, error);
    }
}
