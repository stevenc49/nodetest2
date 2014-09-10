var userListData = [];

$(document).ready(function() {
    populateTable();
});

function populateTable() {

    //empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/users/userlist', function(data) {

        //for each item in our json, add a table row and cells to the content string
        $.each(data, function(){

            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '" title="Show Details">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';     

        });

        //inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);

    });

}