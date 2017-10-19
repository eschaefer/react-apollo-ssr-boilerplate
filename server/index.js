import { IS_DEV } from './config';

require(IS_DEV ? './dev' : './prod'); // eslint-disable-line
