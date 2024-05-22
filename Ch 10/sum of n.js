const sum_of_n = (n) => (n==1 ? 1 : n+sum_of_n(n-1));
const sum = () => 
    {
        let value = parseInt(document.getElementById('n1').value);
        let sum = sum_of_n(value);
        document.getElementById('res').innerHTML = "Sum : "+sum;
    }