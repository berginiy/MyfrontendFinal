// document.addEventListener('DOMContentLoaded', function () {
//     var loginLink = document.querySelector('.link[href="../вход/index.html"]');
//     var signupLink = document.querySelector('.link[href="../регистрация/index.html"]');
//     var logoutButton = document.createElement('button');

//     function updateMenu() {
//         var isLoggedIn = ;
//         if (isLoggedIn) {
//             loginLink.innerHTML = 'Log Out';
//             signupLink.style.display = 'none';

//             if (!logoutButton.parentNode) {
//                 logoutButton.innerHTML = 'Log Out';
//                 logoutButton.className = 'link';
//                 logoutButton.onclick = function () {
//                     updateMenu();
//                 };

//                 loginLink.parentNode.insertBefore(logoutButton, signupLink.nextSibling);
//             }
//         } else {
//             loginLink.innerHTML = 'Log In';
//             signupLink.style.display = 'inline-block';

//             if (logoutButton.parentNode) {
//                 logoutButton.parentNode.removeChild(logoutButton);
//             }
//         }
//     }

//     updateMenu();
// });