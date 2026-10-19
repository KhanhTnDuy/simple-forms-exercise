# Thực hành cài đặt SASS bằng npm & SASS CLI

## 1. Kiểm tra Node.js và npm
```bash
node -v     # v22.22.0
npm -v      # 10.9.4
```
Nếu chưa có Node.js: tải bản cài đặt tại https://nodejs.org (Windows: `.msi`, macOS: `.pkg`, Linux: làm theo hướng dẫn), cài xong chạy lại `node -v`.

## 2. Cài SASS và kiểm tra phiên bản
```bash
npm install -g sass
sass --version     # 1.105.2 compiled with dart2js 3.13.5
```
> Lưu ý: bản Dart Sass hiện tại **không còn cờ `-v`** (`sass -v` báo `Could not find an option or flag "-v"`). Hãy dùng `sass --version`.

## 3. Biên dịch một file SCSS
```bash
sass styles.scss styles.css
```
`styles.scss` dùng biến, mixin và nesting.

## 4. Chế độ `--watch`
```bash
sass styles.scss styles.css --watch
```
Sửa `$primary` trong `styles.scss` -> `styles.css` tự cập nhật, không cần gõ lại lệnh (xem `terminal-log.txt`). Dừng bằng `Ctrl + C`.

## 5. Biên dịch nhiều file bằng thư mục vào/ra
```bash
sass scss/:css/ --watch
```
`scss/header.scss` và `scss/buttons.scss` được biên dịch thành `css/header.css` và `css/buttons.css`. Thêm file `.scss` mới vào `scss/` khi đang watch thì file `.css` tương ứng tự sinh ra.

## 6. Lỗi "Set-ExecutionPolicy" trên Windows
Nếu PowerShell chặn chạy script khi gọi `sass`/`npm`, mở PowerShell với quyền Administrator và chạy:
```powershell
Set-ExecutionPolicy Unrestricted
```
(Phần này chưa thử được vì môi trường làm bài là Linux. Chỉ dùng khi gặp lỗi quyền.)

## Cấu trúc thư mục
```
sass-practice/
├── index.html          # trang dùng các file CSS đã biên dịch
├── styles.scss / styles.css
├── scss/header.scss, buttons.scss
├── css/header.css, buttons.css
├── terminal-log.txt    # nhật ký các lệnh đã chạy
└── screenshot-*.png
```
