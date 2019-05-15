import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManticService {

  constructor() { }

  /** calculate number of permutations */
  permutation(n_set, r_elements) {
    return this.factorial(n_set) / this.factorial((n_set - r_elements));
  }

  /** calculate factorial */
  mem = [];
  factorial(num) {
    if (num == 0 || num ==1 ) {
      return 1;
    }
    if (this.mem[num] > 0) {
      return this.mem[num];
    } else {
      return this.mem[num] = this.factorial(num -1) * num;
    }
  }

}
