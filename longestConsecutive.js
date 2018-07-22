module.exports = {
    //param A : array of integers
    //return an integer
    longestConsecutive : function(A){
        var longest = 1;
        var tempLongest = 1;

        var sortedArray = A.sort(function(a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        });

        for (var i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i+1] !== sortedArray[i]) {
                if (sortedArray[i+1] - sortedArray[i] === 1) {
                    tempLongest++;
                }
                else {
                    if (tempLongest > longest) {
                        longest = tempLongest;
                    }

                    tempLongest = 1;
                }
            }
        }

        return longest;
    }
};