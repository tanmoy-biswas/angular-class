$(document).ready(function() {
    jQuery.ajax({
        url: "https://reqres.in/api/users",
        //"https://reqres.in/api/users?page=1",
        data: {
             page: 1
        },
        type: "GET",
        success: function(dataFromAPI) {
         console.log(JSON.stringify(dataFromAPI));
         //this.myFunction2();
        }
    });
});

/*
window.setTimeout(function() {
    document.getElementById("name").innerHTML="Piklu";
}, 5000);
*/
/*
var x=1;
window.setInterval(function() {
    document.getElementById("name").innerHTML=x;
    x=x+1;
},1000);
*/