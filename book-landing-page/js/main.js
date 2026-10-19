// Menu mobile: đóng menu xong mới cuộn tới mục được chọn
// (nếu cuộn khi menu đang đóng dở thì chiều cao thanh nav thay đổi và trang bị lệch)
var menu = document.getElementById('navMenu');
document.querySelectorAll('#navMenu .nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
        if (!menu.classList.contains('show')) {
            return;                        // desktop: để trình duyệt tự cuộn
        }
        e.preventDefault();
        var target = document.querySelector(link.getAttribute('href'));
        menu.addEventListener('hidden.bs.collapse', function () {
            target.scrollIntoView({ behavior: 'smooth' });
        }, { once: true });
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
});

// Form đăng ký nhận tin: kiểm tra email rồi hiện thông báo
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('newsletterEmail');
    var msg = document.getElementById('newsletterMsg');
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    msg.textContent = ok ? 'Thanks for subscribing!' : 'Please enter a valid email address.';
    if (ok) {
        input.value = '';
    }
});

// Năm hiện tại ở footer
document.getElementById('year').textContent = new Date().getFullYear();
