// wrapping your JavaScript in a closure is a good habit
(function(){
// angular tells the program that we are using AngularJS
// store is the application name and inside the brackets the 
// dependencies should be named. (Other libraries we might need)
var app = angular.module('store', []);

// controllers are where we define our apps' behavior
// by defining functions and values
// The name of the controller should be in capital case and should always
// entail the word controller, the second parameter is an
// anonymous function that will be executed when the controller is called
  app.controller('StoreController', function(){
    // product is a property of our controller
    this.products = gems;
  });

  app.controller('PanelController', function(){
    // initialize the tab that is a property of our controller
    this.tab = 1; 

    // create a function to change the value of tab depending on which 
    // tab is being clicked
    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    // create a function to do the comparison to se if item is clicked
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
  {
    name: 'Harry',
    price: 256.8,
    description: 'A puppy that will not be as fluffy as other dogs but he is amazing',
    canPurchase: true,
    //soldOut: true,
    images: [
    {
      full: 'pics/harry1-full.jpg',
      thumb: 'pics/harry1-thumb.jpg',
    },
    {
      full: 'pics/harry2-full.jpg',
      thumb: 'pics/harry2-thumb.jpg',
    },
    ],
    reviews: [
    {
      stars: 2,
      body: 'Not so fluffy and really annoying at times',
      author: 'foo@bar.com',
    },
    {
      stars: 5,
      body: 'I love him',
      author: 'boo@bar.com',
    },
    ],
  },
  {
    name: 'Fanny',
    price: 595.7,
    description: 'Headstrong lady that is the fluffiest of the fluffiest, ',
    canPurchase: true,
    //soldOut: false, 
    images: [
    {
      full: 'pics/fanny1-full.jpg',
      thumb: 'pics/fanny1-thumb.jpg',
    },
    ],
    reviews: [
    {
      stars: 5,
      body: 'So fluffy and so cute',
      author: 'foo@bar.com',
    },
    ],
  },
  {
    name: 'Emma',
    price: 345,
    description: 'She is a bit wierd but lovable',
    canPurchase: true,
    //soldOut: false, 
    images: [
    {
      full: 'pics/emma1-full.jpg',
      thumb: 'pics/emma1-thumb.jpg',
    },
    ],
    reviews: [
    {
      stars: 5,
      body: 'Very wise',
      author: 'moo@bar.com',
    },
    ],
  }
  ];

})();