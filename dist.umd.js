!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.htm=t()}(this,function(){var e={},t=document.createElement("template"),n=/(\$_h\[\d+\])/g;function r(e,t){return t.toUpperCase()}function i(e,t){var r=e.match(n),i=JSON.stringify(e);if(null!=r){if(r[0]===e)return e;i=i.replace(n,'"'+t+"$1"+t+'"').replace(/"[+,]"/g,""),","===t&&(i="["+i+"]")}return i}return function(n){return(e[n]||(e[n]=function(e){for(var n=e[0],u=1;u<e.length;)n+="$_h["+u+"]"+e[u++];return t.innerHTML=n.replace(/<(\/?)(\$_h\[\d+\])/g,"<$1c c@=$2").replace(/<([\w:-]+)(\s[^<>]*?)?\/>/gi,"<$1$2></$1>").trim(),Function("h","$_h","return "+function e(t){if(1!==t.nodeType)return 3===t.nodeType&&t.data?i(t.data,","):"null";for(var n='"'+t.localName+'"',u="{",a="",o="}",c=0;c<t.attributes.length;c++){var f=t.attributes[c],l=f.name,d=f.value;"c@"!=l?"..."!==l.substring(0,3)?(u+=a+'"'+l.replace(/:(\w)/g,r)+'":'+(!d||i(d,"+")),a=","):(o="})",u="Object.assign("+u+"},"+l.substring(3)+",{",a=""):n=d}u="h("+n+","+u+o;for(var s=t.firstChild;s;)u+=","+e(s),s=s.nextSibling;return u+")"}((t.content||t).firstChild))}(n)))(this,arguments)}});
