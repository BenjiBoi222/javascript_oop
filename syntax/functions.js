const muvelet = (a, b, callback) => {const result = callback(a, b); return {result}};

const muveletLetrehoz = (sign) => {
    if(sign == "+") return (a, b) => {return a + b}
    if(sign == "-") return (a, b) => {return a - b}
    if(sign == "*") return (a, b) => {return a * b}
};

export {muvelet, muveletLetrehoz}