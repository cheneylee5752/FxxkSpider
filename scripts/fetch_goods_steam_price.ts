import { Goods } from "../src/core/model";
import { sleep } from "../src/core/helpers";
import { getSteamPrice } from "../src/core/services";

(async () => {
    let n = 1;
    const needCNum = await Goods.countDocuments({ itemNameId: { $exists: true }, steamMaxBuyPrice: null, steamMinSellPrice: null });
    console.log(needCNum);
    while (true) {
        console.log(`round ${n}`);
        const allgoods = await Goods.find({ itemNameId: { $exists: true }, steamMaxBuyPrice: null, steamMinSellPrice: null }).limit(200);
        if (n * 200 > needCNum) {
            console.log(`end!`);
            break;
        }
        for (const g of allgoods) {
            if (g) {
                try {
                    const { steamMaxBuyPrice, steamMinSellPrice } = await getSteamPrice(g.itemNameId);
                    console.log(`Fetch Success! max: ${steamMaxBuyPrice}, min: ${steamMinSellPrice}, time: ${new Date().toLocaleString()}`);
                    await (g as any).updateOne({ steamMaxBuyPrice, steamMinSellPrice });
                } catch (e) {
                    console.log(e);
                    continue;
                }
                await sleep(15000);
            }
        }
        n = n + 1;
    }
})();
