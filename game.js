const correctCode = "1422"; // ตั้งค่ารหัสที่ถูกต้อง

document.getElementById("submitCode").addEventListener("click", function() {
    const userCode = document.getElementById("codeInput").value;
    if (userCode === correctCode) {
        alert("รหัสถูกต้อง! ไปยังหน้าถัดไป");
        window.location.href = "quest7.4.html"; // เปลี่ยนเป็นหน้าถัดไปของเกม
    } else {
        alert("รหัสผิด ลองอีกครั้ง!");
    }
});
function nextScene() {
    window.location.href = "scene7.html";
}
