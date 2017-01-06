exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
    var finalStr = "";
    var empObj = {};
    for (var i = 0; i < str.length; i++){
      if(!empObj.hasOwnProperty(str[i])){
        empObj[str[i]] = 1;
        finalStr += str[i];
      }
      else if(empObj[str[i]] < amount){
        empObj[str[i]]++;
        finalStr += str[i];
        if(str[i] !== str[i+1]){
          delete empObj[str[i]];
        }
      }
    }
    return finalStr;
  },

  wordWrap: function(str, cols) {
    var newStr = "";
    var count = 0;
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++){
      count += strArr[i].length;
      if(i === strArr.length - 1){
        newStr += strArr[i];
      }else if (count + strArr[i+1].length > cols){
        newStr += strArr[i] + "\n";
        count = 0;
      }else {
        newStr += strArr[i] + " ";
        count++;
      }
    }
    return newStr;
  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
 
