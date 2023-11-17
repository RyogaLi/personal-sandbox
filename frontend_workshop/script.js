console.log("got it")
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('click', function(event){
        console.log(event);
        const color = event.target.style.backgroundColor = 'lightblue';
    })
});