//https://leetcode.com/problems/integer-to-english-words/description/


var numberToWords = function (num) {
    let l = num.length;
    const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    const onesNumRep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    const teenNumRep = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    const tys = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    const tysNumRep = [20, 30, 40, 50, 60, 70, 80, 90]
    const worded = []

    if (num < 10) {

        return ones[num]

    } else if (num < 20) {
        let index = teenNumRep.indexOf(num)
        return teens[index]
    }

    let arrNum = num.toString().split('').map(Number);

    let thousands = -1;
    const thousandArr = ['Thousand', 'Million', 'Billion']

    while (arrNum.length > 0) {
        let x = arrNum.pop()
        let y = arrNum.pop()
        let z = arrNum.pop()
        if (y === 1) {
            let temp = teenNumRep.indexOf(10 + x)
            worded.unshift(teens[temp])
        } else if (y > 1) {
            if (x > 0) {

                let temp1 = onesNumRep.indexOf(x);
                worded.unshift(ones[temp1])
            }
            let temp2 = tysNumRep.indexOf(y * 10);

            worded.unshift(tys[temp2])
        } else {
            if (x > 0) {

                let temp1 = onesNumRep.indexOf(x);
                worded.unshift(ones[temp1])
            }
        }
        if (z > 0) {
            worded.unshift('Hundred')
            let temp1 = onesNumRep.indexOf(z);
            worded.unshift(ones[temp1])
        }
        if (arrNum.length > 0) {
            thousands++;
            if (arrNum[arrNum.length - 1] > 0 || arrNum[arrNum.length - 2] > 0 || arrNum[arrNum.length - 3] > 0) {
                worded.unshift(thousandArr[thousands])
            }
        }

    }
    return worded.join(' ')
};