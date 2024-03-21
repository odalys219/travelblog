$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
    
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url: 'https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&units=imperial&APPID=c10bb3bd22f90d636baa008b1529ee25&callback=jQuery31108790355630385875_1710985332210&_=1710985332211',
            type: "GET",
            dataType: "jsonp",
            jsonpCallback: 'jQuery31108790355630385875_1710985332210',
            success: function(data){
              console.log('test');
                console.log(data);
                var widget = showResults(data)
                console.log('test');

                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        

    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
    
}


function showResults(data){
    return  "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;F</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: "+data.main.temp_min+"&deg;F</h3>"+
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: "+data.main.temp_max+"&deg;F</h3>";}
            























