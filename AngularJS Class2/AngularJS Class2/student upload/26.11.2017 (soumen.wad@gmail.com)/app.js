var numberOfStudents;
var nameArray = [];
var emailIdArray = [];

function displayData() {
    var index;
    var trHTML = "";
    for(index=0; index<numberOfStudents; index++) {
        trHTML += `
            <tr>
                <td>
                    `+nameArray[index]+`
                </td>
                <td>
                    `+emailIdArray[index]+`
                </td>
            </tr>
        `;
    }
    document.getElementById("tableBody").innerHTML= trHTML;
}

function getUserData() {
    // reading student's name and email id
    var index;
    
    /*
    index = 0;
    while(index<numberOfStudents) {
        //////////////////////////////
        ///////////////////////
        ////////
        index++;
    }
    */
    
    for(index=1; index<=numberOfStudents; index++) {
        var studentName = window.prompt("enter student name:");
        var studentEmailId = window.prompt("enter student email:");
        
        nameArray.push(studentName);
        emailIdArray.push(studentEmailId);

    }
    
    displayData();
}

function storeNumberOfStudents() {
    numberOfStudents = parseInt(document.getElementById("txt_numberOfStudents").value);  
    getUserData();
}

