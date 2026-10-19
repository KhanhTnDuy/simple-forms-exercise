# Chuyển đổi CSS sang SASS theo chuẩn

## Biên dịch
```bash
sass scss/main.scss css/main.css      # biên dịch 1 lần
sass scss/main.scss css/main.css --watch
```

## Cấu trúc
```
css-to-sass/
├── original/styles.css        # CSS gốc của đề bài
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss    # $primary-color, $text-color, ...
│   │   ├── _mixins.scss       # button-style($bg-color), box-shadow
│   │   └── _index.scss        # @forward variables + mixins
│   ├── base/_global.scss      # body
│   ├── layout/_container.scss # .container
│   ├── components/
│   │   ├── _buttons.scss      # .button (có nesting &:hover)
│   │   └── _cards.scss        # .card  (có nesting h3)
│   └── main.scss              # gom tất cả partials
├── css/main.css               # kết quả biên dịch
└── index.html                 # trang demo
```

## Khác với đề bài
- `main.scss` dùng `@use` thay cho `@import`. `@import` đã bị Dart Sass đánh dấu deprecated và sẽ bị xóa ở Dart Sass 3.0. Tên thư mục/partial giữ nguyên như đề.
  Vì `@use` không chia sẻ biến toàn cục, mỗi partial cần biến/mixin phải tự `@use "../abstracts" as *;` (file `abstracts/_index.scss` gom sẵn).
- Đề nêu mục tiêu "nesting" nhưng code mẫu chưa có chỗ nào lồng nhau, nên tôi thêm 2 ví dụ nhỏ: `.button { &:hover }` và `.card { h3 }`.

## Kiểm tra
Trước khi thêm 2 ví dụ nesting, CSS biên dịch ra **giống hệt** `original/styles.css` (so sánh sau khi chuẩn hóa khoảng trắng), nghĩa là chuyển đổi không làm đổi giao diện.
