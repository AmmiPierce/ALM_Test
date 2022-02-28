export default function (stickerInfo = null) {
    let sticker = document.createElement('div');
    let textarea = document.createElement('textarea');

    sticker.classList.add('sticker');

    if (stickerInfo) {
        textarea.value = stickerInfo.value;
        textarea.style.cssText = `width:${stickerInfo.width}px;height:${stickerInfo.height}px`;
        sticker.style.cssText = `left:${stickerInfo.posX}px;top:${stickerInfo.posY}px`;
    }

    sticker.append(textarea);
    document.querySelector('.desk').append(sticker);
}