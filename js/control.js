$(document).ready(function(){
    let login = "../pages/login.html";
    let dashboard = "../pages/dashboard.html";
    let detail = "../pages/detail.html";

    // Toast
    // toastr.success('Success messages', { timeOut: 5000 });

    // Loading Screen
    // $("#loading_screen").fadeIn();
    // $("#loading_screen").fadeOut();

    $("#section").load(login, function(){
        
    });
});