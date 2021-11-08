let query1 = document.getElementsByTagName('form');
// console.log(query1);
let query2 = document.getElementsByTagName('select');
console.log(query2);




  query2.addEventListener('click', function () {
    // document.getElementsByName("form").innerHTML = 'Your order has been submited';
    alert('Your order has been submited');
});