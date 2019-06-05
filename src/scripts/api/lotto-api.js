const LOTTOS_URL = 'https://duckling-lotto-generator-cloud.appspot.com/api/lottos';

export default async function getLottos() {
    try {
        const response = await fetch(LOTTOS_URL, { method: 'GET' });
        const json = await response.json();

        return json;
    } catch (error) {
        console.error(error);
        throw new Error('HTTP request failed.');
    }
}
