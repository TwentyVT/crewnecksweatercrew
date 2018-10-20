

$("#submit").on("click", function () {
    $("#job-title").empty()
    $("#job-description").empty()


    var queryURLTwo = "https://jobs.github.com/positions.json?description=java&location=san+franciso"
    var b = $("#keyword").val()
    console.log(b)
    var queryURL = "https://authenticjobs.com/api/?api_key=525408781df0cd7b30d193b511aeb269&method=aj.jobs.search&keywords=" + b + "&format=json"
    var c = "anywhereinus"
    $.when(

        $.ajax({
            url: "https://floating-brushlands-91043.herokuapp.com/cors",
            data: {
                url: queryURL,
                key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79"
            },
            method: "POST"
        }),

        $.ajax({
            url: "https://floating-brushlands-91043.herokuapp.com/cors",
            data: {
                url: queryURLTwo,
                key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79"
            },
            method: "POST"
        })


    ).then(function (answer, answertwo) {

        // answer = answer[0];
        answertwo = answertwo[0];
        console.log(answer)
        console.log(answertwo)
        for (i = 0; i < answer[0].listings.listing.length; i++) {

            var sTitle = answer[0].listings.listing[i].title
            var sDesc = answer[0].listings.listing[i].description

            $("#job-description").append("<br>")
            $("#job-description").append("Result " + (i + 1) + ":")
            $("#job-description").append("<br>")
            $("#job-description").append(sTitle)
            // $("#job-description").append(sDesc)
            $("#job-description").css("font-size", "10px;")
        }

        for (i = 0; i < answertwo.length; i++) {

            var companytwo = answertwo[i].company

            var locationtwo = answertwo[i].location

            var titletwo = answertwo[i].title
            $("#job-description2").append("<br>")
            $("#job-description2").append("Result " + (i + 1) + ":")
            $("#job-description2").append("<br>")

            $("#job-description2").append("<br>");

            $("#job-description2").append("Title: " + titletwo + "<br>");

            $("#job-description2").append("Company: " + companytwo + "<br>");

            $("#job-description2").append("Location: " + locationtwo + "<br>");




        }

    })
})

//     $("#submit").on("click", 
// function getData() {
//     var b = $("#keyword").val()
//     var c = "atlantagaus"
//     // $("#location").val()
//     // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Tkh9g7lSJJZz8nTepzW38mf20BKMmuz5&q" + x + "=&limit=25&offset=0&rating=G&lang=en"
//     // var queryURL = "https://authenticjobs.com/api/?api_key=525408781df0cd7b30d193b511aeb269&method=aj.jobs.get&id=" + b


//     console.log(b)
//     // var b = "Front-end Engineering"

// $.ajax({
//         url: "https://floating-brushlands-91043.herokuapp.com/cors",
//         data: {
//           url: queryURL,
//           key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79",

//         },
//         method: "POST"

// }).then(function (resp) {

//     for(var i = 0; i < 5; i++){
//     var sTitle = resp.listings.listing[i].title
//     var sDesc = resp.listings.listing[i].description
//     console.log(resp)
//     console.log(sTitle)
//     $("#job-title").append(sTitle)
//     $("#job-description").append(sDesc)
//     $("#job-description").css("font-size", "10px;")
//     }
// })
// })

// function(event){
//     event.preventDefault(event)
//     // var queryURL = "https://authenticjobs.com/api/?api_key=525408781df0cd7b30d193b511aeb269&method=aj.jobs.search&keywords=" + b + "&format=json"  
//     // var queryURL = "https://authenticjobs.com/api/?api_key=525408781df0cd7b30d193b511aeb269&method=aj.jobs.get&keywords=" + b + "&format=json"
//     var queryURL = "https://authenticjobs.com/api/?api_key=525408781df0cd7b30d193b511aeb269&method=aj.jobs.search&keywords=" + b + "&perpage=10&format=json"

//     var b = "java"
//     console.log(b)

//     $.ajax({
//     url: "https://floating-brushlands-91043.herokuapp.com/cors",
//     data: {
//       url: queryURL,
//       key: "6C365355271AF5033FE78FCCE1DA65A85E4193B7A5C95E92F3904ED0407F9D79",

//     },
//     method: "POST"
// }).then(function (resp) {
    // var sTitle = resp.listings.listing[0].title
    // var sDesc = resp.listings.listing[0].description
    // console.log(resp)
    // console.log(sTitle)
    // $("#job-title").append(sTitle)
    // $("#job-description").append(sDesc)
    // $("#job-description").css("font-size", "10px;")
// })

// })
