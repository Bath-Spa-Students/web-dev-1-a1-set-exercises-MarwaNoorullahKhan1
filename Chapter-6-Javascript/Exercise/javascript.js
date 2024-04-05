function calculateCost() {
    // Get input value and store in variables
    let price = document.getElementById('price').value;
    let amount = document.getElementById('litre').value;
    
    // If user input is none, get placeholder and store in declared vars
    if (price == 0) price = document.getElementById('price').placeholder; // price == 0 means there is only the placeholder and no user input
    if (amount == 0) amount = document.getElementById('litre').placeholder; // amount == 0 means there is only the placeholder and no user input
    
    // Multiply price and amount and display in <p> with '#cost'
    document.getElementById('cost').innerText = (price * amount).toFixed(2); // Ensure toFixed(2) to display the result with 2 decimal places
}
