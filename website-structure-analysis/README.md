# Phân tích và xây dựng cấu trúc Website Template

**Trang web được phân tích:** Trang chủ VnExpress – https://vnexpress.net (xem ngày 20/10/2026, cửa sổ trình duyệt rộng khoảng 1100px).

**Ảnh chụp trang gốc** (thư mục `original/`):

| Ảnh | Nội dung |
|---|---|
| `original/vnexpress-top-with-ad.jpg` | Đầu trang, có cả banner quảng cáo phía trên header |
| `original/vnexpress-header-nav-content.jpg` | Header, thanh menu và phần nội dung đầu trang |
| `original/vnexpress-footer.jpg` | Footer |

**Bài làm dựng lại:** `index.html` + `style.css` (bố cục tương tự, dùng khung xám thay cho hình ảnh, đổi tên thành "Tin Tức 24h" để không sao chép thương hiệu).

---

## 1. Phân tích cấu trúc trang gốc

Trang được xếp **từ trên xuống dưới** thành 4 khối chính. Toàn bộ nội dung nằm trong một khung giới hạn chiều rộng (khoảng 1100px) và được căn giữa.

### Header
- Thẻ `<header>` cao khoảng **62px**, nền trắng, có đường kẻ mỏng phía dưới.
- Chia làm **hai phía**: bên trái là logo kèm khẩu hiệu "Báo tiếng Việt nhiều người xem nhất" (cùng thông tin thời tiết); bên phải là các liên kết nhanh (Mới nhất, Tin theo khu vực, Tìm kiếm, Đăng nhập). Hai phía cách xa nhau, căn giữa theo chiều dọc.

### Navigation Menu
- Thẻ `<nav>` cao khoảng **50px**, nằm ngay dưới header.
- Là **một hàng ngang** gồm nhiều chuyên mục (Thời sự, Thế giới, Kinh doanh, Pháp luật, Khoa học công nghệ, Thể thao, Giải trí, Sức khỏe, Đời sống…). Khi màn hình hẹp, menu có nút mũi tên để cuộn ngang.
- Menu **dính trên đầu cửa sổ khi cuộn trang** (`position: sticky`), nên người đọc luôn chuyển được chuyên mục.

### Content Section
- Chia **hai cột**: cột chính bên trái rộng khoảng **750px** và cột phụ (sidebar) bên phải rộng khoảng **300px**, cách nhau khoảng 20px.
- **Cột chính**, xếp dọc:
  1. *Tin nổi bật*: ảnh lớn bên trái, tiêu đề + đoạn mô tả + thời gian bên phải.
  2. *Hàng ba tin phụ*: ba cột đều nhau, mỗi tin gồm tiêu đề phía trên và ảnh phía dưới.
  3. Các khối tin theo chuyên mục (danh sách tin có ảnh nhỏ bên trái, chữ bên phải).
- **Sidebar**: chủ yếu là khung quảng cáo cao, nằm cạnh cột chính.
- Các tin được ngăn cách bằng đường kẻ mỏng, tiêu đề dùng chữ đậm, mô tả dùng chữ xám nhỏ hơn.

### Footer
- Nền xám nhạt, có đường kẻ dày ở trên để tách khỏi nội dung.
- **Hàng trên**: nhiều cột liên kết (Trang chủ/Ảnh/Infographics, các chuyên mục chia thành 3 cột, Mới nhất/Xem nhiều…) cùng một cột liên hệ ở ngoài cùng bên phải (tải ứng dụng, liên hệ tòa soạn, liên hệ quảng cáo).
- **Hàng dưới**: thông tin giấy phép, địa chỉ tòa soạn và dòng bản quyền "© 1997-2026…", xếp thành vài cột nằm ngang.

### Tóm tắt cách bố trí

```
┌──────────────────────────────────────────────┐
│ HEADER   [Logo + khẩu hiệu]      [Liên kết nhanh] │  62px
├──────────────────────────────────────────────┤
│ NAV      Trang chủ | Thời sự | Thế giới | ...     │  50px, dính khi cuộn
├──────────────────────────────┬───────────────┤
│ CONTENT  Tin nổi bật (ảnh+chữ)│   SIDEBAR     │
│          3 tin phụ            │   Quảng cáo   │
│          Danh sách tin        │   Xem nhiều   │
│          (~750px)             │   (~300px)    │
├──────────────────────────────┴───────────────┤
│ FOOTER   Cột link | Cột link | ... | Liên hệ      │
│          Bản quyền ...                              │
└──────────────────────────────────────────────┘
```

---

## 2. Xây dựng lại bố cục bằng HTML & CSS

| Phần | Thẻ HTML | Kỹ thuật CSS chính |
|---|---|---|
| Khung giới hạn | `.container` | `max-width: 1100px; margin: 0 auto;` |
| Header | `<header>` | `display: flex; justify-content: space-between; align-items: center;` |
| Navigation | `<nav>` + `<ul>` (9 mục) | `position: sticky; top: 0;` và `display: flex; gap` |
| Content | `<main>` + `<aside>` | `display: flex;` cột chính `flex: 1`, sidebar `width: 300px` |
| Tin nổi bật | `.top-story` | `display: flex` (ảnh trái, chữ phải) |
| Ba tin phụ | `.story-row` | `display: grid; grid-template-columns: repeat(3, 1fr);` |
| Footer | `<footer>` | `display: flex; justify-content: space-between;` |

Kết quả đo trong trình duyệt (màn hình 1280px): header 62px, menu 50px và dính trên đầu khi cuộn, cột chính 750px, sidebar 300px, footer 5 cột (4 cột liên kết + 1 cột liên hệ).

**Responsive:** dưới 900px sidebar xuống dưới cột chính; dưới 600px tin nổi bật và hàng tin phụ xếp thành một cột, footer chia hai cột mỗi hàng.

**Ảnh chụp bài làm:** `rebuilt-desktop.png`, `rebuilt-tablet.png`, `rebuilt-mobile.png`.
