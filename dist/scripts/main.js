function asteriskString(t){var e=t.charAt(0)+"*",r=t.length;return r>1?e+asteriskString(t.substring(1)):t.charAt(0)}function validateLogic(t){var e=["a","b","c","d","e","f","g","h","i","j"],r=["N","L","Q","R"],i=t.length;if(1===i)return e.indexOf(t)>-1?!0:!1;if("Z"===t.charAt(0))return validateLogic(t.substring(1));if(!(r.indexOf(t.charAt(0))>-1))return!1;for(var n=0;i-1>n;n++)if(validateLogic(t.substr(1,1+n))&&validateLogic(t.substr(2+n)))return!0}!function(){"use strict";window.App=Ember.Application.create(),App.Router.map(function(){this.route("index",{path:"/"}),this.resource("adaptiveInsights"),this.resource("codility"),this.resource("upsight")})}(),function(){"use strict";App.AdaptiveInsightsController=Ember.Controller.extend({actions:{toggleCode:function(){var t=event.target.getAttribute("data-codeNum"),e=$(".code"+t),r=$(".code"+t+"Btn");e.toggle(),this.isShowing?(this.isShowing=!1,r.html("Show Code")):(this.isShowing=!0,r.html("Hide Code"))},thouCloser:function(){var t=this.get("int1"),e=this.get("int2");this.set("int1",""),this.set("int2","");var r=$("#answer1");return Math.abs(1e3-t)<=Math.abs(1e3-e)?(r.html(t),t):(r.html(e),e)},doubleChar:function(){for(var t=this.get("string"),e=$("#answer2"),r="",i=0;i<t.length;i++)var n=t.charAt(i),r=r+n+n;return e.html(r),r},equalArraySplit:function(){for(var t=this.get("eASArray"),e=$("#answer3"),r=JSON.parse("["+t+"]"),t=r[0],i=1;i<t.length;i++){var n=t.slice(0,i);console.log(n);var a=n.reduce(function(t,e){return t+e}),s=t.slice(i,t.length),o=s.reduce(function(t,e){return t+e});a===o?e.html("true"):e.html("false")}},aS:function(){var t=this.get("aSString"),e=$("#answer4");e.html(asteriskString(t))}}})}(),function(){"use strict";App.UpsightController=Ember.Controller.extend({actions:{validateString:function(t){t=t.replace(/\\n/g," "),t=t.replace(/\"/g,"");var e=t.split(/\s+/),r=$("#answer1");r.html("");for(var i=0;i<e.length;i++){var n="";n=validateLogic(e[i])?"VALID":"INVALID",console.log(e[i]+" "+n),r.append("<p>"+e[i]+" "+n+"</p>")}}}})}();