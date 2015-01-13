 function SalaryCalculatorView(calculator){
            var $root = this.$root = $("<div></div>");

            this.init = function(){
                calculator.addSubscriber("salary", function(){
                   $("#divResult", $root).html(this.get("salary"));
               });
               calculator.addSubscriber("basic", function(){
                   $("#txtBasic", $root).val(this.get("basic"));
               });
               calculator.addSubscriber("hra", function(){
                   $("#txtHra", $root).val(this.get("hra"));
               });
               calculator.addSubscriber("da", function(){
                   $("#txtDa", $root).val(this.get("da"));
               });
               calculator.addSubscriber("tax", function(){
                   var tax = this.get("tax");
                   $("#rangeTax", $root).val(tax);
                   $("#spanTax", $root).html(tax + '%');
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
                var template = $("#salaryCalculatorTemplate").html();
                $root.html(template);
            }
        }
