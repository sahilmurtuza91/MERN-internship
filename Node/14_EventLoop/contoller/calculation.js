function Calculation(label) {
    console.time(label);

    let sum = 0;

    for (let i = 0; i < 50; i++) {
        sum += i % 10;
    }

    console.timeEnd(label);

    return sum;
}

module.exports = { Calculation, };