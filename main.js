var lamObj = function() {
    this.make = $("#selectMake").prop("value")
    this.model = $("#selectModel").prop("value")
    this.year = $("#selectYear").prop("value")
    this.color = $("#selectColor").prop("value")
    this.img = $('#selectImg').prop("value")
};
var ferObj = function() {
    this.make = $("#selectMake").prop("value")
    this.model = $("#selectModel").prop("value")
    this.year = $("#selectYear").prop("value")
    this.color = $("#selectColor").prop("value")
    this.img = $("#selectImg").prop("value")

}
var astObj = function() {
    this.make = $("#selectMake").prop("value")
    this.model = $("#selectModel").prop("value")
    this.year = $("#selectYear").prop("value")
    this.color = $("#selectColor").prop("value")
    this.img = $("#selectImg").prop("value")

};
var mclObj = function() {
    this.make = $("#selectMake").prop("value")
    this.model = $("#selectModel").prop("value")
    this.year = $("#selectYear").prop("value")
    this.color = $("#selectColor").prop("value")
    this.img = $("#selectImg").prop("value")

};

let carGarage = [];

$(document).ready(function() {
    $('#add').click("click", $.fn.addToGarage, false);
})

$.ajax({
    dataType: "json",
    url: "https://demetrius-b.github.io/DBerkeley_JQuery-CRUD/json/carData.json",
});

$.getJSON("/json/carData.json", function(data) {
    let carMake = $('#selectMake').html(
        `<option disabled selected hidden>Choose a Make</option>
<option>${data.cars[0].make}</option>
<option>${data.cars[1].make}</option>
<option>${data.cars[2].make}</option>
<option>${data.cars[3].make}</option>`);

    $('#selectMake').change(e => {
        let makeIndex = $("#selectMake").prop("selectedIndex");

        if (makeIndex == 1) {
            let carModel = $("#selectModel").html(`<option>${data.cars[0].model[0].name}</option>`);
            let carYear = $("#selectYear").html(`<option>${data.cars[0].model[0].year}</option>`);
            let carColor = $("#selectColor").html(`<option disabled selected hidden>Choose a Color</option>
            <option>${data.cars[0].model[0].color[0].name}</option>
            <option>${data.cars[0].model[0].color[1].name}</option>
            <option>${data.cars[0].model[0].color[2].name}</option>`);
            $('#selectColor').change(e => {
                let colorIndex = $("#selectColor").prop("selectedIndex");
                if (colorIndex == 1) {
                    let carImg = $("#selectImg").val(`${data.cars[0].model[0].color[0].img}`);
                } else if (colorIndex == 2) {
                    let carImg = $("#selectImg").val(`${data.cars[0].model[0].color[1].img}`);
                } else if (colorIndex == 3) {
                    let carImg = $("#selectImg").val(`${data.cars[0].model[0].color[2].img}`);
                }
            })
        } else if (makeIndex == 2) {
            let carModel = $("#selectModel").html(`<option>${data.cars[1].model[0].name}</option>`);
            let carYear = $("#selectYear").html(`<option>${data.cars[1].model[0].year}</option>`);
            let carColor = $("#selectColor").html(`<option>${data.cars[1].model[0].color[0].name}</option>`);
            let carImg = $("#selectImg").val(`${data.cars[1].model[0].color[0].img}`);

        } else if (makeIndex == 3) {
            let carModel = $("#selectModel").html(`<option>${data.cars[2].model[0].name}</option>`);
            let carYear = $("#selectYear").html(`<option>${data.cars[2].model[0].year}</option>`);
            let carColor = $("#selectColor").html(`<option>${data.cars[2].model[0].color[0].name}</option>`);
        } else if (makeIndex == 4) {
            let carModel = $("#selectModel").html(`<option>${data.cars[3].model[0].name}</option>`);
            let carYear = $("#selectYear").html(`<option>${data.cars[3].model[0].year}</option>`);
            let carColor = $("#selectColor").html(`<option disabled selected hidden>Choose a Color</option>
            <option>${data.cars[0].model[0].color[0].name}</option>
            <option>${data.cars[0].model[0].color[1].name}</option>`);
            let carImg = $("#selectImg").val(`${data.cars[3].model[0].color[0].img}`);
        }
    })
})

$.fn.addToGarage = function() { // Add
    let newCar = $.fn.createCar()

    carGarage.push(newCar)

    $("#carGarage").html("");
    for (var i = 0; i < carGarage.length; i++) {
        $("#carGarage").append(`<li class="${i}"><p>${i} - ${carGarage[i].make}</p><button id="view${i}">v</button></li>`);
        $("#carGarage").data('name', carGarage[i].make)
    }


    // let z = 0
    $(`#view0`).click("click", e => {
        // FIX THIS!!!!!!!!!!!!!!!!!!!
        // if (carGarage[z].color == "Green") {
        //     $(".carResults").html("");

        //     $(".carResults").html(`<img src="${carGarage[z].img}" alt="">`);
        // } else if (carGarage[z].color == "Orange") {
        //     $(".carResults").html("");

        //     $(".carResults").html(`<img src="${carGarage[z].img}" alt="">`);
        // }
        // i++
        var getBackMyJSON = $("#carGarage").data("name");
        console.log($("#carGarage").data("name"));
    }, false);

}

$.fn.createCar = function() {
    let makeIndex = $("#selectMake").prop("selectedIndex");

    if (makeIndex == 1) {
        return new lamObj();
    } else if (makeIndex == 2) {
        return new ferObj();
    } else if (makeIndex == 3) {
        return new astObj();
    } else if (makeIndex == 4) {
        return new mclObj();
    }
};