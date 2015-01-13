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
//min
//max
//sum
//any
//all
//groupBy

