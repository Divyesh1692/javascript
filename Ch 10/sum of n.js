function sum()
{
    let n = parseInt(document.getElementById('n1').value);
    sum_of_n(n);
    
}
function sum_of_n(n)
{
    let res = document.getElementById('res');
    parseInt(res.innerHTML += n);
    

    if(n>=1)
        {
            sum_of_n(n);
        }
}