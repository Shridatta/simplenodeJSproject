
function placeandorder(orderNumber)
{
    console.log("the order is" ,orderNumber);

    cookanddeliver(function()
    {
       console.log("the delivery is",orderNumber);
    });
}


function cookanddeliver(callback)
{
    setTimeout(callback,5000);
}


placeandorder(1);
placeandorder(2);
placeandorder(3);
placeandorder(4);
placeandorder(5);
placeandorder(6);
