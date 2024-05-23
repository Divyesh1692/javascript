function age()
{
     let day = parseInt(document.getElementById('d').value);
     let month = parseInt(document.getElementById('m').value);
     let year = parseInt(document.getElementById('y').value);
     let day1 = parseInt(document.getElementById('d1').value);
     let month1 = parseInt(document.getElementById('m1').value);
     let year1 = parseInt(document.getElementById('y1').value);

     let d,m,y,d1,m1,y1;
     y = (year1-year); 
     m = (month1-month);
     d = (day1-day);
     m1 = month - month1;
     d1 = day - day1;
     if(day >= day1)
        {
            d = 30+d;
        }
    if(month > month1)
        {
            m = 12+m;
            y = y-1;
        }    
    if(month == month1)
        {
            y1 = 0;
            m = 0;
            m1 = m1+12;
        }    
    if(day <= day1)
        {
            d1 = 30+d1;
            m1 = m1-1;
        }
    if(month < month1)
        {
            y1 = 1;
        }    
        else{
            y1 = 0;
        }
     document.getElementById('age').innerHTML = "You Are "+y+ "Years " +m+"Months "+ d+"Days Old";
     document.getElementById('bday').innerHTML = "Your Next Birthday Will Be After "+y1+"Years "+m1+"Months "+d1+"Days ";

}