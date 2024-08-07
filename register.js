function toggleForm() {
    var regForm = document.getElementById('registerForm');
    var loginForm = document.getElementById('loginForm');
    var toggleText = document.querySelector('.toggle-text');

    regForm.style.display = regForm.style.display === 'none' ? 'block' : 'none';
    loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';

    if (regForm.style.display === 'block') {
        toggleText.textContent = "已有账号？点击登录";
    } else {
        toggleText.textContent = "还没有账号？点击注册";
    }
}

// 登录用户
function loginUser() {
    let loginName = document.getElementById('loginName').value;
    let loginPassword = document.getElementById('loginPassword').value;
    // 这里添加登录逻辑
    if (loginPassword === localStorage.getItem('password') && loginName === localStorage.getItem('username')) {
        alert('登录成功！');
        // 登录成功后跳转到消息页面
        window.location.href = 'messageborder.html';
    } else {
        alert('用户名或密码错误！');
    }
}

// 注册用户
function registerUser() {
    let regName = document.getElementById('regName').value;
    let regPassword = document.getElementById('regPassword').value;
    let regConfirmPassword = document.getElementById('regConfirmPassword').value;

    if (regPassword !== regConfirmPassword) {
        alert('两次输入密码不一致，请确认清楚');
        return;
    }

    // 存储用户名和密码到localStorage
    localStorage.setItem('username', regName);
    localStorage.setItem('password', regPassword);

    alert('注册成功，即将跳转到登录页面。');
    setTimeout(function() {
        // 注册成功后跳转到登录页面
        window.location.href = 'index.html';
    }, 1000); // 延迟1秒跳转，以便用户看到注册成功的提示
}