
ITest.SocetController =  function(url){
    var _url = url;
    ITest.SOCET =  new WebSocket(_url, "protocolOne");

    this.sendMessage = function(message,callback,error){
        //send mesaage
        ITest.SOCET.onopen = function(){
            ITest.SOCET.send(message);
        };
        //message return
        ITest.SOCET.onmessage = function (evt){
            callback(evt.data);
        };
        //message err
        ITest.SOCET.onerror = function (mes){
            error();
        };
    }
}