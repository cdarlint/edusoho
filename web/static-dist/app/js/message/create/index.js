webpackJsonp(["app/js/message/create/index"],{0:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=t("0c931d8abdb8a96503a9"),n=r(u),s=$("#message-create-form");s.validate({rules:{"message[receiver]":{required:!0,es_remote:{}},"message[content]":{required:!0,maxlength:500}}});(0,n.default)({element:"#message_receiver"})},"0c931d8abdb8a96503a9":function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(e){var a=e.element,t=e.valueKey,r=e.url,u=$(a);u.autocomplete({appendMethod:"replace",valueKey:t||"nickname",source:[function(e,a){var t=this;if(e){var n=[],s=r||u.data("auto-url");$.get(s+"?q="+e,function(e){e&&e.map(function(e){n.push(e[t.valueKey])}),a(n)})}}]})};a.default=t}});