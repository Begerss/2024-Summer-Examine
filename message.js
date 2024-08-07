// 初始加载时，尝试从localStorage加载留言数据
const loadComments = () => {
    const savedComments = localStorage.getItem('commentslist');
    return savedComments ? JSON.parse(savedComments) : [];
};

// 保存留言数据到localStorage
const saveComments = (comments) => {
    localStorage.setItem('commentslist', JSON.stringify(comments));
};

const commentslist = loadComments(); // 加载留言数据

const commentsBox = document.querySelector('#commentslist');
const btnSubmit = document.querySelector('#btn-submit');
const nameInput = document.querySelector('#name');
const commentInput = document.querySelector('#comment');

const renderComments = (commentslist) => {
    commentsBox.innerHTML = ""; // 清空留言列表
    commentslist.forEach((item, index) => {
        commentsBox.insertAdjacentHTML(
            'beforeend',
            `<div class="comment">
                <h4><span>${item.name}</span><span class="date">${item.time}</span></h4>
                <p>${item.comment1}</p>
            </div>`
        );
    });
};

// 初始渲染留言
renderComments(commentslist);

btnSubmit.addEventListener('click', () => {
    const nameStr = nameInput.value.trim();
    const commentStr = commentInput.value.trim();
    if(nameStr !== "" && commentStr !== "") {
        const newComment = {
            name: nameStr,
            comment1: commentStr,
            time: new Date().toLocaleString() // 格式化日期
        };
        commentslist.unshift(newComment); // 添加新留言到数组开头
        renderComments(commentslist); // 重新渲染留言板
        saveComments(commentslist); // 保存留言数据
        nameInput.value = ""; // 清空昵称输入框
        commentInput.value = ""; // 清空留言输入框
    } else {
        alert('请输入昵称和留言内容！');
    }
});

// 监听存储变化，以便在浏览器刷新或关闭后重新加载留言
window.addEventListener('storage', () => {
    commentslist.length = 0; // 清空当前留言数组
    commentslist.push(...loadComments()); // 重新加载留言数据
    renderComments(commentslist); // 重新渲染留言板
});