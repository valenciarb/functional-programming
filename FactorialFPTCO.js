function factorial(n, acc) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

factorial(100000000, 1);
