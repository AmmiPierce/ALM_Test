export default function(event) {
    let sticker = event.target.closest('.sticker');

    if (!sticker || event.target.closest('.sticker textarea')) return;

    let desk = document.getElementById('desk');
    let deleteArea = document.getElementById('deleteArea');

    let shiftX = event.clientX - sticker.getBoundingClientRect().left;
    let shiftY = event.clientY - sticker.getBoundingClientRect().top;

    deleteArea.style.display = 'flex';

    let deleteAreaX = deleteArea.getBoundingClientRect().left;
    let deleteAreaY = deleteArea.getBoundingClientRect().top;

    let moveTo = (pageX, pageY) => {
        sticker.style.left = `${pageX - shiftX}px`;
        sticker.style.top = `${pageY - shiftY}px`;
    }

    let onMouseMove = (event) => {
        moveTo(event.pageX, event.pageY);
    }

    let onMouseUp = (event) => {
        if (event.pageX >= deleteAreaX && event.pageY >= deleteAreaY) {
            sticker.remove();
        }

        deleteArea.style.display = '';
        sticker.style.zIndex = '';

        document.removeEventListener('mousemove', onMouseMove);
        desk.removeEventListener('mouseup', onMouseUp);
    }

    sticker.style.zIndex = 100;
    moveTo(event.pageX, event.pageY);

    document.addEventListener('mousemove', onMouseMove);  
    desk.addEventListener('mouseup', onMouseUp);
};