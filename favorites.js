 function goHome() {
            window.location.href = 'index.html';
        }

        function goProfile() {
            window.location.href = 'profile.html';
        }

        function openPage(page) {
            window.location.href = 'title.html?name=' + page;
        }

        const user = JSON.parse(localStorage.getItem('findraUser'));
        const container = document.getElementById('authContainer');
        const content = document.getElementById('content');

        if (!user) {
            window.location.href = 'login.html';
        } else {
            container.innerHTML = `

`;
            content.style.display = 'block';
        }

        function logout() {
            localStorage.removeItem('findraUser');
            location.reload();
        }
