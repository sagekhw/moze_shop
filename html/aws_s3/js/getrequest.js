$(document).ready(() => {
    // GET REQUEST
    $("#btnGetFiles").click((event) => {
        event.preventDefault();
        ajaxGet();
    });

    // DO GET
    function ajaxGet() {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/api/file/all",
            success: (data) => {
                //clear old data
                $("#listFiles").html("");

                /*
                	render list of files
                */
                $("#listFiles").append('');
                $.each(data, (index, filename) => {
                    $("#listFiles").append('' + filename + '');
                });
                $("#listFiles").append('');
            },
            error: (err) => {
                $("#listFiles").html(err.responseText);
            }
        });
    }
})