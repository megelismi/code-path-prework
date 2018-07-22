module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    sort: function(array) {
        return array.sort(function(a, b) {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        })
    },
    kthsmallest : function(A, B){
        return this.sort(A)[B-1];
    }
};
