function result()
{
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
document.getElementById('total').innerHTML= total+" / 500";
document.getElementById('per').innerHTML=per;
document.getElementById('grade').innerHTML=grade;


}