const pieces = document.querySelectorAll('.draggable');
const dropZone = document.getElementById('dropZone');
const dropText = document.getElementById('dropText');
const checkButton = document.getElementById('checkButton');

// เก็บข้อมูลชิ้นส่วนที่ถูกวาง
let placedPieces = [];

pieces.forEach(piece => {
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

// ปล่อยลง Drop Zone
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const piece = document.getElementById(pieceId);

    // ถ้าชิ้นส่วนอยู่ใน Drop Zone อยู่แล้ว ให้คืนกลับไป
    if (placedPieces.includes(pieceId)) {
        return;
    }

    // ลบออกจากตำแหน่งเดิมก่อน
    piece.parentNode.removeChild(piece);

    // เพิ่มลงใน Drop Zone
    dropZone.appendChild(piece);
    piece.classList.add('placed');
    placedPieces.push(pieceId);

    // ซ่อนข้อความ "ลากมาตรงนี้" ถ้ามีชิ้นส่วน
    if (placedPieces.length > 0) {
        dropText.style.display = 'none';
    }
});

// ลากชิ้นส่วนออกจาก Drop Zone
dropZone.addEventListener('click', (e) => {
    if (e.target.classList.contains('placed')) {
        e.target.classList.remove('placed');
        document.getElementById('pieces').appendChild(e.target);
        
        // เอาออกจากอาร์เรย์
        placedPieces = placedPieces.filter(id => id !== e.target.id);

        // แสดงข้อความ "ลากมาตรงนี้" ถ้าไม่มีชิ้นส่วนเหลือ
        if (placedPieces.length === 0) {
            dropText.style.display = 'block';
        }
    }
});

// ตรวจสอบเมื่อกดปุ่ม
checkButton.addEventListener('click', () => {
    if (placedPieces.length !== 4) {
        alert('ยังมีชิ้นส่วนที่ขาดหาย!');
        return;
    }
    alert('ยินดีด้วย! คุณประกอบภาพสำเร็จแล้ว');
    window.location.href = "anspuzzel.html";
});
