// function numberprint()
// {
//     //const s = "sadi"
// for (let i = 0; i <= 10; i++) {
//     console.log("s");
// }
// }
// numberprint();

class shape{
    square(){
        this.width = 10;
        this.height = 15;
    }

    showshape(){
        console.log(this.width, this.height);
    }

}

const result = new shape();
result.square();
result.showshape();
