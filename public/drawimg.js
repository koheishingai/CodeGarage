(function($){

var imgname = {};
var imgurl = {};
var imgwidth = {};
var imgheight = {};
var imgposition = {};

var arr1 = [];
arr1.push(imgname); //0
arr1.push(imgurl); //1
arr1.push(imgwidth); //2
arr1.push(imgheight); //3
arr1.push(imgposition); //4

var uniarr = [];
uniarr.push(arr1);

//Get Setting CSS on Loacal
function ajaxread(filenm){
  var xhr=null;
  if (window.XMLHttpRequest)xhr=new XMLHttpRequest();
  else if(window.ActiveXObject)
  try {xhr=new ActiveXObject("Msxml2.XMLHTTP");}
  catch(e){xhr=new ActiveXObject("Microsoft.XMLHTTP");}
  xhr.open("GET",filenm,false);xhr.send("");eval(xhr.responseText);
};

  $.fn.drawimg = function(name){ //background
        ajaxread('/outimg.js');
     this.css('background', 'url('+uniarr[0][1][uniarr[0][0][name]]+') no-repeat').css('width', uniarr[0][2][uniarr[0][0][name]]).css('height', uniarr[0][3][uniarr[0][0][name]]).css('background-position', uniarr[0][4][uniarr[0][0][name]]);
  };
})(jQuery);






