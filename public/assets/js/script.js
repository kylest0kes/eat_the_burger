$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });

    $(".devour-btn").on("click", function (event) {
        var id = $(this).data("id");
        var nowdevoured = $(this).data("nowdevoured");
        
        var devouredStatus = {
            devoured: nowdevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredStatus
        }).then(function () {
            location.reload();
        })
    })
})



