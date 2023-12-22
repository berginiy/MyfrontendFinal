function login(url, data) {
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

    const loginData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    login(' ', loginData)
        .then(data => {
            console.log('Результат входа:', data);
        })
        .catch(error => {
            console.error('Ошибка при входе:', error);
        });
});
