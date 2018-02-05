function ajx_1() {
    let p = new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: "https://reqres.in/api/users",
            data: { page: 1 },
            type: "GET",
            success: function(dataFromServer) {
                resolve(dataFromServer);
            },
            error: reject
        });
    });
    return p;
}

function ajx_2() {
    let p = new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: "https://reqres.in/api/users",
            data: { page: 1 },
            type: "GET",
            success: resolve,
            error: reject
        });
    });
    return p;
}

function ajx_3() {
    let p = new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: "https://reqres.in/api/users",
            data: { page: 1 },
            type: "GET",
            success: resolve,
            error: reject
        });
    });
    return p;
}

ajx_1().then(function(dataFromServer) {
    alert("ajax 1 success");
    ajx_2().then(function() {
        alert("ajax 2 done");
        ajx_3().then(function() {
            alert("ajax 3 done");
        }).catch(function() {
            alert("ajax 3 error");
        });
    }).catch(function(){
        alert("ajax 2 error");
    });
}).catch(function() {
    alert("ajax1 error");
});