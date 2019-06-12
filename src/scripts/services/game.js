import ServiceError from './errors.js';

const GAME_GENERATE_URL = 'https://duckling-lotto-generator-cloud.appspot.com/api/game/generate';

export default async function generateRandomGame(config) {
    let response = null;
    let body = null;

    try {
        response = await fetch(GAME_GENERATE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config)
        });

        body = await response.json();
    } catch (error) {
        throw new ServiceError('Cannot generate game', null, error);
    }

    if (!response.ok) {
        throw new ServiceError('Cannot generate game', body);
    }

    return body;
}
