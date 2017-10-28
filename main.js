$(document).ready(function() {

    console.log(carObj.cars[0].make)

    // let carModels = $('#selectMake').html(`<option>${carObj.cars[0].make}</option>`)







    $('#selectMake').change($.fn.addModels)
    $('#selectModel').change($.fn.addYears)

});


$.fn.addModels = function() {
    let brandOption = $("#selectType").prop('selectedIndex')
    let makeIndex = $('#selectMake').prop('selectedIndex')
    let carModel = "<option disabled selected hidden>Choose a Model</option>"

    if (brandOption == 1 && makeIndex == 1) {
        carModel += "<option>P1</option>"
        carModel += "<option>P1 GTR</option>"
        carModel += "<option>F1</option>"
        carModel += "<option>MP4-12C</option>"
    } else if (brandOption == 1 && makeIndex == 2) {
        carModel += "<option>Diablo GT</option>"
        carModel += "<option>Veneno</option>"
        carModel += "<option>Sesto Elemento</option>"
        carModel += "<option>Reventon</option>"
        carModel += "<option>Asterion</option>"
        carModel += "<option>Centenario</option>"
    } else if (brandOption == 1 && makeIndex == 3) {
        carModel += "<option>599 GTO</option>"
        carModel += "<option>Aurea</option>"
        carModel += "<option>Enzo</option>"
        carModel += "<option>430 Scuderia</option>"
        carModel += "<option>LaFerrari</option>"
        carModel += "<option>F12 TRS</option>"
    } else if (brandOption == 1 && makeIndex == 4) {
        carModel += "<option>Chiron</option>"
        carModel += "<option>Chiron Concept</option>"
        carModel += "<option>Veyron</option>"
        carModel += "<option>Veyron Grandsport</option>"
        carModel += "<option>Veyron Supersport</option>"
    } else if (brandOption == 2 && makeIndex == 1) {
        carModel += "<option>Evo VIII FQ-400</option>"
        carModel += "<option>Evo VIII FQ340</option>"
        carModel += "<option>Evo IX FQ360</option>"
        carModel += "<option>Evo X</option>"
    } else if (brandOption == 2 && makeIndex == 2) {
        carModel += "<option>MR2 Turbo (Mk II)</option>"
        carModel += "<option>Supra Turbo</option>"
        carModel += "<option>GT86</option>"
    } else if (brandOption == 2 && makeIndex == 3) {
        carModel += "<option>NSX</option>"
        carModel += "<option>S2000</option>"
        carModel += "<option>Civic Type-R (Gen 3)</option>"
        carModel += "<option>Civic Type-R (Gen 5)</option>"
    } else if (brandOption == 2 && makeIndex == 4) {
        carModel += "<option>Impreza Turbo</option>"
        carModel += "<option>Impreza WRX Sti (G2)</option>"
        carModel += "<option>Impreza WRX STi Spec C Type RA-R</option>"
        carModel += "<option>WRX Sti (G5)</option>"
    } else if (brandOption == 3 && makeIndex == 1) {
        carModel += "<option>Shelby GT500</option>"
        carModel += "<option>Mustang V8</option>"
        carModel += "<option>Mustang Boss 429</option>"
        carModel += "<option>Mustand GT</option>"
    } else if (brandOption == 3 && makeIndex == 2) {
        carModel += "<option>Camaro ZL1</option>"
        carModel += "<option>Camaro SS</option>"
    } else if (brandOption == 3 && makeIndex == 3) {
        carModel += "<option>Challenger SRT Demon</option>"
        carModel += "<option>Challenger SRT8</option>"
        carModel += "<option>Charger SRT Hellcat</option>"
    } else if (brandOption == 3 && makeIndex == 4) {
        carModel += "<option>Pontiac</option>"
        carModel += "<option>GTO 'Judge'</option>"
        carModel += "<option>Trans Am</option>"
    }
    $('#selectModel').html(carModel)
}


$.fn.addYears = function() {
    let makeIndex = $('#selectMake').prop('selectedIndex')
    let modelIndex = $("#selectModel").prop('selectedIndex')
    let carYear = "<option disabled selected hidden>Choose a Year</option>"

    if (makeIndex == 1 && modelIndex == 1) {
        carYear += "<option>2013</option>"
        carYear += "<option>2014</option>"
        carYear += "<option>2015</option>"
    } else if (makeIndex == 1 && modelIndex == 2) {
        carYear += "<option>2014</option>"
        carYear += "<option>2015</option>"
    } else if (makeIndex == 1 && modelIndex == 3) {
        carYear += "<option>1994</option>"
        carYear += "<option>1995</option>"
        carYear += "<option>1996</option>"
        carYear += "<option>1997</option>"
        carYear += "<option>1998</option>"
    } else if (makeIndex == 1 && modelIndex == 4) {
        carYear += "<option>2011</option>"
        carYear += "<option>2012</option>"
        carYear += "<option>2013</option>"
        carYear += "<option>2014</option>"
    } else if (makeIndex == 2 && modelIndex == 1) {
        carYear += "<option>1999</option>"
        carYear += "<option>2000</option>"
    } else if (makeIndex == 2 && modelIndex == 2) {
        carYear += "<option>2013</option>"
        carYear += "<option>2014</option>"
    } else if (makeIndex == 2 && modelIndex == 3) {
        carYear += "<option>2010</option>"
        carYear += "<option>2011</option>"
    } else if (makeIndex == 2 && modelIndex == 4) {
        carYear += "<option>2007</option>"
        carYear += "<option>2008</option>"
        carYear += "<option>2009</option>"
    } else if (makeIndex == 2 && modelIndex == 5) {
        carYear += "<option>2014</option>"
    } else if (makeIndex == 2 && modelIndex == 6) {
        carYear += "<option>2016</option>"
        carYear += "<option>2017</option>"
    }
























    $('#selectYear').html(carYear)
}