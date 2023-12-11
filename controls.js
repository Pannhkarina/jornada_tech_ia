export default{
    jump: new KeyboardEvent('keydown',{key: 'Space', keyCode: 32}),
    crounch: new KeyboardEvent('Keydown', {key: 'ArrowDown', KeyCode: 40}),
    dispatch(event){
        document.dispatchEvent(this[event]);
        
    }
}