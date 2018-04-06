
var customer = new Customer();
function Customer(){
    this.pizzas =[];
    this.price = 0;
    this.address;
  };

Customer.prototype.totalprice = function(){
    for (var i = 0; i < this.pizzas.length; i++){
        if(this.pizzas[i][0] == "small"){
            this.price = this.price + 3;
        }
        if(this.pizzas[i][0] == "large"){
            this.price = this.price + 6;
        }
        for ( var j=1; j< this.pizzas[i].length;j++ ){
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
        pizzaorder.push($('input[name=size]:checked').val());
        
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
        
        customer.address = $(".address").val();
        console.log(customer.address);
        $("h1#price").text(customer.totalprice());
        $("h1#display").text(customer.address);
        customer = new Customer();



    });
    $(".btn-warning").on('click',function(event){
        event.preventDefault();
        $("#address").append('<textarea class = "address"></textarea>');



    });
});
