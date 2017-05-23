/*
var Monkey = function (name, species, foodsEaten){
  this.name = name;
  this.species = species;
  this.foodsEaten = foodsEaten;
  this.eatSomething = function(thingAsString){
    this.foodsEaten.push(thingAsString);
  }
  this.introduce = function(){
    console.log("I'm " + name + " the " + species + " that eats " + foodsEaten);
  }
  //this.introduce displays parameters that monkey already has, therefore no additional input needed
}

var monkey1 = new Monkey("spike", "howler monkey", ["bananas", "apples"]);
monkey1.introduce();
*/


// Customer Object
var Customer = function (id, name) {
  this.customerID = id;
  this.name = name;
  this.carRented = null;
};

var customer1 = new Customer(1,'Peter Hansen');

// Car Object
var Car = function (carID, producer, model, rentalPricePerDay, rentalDuration, name) {
  this.carID = carID;
  this.producer = producer;
  this.model = model;
  this.rentalPrice = rentalPrice;
  this.rentalDuration = rentalDuration;
  this.available = true;
  this.customer = null;
  this.quotePrice = function(rentalPrice, rentalDuration) {
    return rentalDuration * this.rentalPrice;
    }
  this.reserve = function(name, rentalDuration){
  if(this.available){
    this.available = false;
    this.customer = name;
    this.rentalDuration = rentalDuration;
    return true;
  } else {
    return false;
  }
  };
  this.return = function(){
    if(this.available=== false){
      //alt: !this.available -OR- this.available !== "true"
      this.available= true;
      this.customer= null;
      this.rentalDuration= 0;
      console.log("OK to return");
    } else {
      console.log("Sorry, this car has already been returned.");
    }
  }
}
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };
    // **your code here**
  this.addCar = function (carID) {
    if(this.getCar===true){
      console.log("ID already exists");
    } else {
      this.cars.push(carObj);
      console.log("Car added to warehouse");
    }
  };
  this.addCustomer = function (customerID) {
    if(this.getCustomer===true){
      console.log("ID already exists");
    } else {
      this.customers.push(customerObj);
      console.log("Customer added to warehouse");
    }
  };
  this.removeCar = function (carID) {
    var carIndex = this.findCarIndex(carID);
    if(carIndex >= 0){
      this.cars.splice(carIndex, 1)
      console.log("Car deleted.");
    } else {
      this.cars.push(carObj);
      console.log("Car not found.");
    }
  };
  this.removeCustomer = function (customerID) {
    var customerIndex = this.findCustomerIndex(customerID);
    if(customerIndex >= 0){
      this.customers.splice(customerIndex, 1)
      console.log("Customer deleted.");
    } else {
      this.customers.push(customerObj);
      console.log("Customer not found.");
    }
  };
  this.availableCars = function() {
    return this.cars.filter(function(car){
      return car.available ? true : false ;
    });
  };
  this.rentCar = function (customerID, rentalDuration) {
    var availableCars = this.availableCars();
    if (availableCars.length===0) {
      console.log("All our cars have been rented");
    } else {
      var customer = this.getCustomer (customerID);
      if (customer) {
        var car = available.Cars[0];
        customer.CarRented = car;
        car.reserve(customer, rentalDuration);
        console.log("The car has been reserved");
      } else {
        console.log("Please provide a valid customerID");
      }
    };
  };

  this.returnCar = function (customerID, rentalDuration) {
    var customer = this.getCustomer (customerID);
    if (customer!==0) {
        customer.carRented.return();
        /*derived from customer.carRented = car;
        //.return() is a function, NOT the same as return xxx
        e.g.
        var x = new Car(x.y);
        var y = x; i.e. y is also pointing to new Car(x,y)

        links back to the this.return() function under Car Object
*/
        customer.carRented = null;
        console.log("Thank you for using our service");
      } else {
        console.log("Please provide a valid customerID");
      }
    };
  //console.log cannot be assigned to a variable. return ends the function
  };

  /*this.totalRevenue = function() {
    return
   (currentCar.rentalDuration * currentCar.rentalPrice);
   }

   array.reduce{

 }
  */
  this.totalRevenue = function(){
    return this.cars.reduce(function(prevSum, currentCar){
return prevSum + (currentCar.rentalPrice * currentCar.rentalDuration);
    },0);
  };
/* cars = [car1, car2, car3, ...]
car1.d = <duration>; car1.p = <price>;
if you need to check more than 2 elements in 1 array, use .reduce().
loop checking 3 variables: prevVariable, currVariable, index;
Otherwise, stick to for()
*/


    }
  }
  // **your code here**
};


// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};
var customerA = new Customer(customerInfo);

var carInfo = {
  carID: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustormer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
