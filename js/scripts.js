
var customer = new Customer();
function Customer(){
    this.pizzas =[];
    this.price = 0;
  };

Customer.prototype.totalprice = function(){
    for (var i = 0; i < this.pizzas.length; i++){
        for ( var j=0; j< this.pizzas[i].length;j++ ){
            if (this.pizzas[i][j] == "xcheese" || this.pizzas[i][j] == "pepperoni" )
            {this.price = this.price+2}
            if (this.pizzas[i][j] == "artichokes" || this.pizzas[i][j] == "anchovy" )
            {this.price = this.price+3}
        }

    }
    return this.price;
}

$(document).ready(function(){
    $(".btn-primary").on('click',function(event){
        event.preventDefault();
        var boxes = document.getElementsByClassName("form-check-input");
        var pizzaorder = [];
        for ( var i = 0; i < boxes.length; i++){

            if(boxes[i].checked === true){
               pizzaorder.push(boxes[i].value);
               
               
            }
        }
        customer.pizzas.push(pizzaorder);
        
        $('input[type=checkbox]').each(function() 
        { 
                this.checked = false; 
        }); 
    });
    $(".btn-dark").on('click',function(event){
        event.preventDefault();
        console.log("hello "+customer.pizzas);
        $("h1").text(customer.totalprice());


    });
});
