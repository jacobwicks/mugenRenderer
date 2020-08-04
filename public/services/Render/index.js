// Draw everything
const render = (context) => {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    // Player 1
    renderPlayer(player1);
    //renderPlayer( player2 );

    // Infos debug
    const text = 'FPS:' + fps + ' - action:' + player1.action;

    context.fillStyle = '#000';
    context.font = '10px  Lucida Console';
    context.textBaseline = 'bottom';
    context.fillText(text, 10, 20);
};

export default render;
