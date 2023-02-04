import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import { observer, inject } from 'mobx-react';
import CurrenciesStore from '../../stores/currenciesStore';
import ConverterStore from '../../stores/converterStore';
import React from 'react';

type IConverterBlock = {
  classes: any;
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
};

type TReducerState = {
  value1: string;
  value2: string;
};

type TSetValue1Action = {
  type: string;
  payload: string;
};
type TAction = TSetValue1Action;

function reducer(state: TReducerState, action: TAction): TReducerState {
  switch (action.type) {
    case 'SET_VALUE':
      break;

    default:
      break;
  }
  return state;
}

const ConverterBlock: React.FC<IConverterBlock> = inject(
  'currenciesStore',
  'converterStore'
)(
  observer(({ classes, currenciesStore, converterStore }) => {
    const [state, dispatch] = React.useReducer(reducer, {
      value1: '',
      value2: '',
    });
    const [selectedOutCoin, setSelectedOutCoin] = React.useState('USD');
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);
    const onUpdateField = (name: string, value: string) => {};
    // console.log(converterStore?.getSelectedCoin.name);
    return (
      <Paper className={classes.paper}>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField value={state.value1} onKeyUp={} label="Total" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Currency
            </InputLabel>
            <Select
              value={converterStore?.getSelectedCoin.name || ''}
              // onChange={handleChange}
            >
              {coins.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField value={state.value2} label="Total" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Currency
            </InputLabel>
            <Select
              onChange={(e) => setSelectedOutCoin(e.target.value as string)}
              value={selectedOutCoin}
            >
              <MenuItem value="USD">USD</MenuItem>
              {coins.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Paper>
    );
  })
);
export default ConverterBlock;
