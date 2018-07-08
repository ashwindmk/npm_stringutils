
var self = {
    isBlank: function(str) {
        return str == null || str.trim().length == 0;
    },

    isEmpty: function(str) {
        return str == null || str.length == 0;
    },

    getLength: function(str) {
        if (self.isEmpty(str)) {
            return 0;
        }
        return str.length;
    },

    getCount: function(str, char) {
        if (self.isEmpty(str)) {
            return 0;
        }
        var count = 0;
        for (var c of str) {
            if (c == char) {
                count++;
            }
        }
        return count;
    },

    getTitleCase: function(str) {
        if (self.isBlank(str)) {
            return str;
        }
        str = str.toLowerCase()
            .split(' ')
            .map(function(word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            });
        return str.join(' ');
    }
}

module.exports = self;
