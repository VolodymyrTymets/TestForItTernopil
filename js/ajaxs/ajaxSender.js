FindMy.AjaxSender = function () {

    this.getUsers = function (calback,userName,R) {
        if(!userName){
            if(!R) R =1;
            $.ajax({
                url: 'http://www.findmy.somee.com/api/Location/GetAll?r='+R+"&lat=" +FindMy.CURRENTPOSITION.coords.latitude +"&lon="+FindMy.CURRENTPOSITION.coords.longitude ,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: calback,
                error: function (){
                    alert("Server not responce");
                }
            })
        }else{

            $.ajax({
                url: "http://www.findmy.somee.com/api/Location/GetFriend?UserName="+ userName,
                dataType: "json",
                success: calback,
                error: function (){
                    alert("Server not responce");
                }

            });
        }
    },

    this.addUser = function (user,calback) {
        var json = JSON.stringify(user);

        $.ajax({
            url: 'http://www.findmy.somee.com/api/Location/Set',
            type: 'POST',
            dataType: 'json',
            data: json,
            contentType: 'application/json; charset=utf-8',
            success: calback            
        })

    }
}