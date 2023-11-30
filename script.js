document.getElementById("btn").addEventListener("click", placeOrder);

function placeOrder() {
  let size = document.getElementById("size-in").value;
  let topping1 = document.getElementById("topping1-in").value;
  let topping2 = document.getElementById("topping2-in").value;

  let outputOrder = `Your ${size} pizza with
  <ul>
  <li>${topping1}
  <li>${topping2}
  <ul/>`;

  document.getElementById("Order").innerHTML = outputOrder;
  document.getElementById("Img").innerHTML =
    '<img width= "300px" id="Pizza-Pic" src="img/pizza.jpg">';
}
