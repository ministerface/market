function TestFilter() {
    return function (items, searchs) {
        var filtered = [];

        for (var i = 0; i < items.length; i++) {
            var item = items[i];


            if(searchs){
                var match = function (item1, val) {
                    val = val.toLowerCase();

                     if(item1.toString().toLowerCase().indexOf(val) >= 0){
                           return true;
                     }
                };
                var matched = true;

                    matched = matched && match(item.data.name, searchs);

                if (matched) {
                    filtered.push(item);
                }
            } else {
                filtered.push(item);
            }

        }
        return filtered;

    };
}
export default TestFilter;