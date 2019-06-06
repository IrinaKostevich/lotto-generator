import ServiceError from './errors.js';

const GAME_GENERATE_URL = 'https://duckling-lotto-generator-cloud.appspot.com/api/game/generate';

export default async function generateRandomGame(config) {
    try {
        const response = await fetch(GAME_GENERATE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config)
        });
        const body = await response.json();

        if (!response.ok) {
            throw new ServiceError('Cannot generate game', body);
        }

        return body;
    } catch (error) {
        throw new ServiceError('Cannot generate game', { error: 'Unknown error.' }, error);
    }
}
