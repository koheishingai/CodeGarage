(function($){

var imgname = {};
var imgurl = {};
var imgwidth = {};
var imgheight = {};
var imgposition = {};

imgname['Chris Coyier'] = '1';
imgurl['1'] = 'http://farm3.staticflickr.com/2891/10350267473_da1e313fd2_o.png';
imgwidth['1'] = '46';
imgheight['1'] = '46';
imgposition['1'] = '50% 50%';

imgname['suffick'] = '2';
imgurl['2'] = 'http://farm8.staticflickr.com/7385/10350638364_f4853a38d5_o.png';
imgwidth['2'] = '46';
imgheight['2'] = '46';
imgposition['2'] = '50% 50%';

imgname['Joshua Hibbert'] = '3';
imgurl['3'] = 'http://farm8.staticflickr.com/7451/10350944943_d5b3884294_o.png';
imgwidth['3'] = '46';
imgheight['3'] = '46';
imgposition['3'] = '50% 50%';

imgname['Lego Mushroom'] = '4';
imgurl['4'] = 'http://farm8.staticflickr.com/7456/10350806496_3d0df2bf5b_o.png';
imgwidth['4'] = '46';
imgheight['4'] = '46';
imgposition['4'] = '50% 50%';

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






