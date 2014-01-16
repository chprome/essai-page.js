if(typeof define !== 'function') {
  define = require('amdefine')(module);
}
define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['equipes.view']=function anonymous(it) {
var out='<ul>';var arr1=it.equipes;if(arr1){var value,index=-1,l1=arr1.length-1;while(index<l1){value=arr1[index+=1];out+='<li><b>'+(index)+'</b> : '+(value.name)+' - '+(value.captain)+'</li>';} } out+='</ul>';return out;
};
return tmpl;});
