ITest.AppStart = function(){

    /**
     * initialize logic
     */
    this.init = function(){

    },

    /**
     * initialize all dom components
     */
    this.initializeComponent = function(){
        $.material.init();
        $("#successModal").animatedModal({
            modalTarget:'animatedModalSuccess',
            animatedIn:'lightSpeedIn',
            animatedOut:'rotateOutDownLeft',
            color:'rgb(116, 151, 85)'
        });

        $("#errModal").animatedModal({
            modalTarget:'animatedModalErr',
            animatedIn:'lightSpeedIn',
            animatedOut:'hinge',
            color:'rgb(178, 19, 19)'
        });
    },

    /**
     * initialize all dom event hendlers in dom componemt
     */
     this.initializeComponentEvents = function(){
        $("#submit").on("click",function(event){
            event.preventDefault();
            var socetControllet = new ITest.SocetController(ITest.URL,"protocolOne");
            socetControllet.sendMessage($("#input").val(),function(data){

                $("#responseholder p").empty()
                $("#responseholder p").append(data);
                $("#successModal").click();

                }, function(){
                $("#errModal").click();
                })
        });
     }


}
