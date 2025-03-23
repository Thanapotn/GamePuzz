function typeEffect(elementId, text, speed = 50) {
    let index = 0;
    const element = document.getElementById(elementId);
    const lines = text.split("\n"); // แยกข้อความออกเป็นหลายบรรทัด
    let lineIndex = 0;
    
    function type() {
        if (lineIndex < lines.length) {
            let currentLine = lines[lineIndex];
            if (index < currentLine.length) {
                element.innerHTML += currentLine.charAt(index); // ใช้ innerHTML เพื่อให้รองรับ <br>
                index++;
                setTimeout(type, speed);
            } else {
                lineIndex++;
                index = 0;
                element.innerHTML += "<br>"; // เพิ่มการขึ้นบรรทัดใหม่หลังจากพิมพ์เสร็จ
                setTimeout(type, speed); // เริ่มพิมพ์บรรทัดถัดไป
            }
        }
    }
    type();
}
