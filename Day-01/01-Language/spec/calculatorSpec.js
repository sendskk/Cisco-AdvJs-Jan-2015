describe("A calculator", function(){
    it("should be able to add two numbers", function(){
        //Arrange
        var n1 = 10,
            n2 = 20,
            expectedResult = 30;
        
        //Act
        var result = add(n1,n2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two numbers in string format", function(){
        //Arrange
        var n1 = "10",
            n2 = "20",
            expectedResult = 30;
        
        //Act
        var result = add(n1,n2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two functions returning numbers", function(){
        //Arrange
        var f1 = function(){ return 10;},
            f2 = function(){ return 20;},
            expectedResult = 30;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two functions returning numbers in string format", function(){
        //Arrange
        var f1 = function(){ return "10";},
            f2 = function(){ return "20";},
            expectedResult = 30;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two functions returning function returning numbers in string format", function(){
        //Arrange
        var f1 = function(){ return function(){ return "10";};},
            f2 = function(){ return function(){ return "20";};},
            expectedResult = 30;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add to treat non numeric string as zero", function(){
        //Arrange
        var n1 = 10,
            n2 = "abc",
            expectedResult = 10;
        
        //Act
        var result = add(n1,n2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should return zero by default", function(){
        //Arrange
        var    expectedResult = 0;
        
        //Act
        var result = add(0);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should add varying length of arguments", function(){
        //Arrange
        var    expectedResult = 100;
        
        //Act
        var result = add(10,20,30,40);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add array of numbers", function(){
        //Arrange
        var nos1 = [10,30],
            nos2 = [20,40],
            expectedResult = 100;
        
        //Act
        var result = add(nos1,nos2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add array of numbers in string format", function(){
        //Arrange
        var nos1 = [10,"30"],
            nos2 = [20,"40"],
            expectedResult = 100;
        
        //Act
        var result = add(nos1,nos2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add nested array of numbers", function(){
        //Arrange
            var numbers = [10,[20,[30,[40]]]],
            expectedResult = 100;
        
        //Act
        var result = add(numbers);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returning array of numbers", function(){
        //Arrange
        var f1 = function(){ return [10,30];},
            f2 = function(){ return [20,40];},
            expectedResult = 100;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add array of functions returning array of numbers", function(){
        //Arrange
        var f1 = function(){ return [10,30];},
            f2 = function(){ return [20,40];},
            expectedResult = 100;
        
        //Act
        var result = add([f1,f2]);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
});