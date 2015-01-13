 function SalaryCalculatorView(calculator){
    var $root = this.$root = $("<div></div>");
    this.template = "";
    this.templateFn = undefined;
    this.init = function(){
        var self = this;
        calculator.addSubscriber("any", function(){
           self.render();
       });

       //UI changes
       $root.on("change", "#txtBasic", function(){
            calculator.set('basic', parseInt(this.value,10));
       });
       $root.on("change", "#txtHra", function(){
            calculator.set('hra', parseInt(this.value,10));
       });
       $root.on("change", "#txtDa", function(){
            calculator.set('da', parseInt(this.value,10));
       });
       $root.on("change", "#rangeTax", function(){
            calculator.set('tax', parseInt(this.value,10));
       });
       $root.on("click", "#btnCalculate", function(){
           calculator.calculate();
       });
    }

    this.render = function(){
        this.template = this.template || $("#salaryCalculatorTemplate").html();
        this.templateFn = this.templateFn || Handlebars.compile(template);
        var viewHTML = templateFn(calculator.toJSON());
        $root.html(viewHTML);
    }
}
