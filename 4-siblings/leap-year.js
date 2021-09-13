function leapYear(year) {

    if (year % 400 == 0) {
        return 'It is indeed a leap year';
    } else if (year % 4 == 0 && year % 100 != 0) {
        return 'It is indeed a leap year';
    } else {
        return 'This is not a leap year.';
    }
}

console.log(leapYear(2012));
console.log(leapYear(2100));
console.log(leapYear(2400));