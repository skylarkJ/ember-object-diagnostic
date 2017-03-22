/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

let order = {
  unitPrice: 5,
  get: function(){
    return this.unitPrice;
  },
  set: function(newVal){
    this.unitPrice = newVal;
    return this.unitPrice;
  },

  quantity: 2,
  get: function(){
    return this.quantity;
  },
  set: function(newVal){
    this.quantity = newVal;
    return this.quantity;
  }

  orderPrice: function() {
    let totalPrice = unitPrice x quantity
  }
};


let cart = {
  addToCart: Ember.computed('givenName', 'surname', function(){
    return `${this.get('order')}`;
  }
};


const Order = Ember.Object.extend({

});

let order = Cart.create({

})

frank.sayHello(); // "Hi, my name is Frank"

//Would need more time
