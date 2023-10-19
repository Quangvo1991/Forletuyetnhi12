
  // Lấy tham chiếu đến nút và âm thanh
  var button = document.getElementById("myButton");
  var audio = document.getElementById("myAudio");

  // Thêm sự kiện click vào nút
  button.addEventListener("click", function() {
    // Kiểm tra nếu âm thanh đang phát, dừng lại và bắt đầu lại từ đầu
    if (audio.paused) {
      audio.currentTime = 0; // Đặt lại thời gian phát về 0
      audio.play(); // Phát âm thanh
    } else {
      audio.pause(); // Dừng âm thanh nếu đang phát
      audio.currentTime = 0; // Đặt lại thời gian phát về 0
    }
  });

  // Lắng nghe sự kiện click vào nút "Nhấn vào đi cậu"
document.getElementById("myButton").addEventListener("click", function () {
    // Đợi 10 giây trước khi mở tab mới
    setTimeout(function () {
        // Mở một tab mới với trang HTML mới
        window.open("page.html", "_blank");
    }, 6000); // 5000 milliseconds = 10 giây
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Mã JavaScript của bạn sẽ được đặt ở đây
  var button = document.querySelector('.box');
  var h3Element = document.querySelector('.popup h3');

  button.addEventListener('click', function () {
      // Hiển thị thẻ <h3>
      h3Element.style.display = 'block';
  });
});


