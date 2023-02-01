import React from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import { CryptoTable, ConverterBlock } from './components';

import { TCoin } from './types';
import useStyles from './styles';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function App() {
  const classes = useStyles();

  // const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  // React.useEffect(() => {
  //   axios
  //     .get(
  //       'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
  //     )
  //     .then(({ data }) => {
  //       const coins: TCoin[] = data.Data.map((coin: any) => {
  //         const obj: TCoin = {
  //           name: coin.CoinInfo.Name,
  //           fullName: coin.CoinInfo.FullName,
  //           imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
  //           price: coin.RAW.USD.PRICE.toFixed(3),
  //           volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
  //         };
  //         return obj;
  //       });
  //       console.log(coins);
  //       setAllCoins(coins);
  //     });
  // }, []);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CryptoTable
            classes={classes}
            // items={allCoins}
          />
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
