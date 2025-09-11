// Make the box move
 function slideIt () {
    let bx = document.querySelector('#js');
    let bxStyle = getComputedStyle(bx);
    let dir = bxStyle.getPropertyValue('--animName');

    bx.style.animationName = dir;
    bx.style.animationPlayState = 'running';
    console.log('direction changed to ' + dir);

    /* use if you are setting all the properties via JS.
    We've already set these properties in the style rule for the box */
    
    //bx.style.animationDuration = '2s';
    //bx.style.animationTimingFunction = 'ease-in-out';
    //bx.style.animationIterationCount = 'infinite';
}
