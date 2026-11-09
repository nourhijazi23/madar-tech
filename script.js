// فتح النافذة المنبثقة للطلب / الحجز
function openModal(targetName = 'حجز مساحة عمل') {
    document.getElementById('modalTarget').value = targetName;
    document.getElementById('bookingModal').style.display = 'flex';
}

// إغلاق النافذة المنبثقة
function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    let modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeModal();
    }
}

// إرسال نموذج التواصل إلى واتساب المؤسسة
function sendToWhatsApp(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let service = document.getElementById('service').value;
    let message = document.getElementById('message').value;

    let text = `مرحباً مدار تك،%0Aأنا: ${name}%0Aرقم التواصل: ${phone}%0Aمهتم بـ: ${service}%0Aملاحظات: ${message}`;
    window.open(`https://wa.me/970590000000?text=${text}`, '_blank');
}

// إرسال نموذج الحجز السريع إلى واتساب المؤسسة
function sendModalToWhatsApp(e) {
    e.preventDefault();
    let name = document.getElementById('modalName').value;
    let phone = document.getElementById('modalPhone').value;
    let target = document.getElementById('modalTarget').value;

    let text = `مرحباً مدار تك،%0Aأرغب بحجز: ${target}%0Aالاسم: ${name}%0Aرقم التواصل: ${phone}`;
    window.open(`https://wa.me/970590000000?text=${text}`, '_blank');
    closeModal();
}