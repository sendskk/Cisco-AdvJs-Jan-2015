var SalaryCalculator = (function(){
   var instanceCount = 0;
   function SalaryCalculator(basic, hra, da, tax){
       ++instanceCount;
       this.basic = basic;
       this.hra = hra;
       this.da = da;
       this.tax = tax;
       this.salary = 0;
       this.calculate = function(){
           var gross = this.basic + this.hra + this.da;
           this.salary = gross * ((100-this.tax)/100);
       }
   };
   SalaryCalculator.getInstanceCount = function(){
       return instanceCount;
   }
   return SalaryCalculator;
})()