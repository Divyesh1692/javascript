function sum()
{
    let a = parseInt(document.getElementById('n1').value);
    let b = parseInt(document.getElementById('n2').value);
    let c = parseInt(document.getElementById('n3').value);
    let sum = a+b+c;
    document.getElementById('res').innerHTML = "Sum Of Given Numbers Is : "+sum;
}
function sub()
{
    let a = parseInt(document.getElementById('n1').value);
    let b = parseInt(document.getElementById('n2').value);
    let c = parseInt(document.getElementById('n3').value);
    let d = parseInt(document.getElementById('n4').value);

    let sub = a-b-c-d;
    document.getElementById('res').innerHTML = "Substraction Of Given Numbers Is : "+sub;
}
function multi()
{
    let a = parseInt(document.getElementById('n1').value);
    let multi = a*50;
    document.getElementById('res').innerHTML = "Result : "+multi;
}

function square()
{
    let a = parseInt(document.getElementById('n1').value);
    let square = a*a;
    document.getElementById('res').innerHTML = "Square : "+square;
}
function name_age()
{
    let name = document.getElementById('name').value
    let age = parseInt(document.getElementById('age').value);
    document.getElementById('res').innerHTML = "Name : "+name + "<br>Age : "+age;
    
}

function odd_even()
{
    let a = parseInt(document.getElementById('n1').value);
    let res;
    if(a%2==0)
        {
            res = "Even";
        }
    else{
        res = "Odd";
    }
    document.getElementById('res').innerHTML = "Given Nimber Is : "+res;

}

function product()
{
    let a = parseInt(document.getElementById('n1').value);
    let b = parseInt(document.getElementById('n2').value);
    let c = parseInt(document.getElementById('n3').value);
    let d = parseInt(document.getElementById('n4').value);
    let e = parseInt(document.getElementById('n5').value);

    let pro = a*b*c*d*e;
    document.getElementById('res').innerHTML = "Product of Given Numbers Is : "+pro;
}