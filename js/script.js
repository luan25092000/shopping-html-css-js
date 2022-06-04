// Dùng để làm slide cho trang web
w3.slideshow(".slides", 1500);

// xử lý bot to top
// gọi button
var botToTopBtn = document.getElementById("myBtn");
// function xử lý đẩy lên đầu trang (bot to top)
window.onscroll = function() {handleScroll()}; // xử lý khi scroll màn hình thì hiện button

function handleScroll() {
    // debug (thăm dò) tọa độ để check xem tọa độ của trang mình sẽ tương ứng là bao nhiêu để mà cho ẩn/hiện button hợp lý
    console.log(document.documentElement.scrollTop);
    // giả sử cho toàn trang có tọa độ là 440 và nếu như tọa độ rơi vào > 20 thì sẽ cho hiện button
    if (document.documentElement.scrollTop >= 138) {
        botToTopBtn.style.display = "block";
    } else {
        botToTopBtn.style.display = "none";
    }
}

// đẩy trang lên đầu
function botToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    // behavior cho phép mình thêm độ mượt cho hiệu ứng
}