import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import { observer, inject } from 'mobx-react';
import CurrenciesStore from '../../stores/currenciesStore';

type IConverterBlock = {
  classes: any;
  currenciesStore?: CurrenciesStore;
};

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(
  observer(({ classes, currenciesStore }) => {
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);
    return (
      <Paper className={classes.paper}>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField label="Total" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Currency
            </InputLabel>
            <Select
              value={coins[0]}
              // onChange={handleChange}
            >
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField label="Total" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Currency
            </InputLabel>
            <Select
              value={coins[0]}
              // onChange={handleChange}
            >
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* <Typography variant="h5" component="h5">
              USD
            </Typography> */}
      </Paper>
    );
  })
);
export default ConverterBlock;
