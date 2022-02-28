export default function () {
    let stickers = document.querySelectorAll('.sticker');
    let stickersInfo = {};
    
    stickers.forEach((sticker, index) => {
        let textarea = sticker.querySelector('textarea');

        stickersInfo[`sticker${index}`] = {
            value: textarea.value,
            width: textarea.offsetWidth,
            height: textarea.offsetHeight,
            posX: sticker.getBoundingClientRect().left,
            posY: sticker.getBoundingClientRect().top,
        }
    });

    localStorage.setItem('stickers', JSON.stringify(stickersInfo));
}