function factorialize(num) {
    let result = 1;
    for (let i = 0; i < num; i++) {
        result *= (num - i);
    }
    return result;
}

factorialize(5);
