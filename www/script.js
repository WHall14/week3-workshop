//Task 4
$( document ).ready(function(){
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){

        var formData = {
            email : $("#email").val(),
            upwd : $("#upwd").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer) {
                if(customer.valid == true){
                    $("#loginform").removeClass("fail");
                    $("#loginform").addClass("success");
                } else {
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                }
                $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email + "</br>" +
                "Password: " + customer.upwd + "</br>" + "Valid User: " + customer.valid +  "</p>");
            },
            error: function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });

        resetData();
    }

    function resetData(){
        $("#email").val("");
        $("#upwd").val("");
    }
});