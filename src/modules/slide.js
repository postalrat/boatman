import { sub, add, div } from './arithmetic';
import { gt } from './comparison';
import { selector } from './selector';

export function slide(sample, slideUp = 1, slideDown = 1) {
  return gen => {
    const [_y1] = gen.declare(0);

    //y (n) = y (n-1) + ((x (n) - y (n-1))/slide) 
    const slideAmount = selector(gt(sample, _y1), slideUp, slideDown)

    const filter = add(_y1, div(sub(sample, _y1), slideAmount));

    gen.every(1, `${_y1} = ${filter}`);

    return filter
  }
}
