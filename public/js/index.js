$("document").ready(function(){

    $("#image_search").submit(function(e){
        let payload = {};
        payload.public_id = $("#public_id").val();

        $.ajax({
            url: "/getImage",
            type: 'POST',
						data: JSON.stringify(payload),
				    contentType: 'application/json',
            success: function(result){
                console.log(result);
                $("#photo").empty();
                $("#photo").append('<img src="'+result+'"></img>');
            },
            error: function(err){
                console.log(err);
                alert("could not find image");
            }
        });

        e.preventDefault();
    });
});
