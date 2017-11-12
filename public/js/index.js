$("document").ready(function(){
    
    let payload = {
        'public_id':$("#public_id").val()
    };

    $("#image_search").submit(function(e){
        $.ajax({
            url: "/getImage", 
            data: JSON.stringify(payload),
            success: function(result){
                console.log(result);
            },
            error: function(err){
                console.log(err);
            }
        });

        e.preventDefault();
    });
});

// action="/getImage" 