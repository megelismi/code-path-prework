module.exports = {
    //param A : integer
    //return a array of array of integers
    reflect: function(array) {
        var length = array.length;

        var firstSegment = array.slice(0, length-1);

        return array.concat(firstSegment.reverse());
    },
    prettyPrint : function(input){
        var level = 0;
        var length = (input*2)-1;
        var middle = Math.floor(length/2);
        var results = [];

        while (level < length) {
            var index = 0;
            var array = [];

            var changeBy = level <= middle ? level : (length-1) - level;
            var lowest   = input-changeBy;

            while (index <= middle) {
                if (input-index > lowest) {
                    array.push(input-index)
                }
                else {
                    array.push(lowest);
                }

                index++;
            }

            array = this.reflect(array);
            results.push(array);
            level++;
        }

        return results;
    }
};