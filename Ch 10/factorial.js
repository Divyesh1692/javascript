const fact = (n) => (n==1 ? 1 : n*fact(n-1));
const factorial = () => 
    {
        let value = parseInt(document.getElementById('n1').value);
        let f = fact(value);
        document.getElementById('res').innerHTML = "Factorial : "+f;
    }