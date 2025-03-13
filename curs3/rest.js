// Get all users
function httpGet(){
    var url  = "https://reqrest.in/api/users?page=1";
    var xhr  = new XMLHttpRequest();
    xhr.open('GET', url, true)
    //xhr.readystatechange = function () {
    //https://teamtreehouse.com/community/xhronreadystatechange-vs-xhronload
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        let userCard = '';
        const content = document.getElementById('content');
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users.data);
            for (let i = 0; i <=mysers.data.length; i++) {
                userCard +=``
            console.error(users);
        }
    }
    xhr.send(null);
    }
    }