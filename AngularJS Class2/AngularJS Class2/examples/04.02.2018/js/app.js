$(document).ready(function (){
    $("#lbl_loadingData").hide();
    $("#btn_showWeather").on('click', function() {
        var cityName;
        cityName = $("#txt_cityName").val();
        callAjax(cityName);
    });
});

var buildApiURL = (function(cityName){
    var url;
    url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+"&cnt=14&APPID=b35e5e51128992747a9393ab8ba53b8b";
    return url;
});

var callAjax = (function(cityName){
    var urlToCall;
    $("#lbl_loadingData").show();
    urlToCall = buildApiURL(cityName);
    $.ajax({
        url: urlToCall,
        success: function(dataFromServer){
            var newData;console.log(dataFromServer);
            newData = manipulateData(dataFromServer);
            console.log(newData);
            $("#lbl_loadingData").hide();
        },
        error: function (){
            alert("Cannot load data. Check internet connection");
        }
    });
});

var convertTimeStampToDate = (function(timeStamp){
    var d = new Date(timeStamp * 1000),	// Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
    dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
    hh = d.getHours(),
    h = hh,
    min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
    ampm = 'AM',
    time;
        
    if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
    } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
    } else if (hh == 0) {
        h = 12;
    }

    // ie: 2013-02-18, 8:35 AM	
    time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
        
    return time;
});

var convertKelvinToCelcious = (function(kelvin) {
    var celcious;
    celcious = (kelvin - 273.15);
    return celcious;
});

var manipulateData = (function(dataFromServer) {
    var newData;
    newData = {};
    var todaysData = dataFromServer.list[0];
    newData.dateTime = convertTimeStampToDate(todaysData.dt);
    newData.dayTemparature =convertKelvinToCelcious(todaysData.temp.day);
    newData.minimumTemparature = convertKelvinToCelcious(todaysData.temp.min);
    newData.maximumTemparature = convertKelvinToCelcious(todaysData.temp.max);
    return newData;
});