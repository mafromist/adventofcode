/* --- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. 
The gold coins used there have a little picture of a starfish; the locals just call them stars. 

/// coins = stars

None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

/// roomprice = 50 stars coins by 25/12

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

//each puzzle = 1 star coin;
//check if you passed the 1st puzzle to solve 2nd puzzle

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// find numbers == sum is 2020 and then multiply them

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together? */

// get num 1 + num 2 ( )

/*let expenseArr = expenses2020.split("\n")
console.log(expenseArr)

with this you can make an array a long list of number*/ 


const arr = [2010, 1856, 1905, 1786, 1557,1830,1971,1909,1995,1500,1806,1846,2003,1839,1943,1977,1537,689,1861,1886,1815,1763,1834,1881,1952,1853,1775,1835,1874,1948,1978,347,1672,885,1709,1826,1911,1644,1064,1561,1966,1352,1347,1928,1756,615,1513,1932,1968,1762,1842,1475, 1921, 1716, 1533, 1975, 1924, 1850, 1456, 1783, 1587, 1913, 1908, 1502, 1993, 1635, 1691, 1706, 1871, 1857, 1915, 1604, 1618, 1902, 1860, 1648, 1933, 1999, 1960, 1389, 1858, 1793, 1609, 1484, 1735, 1535, 1891, 1879, 1517, 1766, 1926, 1668, 1495, 1585, 1831, 1308, 1767, 1479, 1638, 1600, 710, 1685, 1818, 1859, 1822, 1844, 1550, 1872, 1719, 1863, 1987, 199, 1840, 1817, 1752, 1612, 1983, 1838, 1504, 1997, 716, 1862, 1931, 1356, 1645, 1962, 1574, 1914, 1869, 1919, 1487, 1961, 1728, 1867,1177,1757,1316,1875,1991,1646,700, 1972,2004,1577,118,1954,1483,1516,2007,1506,1588,1698,1725,2006,179,1849,1894,1695,1399, 1726, 1658, 1920, 1825, 1837, 1878, 1591, 1611, 1409, 1553, 1705, 1845, 1718, 1732, 1639, 1885, 1929, 1887, 1787, 1541, 1946, 1391, 1884, 1938, 1496, 1720, 1669, 1965, 1967, 1890, 1743, 1889, 1970, 1866, 1912, 1785, 1998, 1708, 1810, 1939, 2005]


for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k < arr.length; k++) {
        if(parseInt(arr[i]) + parseInt(arr[k]) == 2020) {
            console.log(`it's the numbers ${arr[i]} and ${arr[k]}`)
            let answer = arr[i] * arr[k];
            console.log(`the answer is ${answer}`)
        }
    }

}




/* The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020? */

console.log(`--------------------`)
console.log(`--------------------`)
console.log(`-------PART 2--------`)
console.log(`--------------------`)
console.log(`--------------------`)

for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k < arr.length; k++) {
        for(let m = 0; m < arr.length; m++) {
            if(parseInt(arr[i]) + parseInt(arr[k]) + parseInt(arr[m]) == 2020) {
                console.log(`it's the numbers ${arr[i]}, ${arr[k]}, ${arr[m]}`);
                let answer = arr[i] * arr[k] * arr[m];
                console.log(`the answer is ${answer}`);
            }
        }
    }

}