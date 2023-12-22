function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Ошибка запроса:', error);
            throw error;
        });
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const registerData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    postData('http://127.0.0.1:8000/api/v1/auth/register/', registerData)
        .then(data => {
            console.log('Результат регистрации:', data);
        })
        .catch(error => {
            console.error('Ошибка при регистрации:', error);
        });
});