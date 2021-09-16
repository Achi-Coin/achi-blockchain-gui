import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.ACHI]: IS_MAINNET ? 'XACH' : 'TXACH',
};
