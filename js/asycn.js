// Payload ajax
// function post(url, payload) {
//     $.ajax({
//         url: url,
//         method: "POST",
//         data: payload,
//         success: function (result) {
//             console.log(result);
//         },
//         async: false
//     });
// }

// function get(url) {
//     $.ajax({
//         url: url,
//         method: "GET",
//         success: function (result) {
//             // return result;
//             console.log(result);
//         },
//         async: false
//     });
// }
// get("https://strapi-dev.maven.co.id/movies");


function login(url, payload) {
    $.ajax({
        url: url,
        method: "POST",
        data: payload,
        success: function (result) {
            console.log(result);
        },
        async: false
    });
}

// set, get, update, delete localstorage
// localStorage.setItem('key', 'Halo');
// localStorage.setItem('key', 'Hola');
// console.log(localStorage.getItem('key'));
// localStorage.removeItem("key");