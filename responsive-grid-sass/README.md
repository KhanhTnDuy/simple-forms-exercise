# Tái cấu trúc CSS của responsive-grid sang SASS

Mã nguồn gốc: https://github.com/codegym-vn/responsive-grid (file `responsive_grid.htm`, lưu lại ở `original/`).

```bash
sass scss/main.scss css/main.css
```

## Cấu trúc
```
responsive-grid-sass/
├── original/responsive_grid.htm   # bản gốc (CSS nhúng + rất nhiều inline style)
├── index.html                     # HTML đã gỡ inline style, dùng class
├── scss/
│   ├── abstracts/
│   │   ├── _variables.scss        # màu, kích thước, map $wrapper-heights
│   │   ├── _mixins.scss           # full-bar, plain-column, guide-column
│   │   └── _index.scss            # @forward variables + mixins
│   ├── base/_reset.scss           # * { box-sizing }
│   ├── layout/_grid.scss          # .gridoverlay, .gridcontainer, .gridwrapper
│   ├── components/_gridcontent.scss
│   ├── components/_gridblock.scss
│   └── main.scss
└── css/main.css                   # kết quả biên dịch
```

## Đã áp dụng
- **Biến:** màu (`$color-purple`, `$color-blue`, ...), `$column-width`, `$panel-width`, độ trong suốt.
- **Mixins:** `full-bar($bg-color)` cho thanh header/footer, `plain-column`, `guide-column`.
- **Nesting với `&`:** `.gridcontent { &--header, &--panel, &--guide { &:first-child } }`, `.gridblock { &:last-child, &--tall }`.
- **Map + `@each`:** `$wrapper-heights` sinh ra `.gridwrapper--header/body/footer/guide`.
- **Partials:** chia theo `abstracts`, `base`, `layout`, `components`, gom bằng `main.scss`.
- **Gỡ inline style:** các style nằm trong thuộc tính `style=""` của bản gốc được chuyển thành class (BEM: `gridcontent--panel`...).

## Lưu ý
- `main.scss` dùng `@use` thay `@import` (`@import` đã deprecated).
- Bản gốc khai báo `background-color` 2 lần trong `.gridcontent` (`#84c754` rồi `#f1f1f1`); giá trị đầu bị ghi đè nên đã bỏ.
- Bản gốc có `charset=windows-1252`; bản mới dùng UTF-8 (nội dung chỉ có ký tự ASCII nên không ảnh hưởng).
- Giữ nguyên `8.33%` của bản gốc (không đổi thành 1/12 chính xác) để giao diện không đổi.

## Kiểm tra
Render `original/responsive_grid.htm` và `index.html` ở các độ rộng 320, 375, 768, 1000, 1111, 1440px: ảnh chụp trùng từng pixel (độ lệch 0).
