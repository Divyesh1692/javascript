let list = [];
function add()
{
    let item = document.getElementById('1').value;
    let list = [];
    list.push(item);
    let t = document.getElementById('t');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML=item;
    tr.append(td);
    t.append(tr);

}

function remove()
{
    let item = document.getElementById('2').value;
    console.log(item);
    delete list[0];
}