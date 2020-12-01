class Food{
    constructor(){
        this.foodstock=0;
        this.lastfed=0;
        this.addFood=createButton("Add food");
        this .fed=createButton("Feed Dog")
    }
    display(){
this.addFood.mousePressed(()=>{
    this.foodstock+=20;
    this.writeStock(this.foodstock)
})
    }
   
      readStock(data){
        foods=data.val();
      
      
      }
       writeStock(x){
        database.ref("/").update({
          foods:x
        });
      }

}