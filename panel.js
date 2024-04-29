class Panel {
    constructor() {

    }
    draw() {
        context.fillStyle = 'rgba(255,0,0,0.8)';
        context.resetTransform() // 변환 자체를 초기화
        // context.setTransform(1,0,0,1,0,0);
        context.fillRect(oX-150, oY-150, 300, 300);
        context.fillStyle = "#fff";
        if(selectedBox) {
            context.fillText(selectedBox.index, oX, oY)
        }
    }
}