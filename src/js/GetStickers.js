import AddSticker from "./AddSticker";

export default function () {
    let stickersInfo = localStorage.getItem('stickers');

    if (!stickersInfo) return;

    for (let sticker of Object.values(JSON.parse(stickersInfo))) {
        AddSticker(sticker);
    }
}