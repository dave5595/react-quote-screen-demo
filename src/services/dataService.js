import { getRandomFloat } from "../utils/random";
const iterations = 100;

export class DataService{
  constructor(){
    this.subscribedCounters = ['PBBBANK', 'MAYBANK', 'CIMBT', 'DJI']; //hardcoded simulation

    this.initPeriodicUpdates();
  }

  getInitialSubscribedStocks = () => {
    return INITIAL_SUBSCRIBED_STOCKS;
  };

  applyDeltas = (counter) => {
    const newBuyWithDelta = Math.round(counter.buy + getRandomFloat(-0.1, 0.1) * 10)/10;
    const newSellWithDelta = Math.round(counter.sell + getRandomFloat(-0.1, 0.1) * 10)/10;
    postMessage({ ...counter, buy: newBuyWithDelta, sell: newSellWithDelta})
  };

  updateEvery5Secs = (i, j) => {
    setTimeout(()=> this.applyDeltas(INITIAL_SUBSCRIBED_STOCKS[i]), 3000 * j);
  };

  initPeriodicUpdates(){
    for (let j = 0; j < iterations; j++) {
      for (let i = 0; i < INITIAL_SUBSCRIBED_STOCKS.length; i++) {
        this.updateEvery5Secs(i, j);
      }
    }
  }

  getSubscribedCounters(){
    return this.subscribedCounters;
  }

}

const INITIAL_SUBSCRIBED_STOCKS = [
  { symbol: 'PBBBANK', buy: 2, sell: 4.5 },
  { symbol: 'MAYBANK', buy: 3, sell: 5.1},
  { symbol: 'CIMBT', buy: 2.4, sell: 3.8 },
  { symbol: 'DJI', buy: 2.8, sell: 6.5 },
];