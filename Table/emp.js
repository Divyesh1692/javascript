// const data = 
// {
//     id : document.getElementById('i').value,
//     name : document.getElementById('n').value,
//     designation : document.getElementById('des').value,
//     salary : document.getElementById('s').value,
// };

function d()
{
    let id = document.getElementById('i').value;
    let name = document.getElementById('n').value;
    let designation = document.getElementById('des').value;
    let salary = document.getElementById('s').value;
    let t = document.getElementById('op');
    let td_id = document.createElement('td');
    let td_name = document.createElement('td');
    let td_des = document.createElement('td');
    let td_sal = document.createElement('td');
    let tr = document.createElement('tr');
    td_id.innerHTML = id;
    td_name.innerHTML= name;
    td_des.innerHTML= designation;
    td_sal.innerHTML = salary;
    tr.append(td_id,td_name,td_des,td_sal);
    t.append(tr);
}
 