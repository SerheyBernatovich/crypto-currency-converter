import { observable, computed, action } from 'mobx';
import axios from 'axios';
import { TCoin } from '../types';

type TCoinDiff = {
  name: string;
  color: string;
};

class CurrenciesStore {
  @observable private items: TCoin[] = [];
  @observable private diffItems: TCoinDiff[] = [];

  @computed
  get getItems() {
    return this.items;
  }

  @action
  setItems = (items: TCoin[]): void => {
    this.items = items;
    this.diffItems = this.diffCurrencies(this.items, items).map((newObj) => {
      const oldObj = this.items.find((itemObj) => itemObj.name === newObj.name);
      return {
        name: obj.name,
        color: oldObj,
      };
    });
  };

  @action
  fetchCoins = () => {
    axios
      .get(
        'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
      )
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(3),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });

        this.items = coins;
      });
    return [];
  };
  diffCurrencies = (arr1: TCoin[], arr2: TCoin[]) => {
    return arr1.filter((obj, index) => {
      if (obj.price !== arr2[index].price) {
        return true;
      }
      return false;
    });
  };
}
export default CurrenciesStore;
