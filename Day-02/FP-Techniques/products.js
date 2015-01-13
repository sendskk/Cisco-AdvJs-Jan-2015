var products = [
    {id : 8, name : "Pen", cost : 70, units :60 , category : 1},
    {id : 3, name : "Hen", cost : 40, units :30 , category : 2},
    {id : 9, name : "Ten", cost : 90, units :50 , category : 1},
    {id : 4, name : "Den", cost : 20, units :90 , category : 2},
    {id : 5, name : "Len", cost : 50, units :70 , category : 1},
    {id : 6, name : "Zen", cost : 10, units :20 , category : 2}
]
console.group("Default list");
console.table(products);
console.groupEnd();

var sort = function(list, attrName){
    for(var i=0;i<list.length-1;i++)
        for(var j=i+1;j<list.length;j++){
            if (list[i][attrName] > list[j][attrName]){
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
}
console.group("Sorting")
    console.group("Default");
    sort(products, "id" );
    console.table(products);
    console.groupEnd();

    console.group("By cost");
    sort(products, "cost" );
    console.table(products);
    console.groupEnd();

    var sort = function(list, compareFn){
        for(var i=0;i<list.length-1;i++)
            for(var j=i+1;j<list.length;j++){
                if (compareFn(list[i],list[j]) > 0 ){
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
    };
    //returns -1 or 0 or 1
    var productComparerByValue = function(p1,p2){
        var p1Value = p1.cost * p1.units,
            p2Value = p2.cost * p2.units;
        if (p1Value < p2Value) return -1;
        if (p1Value > p2Value) return 1;
        return 0;
    }
    console.group("By Value [cost X units]");
    sort(products, productComparerByValue );
    console.table(products);
console.groupEnd();

//filter
console.group("Filter");
    var filter = function(list, predicate){
        var result = [];
        for(var i=0;i<list.length;i++)
            if (predicate(list[i]))
                result.push(list[i]);
        return result;
    }
    var costProductPredicate = function(product){
        return product.cost > 50;
    }
    console.group("Costly products [ cost > 50 ]");
    var costlyProducts = filter(products,costProductPredicate);
    console.table(costlyProducts);
    console.groupEnd();

    /*var affordableProductPredicate = function(product){
        return !costProductPredicate(product);
    }*/
    var notPredicate = function(predicate){
        return function(){
            return !predicate.apply(this,arguments);
        }
    }
    var affordableProductPredicate = notPredicate(costProductPredicate);
    console.group("Affordable products [ !costly products ]");
    var affordableProducts = filter(products,affordableProductPredicate);
    console.table(affordableProducts);
    console.groupEnd();

console.groupEnd();

//min
console.group("Min");
    var min = function(list, valueSelector){
        var result = valueSelector(list[0]);
        for(var i=1;i<list.length;i++){
            var value = valueSelector(list[i]);
            if (value < result) result = value;
        }
        return result;
    }
    console.log("Min cost =", min(products, function(p){ return p.cost; }));
console.groupEnd();
//max
//sum
//any
//all
//groupBy
console.group("Group By");
    var groupBy = function(list, keySelector){
        var result = {};
        for(var i=0;i<list.length;i++){
            var key = keySelector(list[i]);
            /*if (typeof result[key] === "undefined")
                result[key] = [];*/
            result[key] = result[key] || [];
            result[key].push(list[i]);
        }
        return result;
    }
    var productsByCategory = groupBy(products,function(p){ return p.category; });
    console.group("Category - 1")
    console.table(productsByCategory[1]);
    console.groupEnd();

    console.group("Category - 2")
    console.table(productsByCategory[2]);
    console.groupEnd();

    var keySelectorByCost = function(p){ return p.cost > 50 ? "costly" : "affordable";};
    var productsByCost = groupBy(products, keySelectorByCost);

    console.group("Cost - 'affordable'")
    console.table(productsByCost['affordable']);
    console.groupEnd();

    console.group("'costly'")
    console.table(productsByCost['costly']);
    console.groupEnd();
console.groupEnd();
