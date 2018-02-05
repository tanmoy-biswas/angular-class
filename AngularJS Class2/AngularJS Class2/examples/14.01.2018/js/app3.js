function ajx_1() {
    let p = new Promise(function(resolve, reject) {
        jQuery.ajax({
            url: "https://reqres.in/api/users",
            data: { page: 1 },
            type: "GET",
            success: function(dataFromServer) {
                resolve(dataFromServer);
            },
            error: function(errorData) {
                reject(errorData);
            }
        });
    });
    return p;
}

ajx_1().then(function(dataFromServer) {
    console.log(dataFromServer);

    //populating data using for loop manually
    // let userData = dataFromServer["data"];
    // console.log(userData);
    // for(let index=0; index<userData.length; index++) {
    //     let trhtml = `
    //         <tr>
    //             <td>`+userData[index].id+`</td>
    //             <td>`+userData[index].first_name+`</td>
    //             <td>`+userData[index].last_name+`</td>
    //             <td><img src="`+userData[index].avatar+`"/></td>
    //         </tr>
    //     `;
    //     $("#userTable").append(trhtml);
    // }

    // populating data using mustache
    let template = `
    {{ #data }}
        <tr>
            <td>{{id}}</td>
            <td>{{first_name}}</td>
            <td>{{last_name}}</td>
            <td><img src="{{avatar}}"/></td>
        </tr>
    {{ /data }}
    `;
    let finalHTML = Mustache.render(template, dataFromServer);
    $("#userTable").append(finalHTML);
}).catch(function() {
    alert("Error occured")
});