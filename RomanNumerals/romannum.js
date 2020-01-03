const VALUE = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const ROMAN = ["M", "CM", "D", "CD", "C","XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convertToRoman(num) {
    var result = ""
    
    num = parseInt(num);

    for (var i = 0; i < VALUE.length; i++) {
        var cost = Math.floor(num / VALUE[i]);

        for (var j = 0; j < cost; j++) {
            result += ROMAN[i];
        }

        num -= VALUE[i] * cost;

    }
    return result;
}

console.log(convertToRoman(3999));
