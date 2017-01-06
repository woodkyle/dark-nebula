exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    greeting = obj.name;
    name = obj.greeting;
    return fn();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    newArr = [];
    for(var name in obj){
      if(obj.hasOwnProperty(name)){
        newArr.push(name + ": " + obj[name]);
      }
    }
    return newArr;
  }
};
