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
        const json = await response.json();

        return json;
    } catch (error) {
        console.error(error);
        throw new Error('HTTP request failed.');
    }
}
