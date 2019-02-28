import { mul } from './arithmetic';
import { t60 } from './t60';

export function decay(trigger, decayTime = 44100) {
  return gen => {
    const [_v] = gen.declare(1);
    gen.every(1, gen.exp`${_v} = ${mul(_v, t60(decayTime))}`);
    trigger.on(`${_v} = 1`);
    return _v;
  }
}
