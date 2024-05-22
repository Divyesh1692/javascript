const fibonacci = (n) => { 
    if (n <= 1) { 
        return n; 
    } 
    return fibonacci(n - 1) + fibonacci(n - 2); 
} 
  
const fibo = () =>{
let n = parseInt(document.getElementById('n1').value);
let f = "";
  
for (let i = 0; i < n; i++) { 
    f += (fibonacci(i))+" "; 
};
        document.getElementById('res').innerHTML = "Fibonacci Series : "+f;
}