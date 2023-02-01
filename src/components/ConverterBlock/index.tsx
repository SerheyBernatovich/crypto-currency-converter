import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import { observer, inject } from 'mobx-react';

type IConverterBlock = {
  classes: any;
};

const ConverterBlock: React.FC<IConverterBlock> = ({ classes }) => {
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
            id="demo-simple-select"
            value={10}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            id="demo-simple-select"
            value={10}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* <Typography variant="h5" component="h5">
              USD
            </Typography> */}
    </Paper>
  );
};
export default ConverterBlock;
