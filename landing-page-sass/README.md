# Tái cấu trúc CSS của Landing Page sang SASS

Landing page "NovaTech" gồm 4 phần của bài Template: **navigation + header**, **sản phẩm nổi bật**, **số liệu thống kê**, **footer**.

```bash
sass scss/main.scss css/main.css          # biên dịch
sass scss/main.scss css/main.css --watch  # tự biên dịch khi sửa SCSS
```

## Cấu trúc
```
landing-page-sass/
├── original/                  # TRƯỚC: index.html + style.css (CSS thuần, 326 dòng)
├── index.html                 # SAU: cùng HTML, dùng css/main.css
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss    # màu, font, breakpoints, map $product-gradients
│   │   ├── _mixins.scss       # respond, flex, grid, gradient, button-variant
│   │   └── _index.scss        # @forward variables + mixins
│   ├── base/                  # _reset, _typography
│   ├── layout/                # _container (+ section), _header (+ hero), _footer
│   ├── components/            # _buttons, _products, _stats
│   └── main.scss              # gom tất cả partials
└── css/main.css               # kết quả biên dịch
```

## Tính năng SASS đã áp dụng
- **Variables:** toàn bộ màu, font, bán kính, đổ bóng, độ rộng container. Đổi `$color-primary` một lần là đổi màu chủ đạo cả trang.
- **Nesting:** `.header .container`, `.nav ul/a`, `.hero h1/p/.btn`, `.footer-col h4/li/a`, `&:hover`, `&-primary`, `&-number`...
- **Mixins:** `respond($name)` (media query theo tên breakpoint, dùng `@content`), `flex`, `grid`, `gradient`, `button-variant` (3 loại nút từ một mixin).
- **Map + `@each`:** `$breakpoints` và `$product-gradients` (sinh `.product-img--1/2/3`).
- **Module:** `@use`, `@forward`, `sass:map`, `sass:list`.
- **Partials:** chia theo `abstracts`, `base`, `layout`, `components`.
- Các media query nằm ngay trong từng block (`@include respond(tablet)`) thay cho 2 khối `@media` dài ở cuối file như CSS gốc.

## Lưu ý
- **Đề không đính kèm mẫu thiết kế** và code CSS của 4 bài trước không có trong repo, nên landing page này do tôi tự dựng theo đúng 4 phần đề liệt kê. Nếu cần khớp đúng mẫu của khóa học, chỉ cần thay HTML và chỉnh lại biến trong `_variables.scss`.
- `main.scss` dùng `@use` thay `@import` (`@import` đã deprecated).

## Kiểm tra
Render `original/index.html` (CSS thuần) và `index.html` (CSS từ SCSS) ở các độ rộng 320, 375, 480, 481, 768, 769, 1000, 1100, 1440px (ảnh toàn trang) và ở trạng thái hover của nút, card, link nav, link footer: ảnh trùng từng pixel (độ lệch 0), không tràn ngang.
