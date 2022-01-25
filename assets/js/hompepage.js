var getUserRepos = function (user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos"; 

fetch(apiUrl).then(function(respone) {
    response.json().then(function(data) {
        console.log(data);
    });
});
};

getUserRepos ();