// @flow
import { createMuiTheme } from '@material-ui/core';

import type
{
  Theme,
} from '@material-ui/core';

const theme: Theme = createMuiTheme({
  palette: {
    primary: '#ffa300',
    secondary: '#ff8500',
    error: '#A21C2B',
  },
});


export default theme;
