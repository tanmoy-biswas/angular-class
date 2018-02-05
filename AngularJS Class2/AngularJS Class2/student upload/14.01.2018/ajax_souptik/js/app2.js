function ajx_1() {
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
    console.log(p);
}

function ajx_2() {
    let p2 = new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: "https://reqres.in/api/users",
            data: {
                page: 1
            },
            type: "GET",
            success: resolve,
            error: reject
        });
    });
    return p2;
}

function ajx_3() {
    let p3 = new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: "https://reqres.in/api/users",
            data: {
                page: 1
            },
            type: "GET",
            success: resolve,
            error: reject
        });
    });
    return p3;

}

ajx_1().then(
    function() {
        alert("First ajax call done");
        var rec1 = JSON.stringify(p);
        console.log(rec);
        ajx_2().then(
            function() {
                alert("First ajax call done");
                var rec2 = JSON.stringify(p2);
                console.log(rec2);
                ajx_3().then(
                    function() {
                        alert("First ajax call done");
                        var rec3 = JSON.stringify(p3);
                        console.log(rec3);
                    }
                ).catch(function() {
                    alert("error");
                });
            }
        ).catch(function() {
            alert("error");
        });
    }
).catch(function() {
    alert("error");
});




/* ajx_1().then(
    function() {
        alert("First ajax call done");
        var rec1 = JSON.stringify(p);
        console.log(rec1);
        ajx_2();
    }
).catch(function() {
    alert("error");
});

ajx_2().then(
    function() {
        alert("second ajax call done");
        var rec3 = JSON.stringify(p2);
        console.log(rec3);
        ajx_3();
    }
).catch(function() {
    alert("error");
});

ajx_3().then(
    function() {
        alert("third ajax call done");
        var rec3 = JSON.stringify(p3);
        console.log(rec3);
    }
).catch(function() {
    alert("error");
}); */