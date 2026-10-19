# Tối ưu CSS bằng SASS variables và mixins

```bash
sass scss/main.scss css/main.css
```

## Cấu trúc
```
sass-mixins-variables/
├── original/styles.css           # CSS gốc của đề bài
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss       # $primary-color, $text-color, $font-large, ...
│   │   ├── _mixins.scss          # button-style($bg-color), box-style
│   │   └── _index.scss           # @forward variables + mixins
│   ├── base/_typography.scss     # h1, h2
│   ├── components/_buttons.scss  # .button
│   ├── components/_cards.scss    # .card
│   └── main.scss                 # gom tất cả partials
├── css/main.css                  # kết quả biên dịch
└── index.html                    # trang demo
```

## Khác với đề bài
`main.scss` dùng `@use` thay cho `@import` (`@import` đã deprecated, sẽ bị xóa ở Dart Sass 3.0). Mỗi partial cần biến/mixin tự `@use "../abstracts" as *;`, và `abstracts/_index.scss` gom sẵn hai file. Đề không nói rõ nội dung `main.scss` nên tôi tạo file này để biên dịch.

## Kiểm tra
- `css/main.css` giống hệt `original/styles.css` (so sánh sau khi chuẩn hóa khoảng trắng).
- Render `index.html` bằng CSS gốc và bằng `main.css` cho ảnh trùng từng pixel.
- Đổi `$primary-color: red` thành `#2ecc71` rồi biên dịch lại thì `.button` đổi màu, chỉ sửa 1 dòng.
