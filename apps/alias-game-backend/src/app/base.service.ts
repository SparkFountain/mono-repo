import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  /**
   * Shuffles array in place.
   */
  shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
