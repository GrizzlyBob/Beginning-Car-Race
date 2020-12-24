class form{
    constructor(){
this.input = createInput("name")
this.button = createButton('play')
this.greeting = createElement('h2')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("car racing game")
        title.position(130,0)
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player1.name = this.input.value()
            playerCount+=1
            player1.index = playerCount
            player1.update()
            player1.updateCount(playerCount)
            this.greeting.html("Hello"+player1.name)
            this.greeting.position(130,160)
        })
    }
}