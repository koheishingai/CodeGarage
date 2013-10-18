(function($){

var imgname = {};
var imgurl = {};
var imgwidth = {};
var imgheight = {};
var imgposition = {};

imgname['#logo'] = '1';
imgurl['1'] = 'https://ssl.gstatic.com/accounts/ui/logo_2x.png';
imgwidth['1'] = '232';
imgheight['1'] = '76';
imgposition['1'] = '50% 50%';


var arr1 = [];
arr1.push(imgname); //0
arr1.push(imgurl); //1
arr1.push(imgwidth); //2
arr1.push(imgheight); //3
arr1.push(imgposition); //4

var uniarr = [];
uniarr.push(arr1);



  $.fn.drawimg = function(name){ //background
     this.css('background', 'url('+uniarr[0][1][uniarr[0][0][name]]+') no-repeat').css('width', uniarr[0][2][uniarr[0][0][name]]).css('height', uniarr[0][3][uniarr[0][0][name]]).css('background-position', uniarr[0][4][uniarr[0][0][name]]);
  };
})(jQuery);






