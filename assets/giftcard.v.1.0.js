!function(){var e="qr-code",t="print-gift-card",n="gift-card-code-digits",d=document.getElementById(e);new QRCode(d,{text:d.getAttribute("data-identifier"),width:120,height:120}),document.getElementById(t).addEventListener("click",function(){window.print()},!1),document.getElementById(n).addEventListener("click",function(e){var t=e.target,n="";if(document.body.createTextRange)(n=document.body.createTextRange()).moveToElementText(t),n.select();else if(window.getSelection){var d=window.getSelection();(n=document.createRange()).selectNodeContents(t),d.removeAllRanges(),d.addRange(n)}},!1)}();