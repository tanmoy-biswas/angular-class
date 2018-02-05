/*

// this is an example of making ajax call chainwise.

jQuery.ajax({
    // this is the first ajax call
    url: "https://reqres.in/api/users",
    data: {
        page: 1
    },
    type: "GET",
    success: function (dataFromAPI) {
        alert("First ajax call done");
        console.log(JSON.stringify(dataFromAPI));
        // following
        jQuery.ajax({
            //this is the second ajax call
            url: "https://reqres.in/api/users",
            data: {
                page: 1
            },
            type: "GET",
            success: function (dataFromAPI) {
                // this is the third ajax call
                alert("Second ajax call done");
                console.log(JSON.stringify(dataFromAPI));
                jQuery.ajax({
                    url: "https://reqres.in/api/users",
                    data: {
                        page: 1
                    },
                    type: "GET",
                    success: function (dataFromAPI) {
                        alert("Third ajax call done");
                        console.log(JSON.stringify(dataFromAPI));
                        //this.myFunction2();
                    },
                    error: function(error) {
                        console.log(error.readyState);
                    }
                });
            },
            error: function(error) {
                console.log(error.readyState);
            }
        });
    },
    error: function(error) {
        console.log(error.readyState);
    }
});

*/

function ajax1() {

    /*
    // this is the basic syntax of creating promise
    let p = new Promise(function(resolve, reject) {

    });
    */

    let p = new Promise(function(resolve, reject) {
        jQuery.ajax({
            // this is the first ajax call
            url: "https://reqres.in/api/users",
            data: {
                page: 1
            },
            type: "GET",
            success: resolve,
            error : reject
        });
    });

    return p;
}

function ajax2() {
    jQuery.ajax({
        // this is the first ajax call
        url: "https://reqres.in/api/users",
        data: {
            page: 1
        },
        type: "GET",
        success: function (dataFromAPI) {
            alert("Second ajax call done");
            console.log(JSON.stringify(dataFromAPI));
        },
        error: function() {

        }
    });
}


ajax1().then(function() {
    alert("First ajax call done")
    ajax2();
}).catch(function() {
    alert("error")
});