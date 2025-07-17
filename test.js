for (let i = 0; i <= 100; i++) {
    let output = "";

    if (i % 2 === 0) {
        output += "Baz";
    }
    if (i % 5 === 0) {
        output += "inga!";
    }
    if (output.length > 0) {
        console.log(output);
    } else {
        console.log(i);
    }
}