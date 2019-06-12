export default class LottoStorage {
    constructor() {
        this.lottosMap = new Map();
    }

    saveLottos(lottos) {
        for (const lotto of lottos) {
            this.lottosMap.set(lotto.id, lotto);
        }
    }

    getLotto(lottoId) {
        return this.lottosMap.get(lottoId);
    }
}
