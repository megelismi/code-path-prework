module.exports = {
    //param A : array of integers
    //return a array of integers
    nextGreater : function(A){
        var results = [];

        for (var i = 0; i < A.length; i++) {
            var element = A[i];

            for (var j = i; j < A.length; j++) {
                if (i !== j && A[j] > element) {
                    results.push(A[j]);

                    break;
                }

                if (j === A.length-1) {
                    results.push(-1);
                }
            }
        }

        return results;
    }
};
