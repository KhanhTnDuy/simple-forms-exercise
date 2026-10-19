# Book Landing Page

Trang web tĩnh giới thiệu sách "Book of Ideas", dùng Bootstrap 5, HTML, CSS và một ít JavaScript. Mở `index.html` trong trình duyệt là chạy (cần Internet để tải Bootstrap và Font Awesome từ CDN).

## Các phần của trang
| Phần | Nội dung |
|---|---|
| Header + Book Overview | Navbar dính đầu trang (thu gọn thành menu ở mobile), hero có tên sách, mô tả, nút mua, thông số sách, ảnh bìa |
| Author | Ảnh và giới thiệu tác giả, liên kết mạng xã hội |
| Features | Banner ảnh và 4 thẻ tính năng nằm đè lên banner |
| Prices | 3 gói giá (PDF, E-book, Hardcover + Audio), gói giữa được làm nổi bật |
| Download | Dải gradient với nút tải bản Desktop và Mobile |
| Reader's Say | 3 thẻ nhận xét của độc giả kèm ảnh và số sao |
| Footer | Giới thiệu, form nhận tin (kiểm tra email), mạng xã hội |

## Responsive
Dùng lưới Bootstrap (`col-sm/md/lg`) và `clamp()` cho cỡ chữ và khoảng cách. Đã kiểm tra ở 1280, 1024, 768, 375 và 320px: không tràn ngang, ảnh và icon đều tải được.
- Desktop: hero 2 cột, 4 thẻ tính năng và 3 gói giá trên một hàng, thẻ tác giả đè lên ảnh.
- Tablet: thẻ tính năng 2x2, gói giá và nhận xét xếp 2 + 1.
- Mobile: mọi thứ xếp 1 cột, navbar thành nút menu, menu tự đóng sau khi chọn mục.

## Tương tác
- Scrollspy: mục menu tương ứng với phần đang xem được tô sáng.
- Cuộn mượt khi bấm menu. Trên mobile, menu đóng xong mới cuộn để không bị lệch vị trí.
- Form Newsletter: báo lỗi nếu email sai, báo thành công nếu đúng.

## Cấu trúc
```
book-landing-page/
├── index.html
├── css/style.css
├── js/main.js
└── assets/          # ảnh bìa, tác giả, độc giả, banner
```

## So với mã nguồn tham khảo (hoanv7169/bootstrap-demo)
Bố cục và các phần của trang bám theo mã tham khảo, viết lại để sửa một số điểm:
- Bootstrap 5.3.3 thay cho 4.6.0, Font Awesome Free 6.5.2 thay cho bản Pro (bản Pro cần tài khoản nên không tải được).
- Đường dẫn tương đối (`css/style.css`) thay cho `/css/style.css`, để mở file trực tiếp hoặc đưa lên GitHub Pages đều chạy.
- Cỡ chữ và khoảng cách dùng `clamp()` thay cho `vmin`; thẻ tác giả không dùng `position: absolute` nên không bị tràn ở màn hình nhỏ.
- Bỏ jQuery. Nội dung viết lại thay cho Lorem ipsum.
- Ảnh lấy từ repo tham khảo (Pexels và ảnh chân dung mẫu), đã cắt và giảm dung lượng.
