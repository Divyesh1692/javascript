function result()
{
    let sstd = document.getElementById('std').value;
    let sname = document.getElementById('name').value;
    let maths = parseInt(document.getElementById('maths').value);
    let sci = parseInt(document.getElementById('science').value);
    let guj = parseInt(document.getElementById('gujrati').value);
    let eng = parseInt(document.getElementById('english').value);
    let comp = parseInt(document.getElementById('computer').value);
    let grade, total, per;
    total = parseInt(maths+sci+guj+eng+comp);
    per = (total/500)*100;
    if(per>=90)
        {
            grade = 'Pass - A1';
        }
    else if(per>=80 && per<90)
        {
            grade = 'Pass - A2';
        }
    else if(per>=70 && per < 80)
        {
            grade = 'Pass - B1';
        }
    else if(per>=60 && per<70)
        {
            grade = 'Pass - B2';
        }
    else if(per>=50 && per<60)
        {
            grade = 'Pass - C';
        }
    else if(per>=33 && per<50)
        {
            grade = 'Pass - D';
        }
    else {
        grade = 'Fail';
    }    
document.getElementById('total').innerHTML= "Total : "+ total+" / 500";
document.getElementById('sname').innerHTML= "Name : "+sname;
document.getElementById('sstd').innerHTML= "Standard : "+sstd;
document.getElementById('per').innerHTML="Percentage : "+per;
document.getElementById('grade').innerHTML="Grade : "+grade;
document.getElementById('m').innerHTML = "Maths : "+maths +" /100";
document.getElementById('s').innerHTML = "Science : "+sci +"/ 100";
document.getElementById('g').innerHTML = "Gujrati : "+ guj +"/ 100";
document.getElementById('e').innerHTML = "English : "+eng +"/ 100";
document.getElementById('c').innerHTML = "Computer : "+comp +"/ 100";

}