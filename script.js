var sum1, val, rsum;
sum1 = rsum = 0;

function AddFood() {
   if(document.getElementById('item_name').value==""||document.getElementById('calories').value=="")
   {
      alert("Enter all values")
   }
   else if(!isNaN(document.getElementById('calories').value))
   {
   for (var r = 1; r < parseInt(2, 10); r++) {
      var x = document.getElementById("Food_items").insertRow(r);
      for (var c = 0; c < parseInt(2, 10); c++) {
         var y = x.insertCell(c);
         if (c == 0)
         {
            y.innerHTML = document.getElementById('item_name').value;
         }
         else
         {
            y.innerHTML = document.getElementById('calories').value;
            sum1 = sum1 + parseFloat(document.getElementById('calories').value);
         }
      }
   }
   for (var r = 1; r < parseInt(2, 10); r++) {
      for (var c = 0; c < parseInt(3, 10); c++) {
         if (c == 0)
         {
            var x=document.getElementById('final').rows[parseInt(r,10)].cells;
            x[parseInt(c,10)].innerHTML=sum1.toFixed(2);
         }
         else if(c == 1)
         {
            var x=document.getElementById('final').rows[parseInt(r,10)].cells;
            x[parseInt(c,10)].innerHTML=val.toFixed(2);
         }
         else if(c == 2)
         {
            var x=document.getElementById('final').rows[parseInt(r,10)].cells;
            rsum = val-sum1;
            if(rsum<0)
            {
               document.getElementById('ID').style.color = "red";
               x[parseInt(c,10)].innerHTML=rsum.toFixed(2);
               document.getElementById("excess").style.display="block";
               alert("Daily Limit Exceeded!");
            }
            else
            {
               x[parseInt(c,10)].innerHTML=rsum.toFixed(2);
            }
         }
         
      }
   }
   }
   else
   {
      alert("Calories has to be a number")
   }
   document.getElementById('item_name').value = "";
   document.getElementById('calories').value = "";
}
function Cal() {
   if((document.getElementById('height').value=="")||(document.getElementById('weight').value=="")||(document.getElementById('age').value==""))
   {
      alert("Enter all values")
   }
   else if(!isNaN(document.getElementById('height').value) && !isNaN(document.getElementById('weight').value) && !isNaN(document.getElementById('age').value))
   {
      if(((document.getElementById('height').value)>230)||((document.getElementById('height').value)<30))
      {
      alert("Height must be in the range of 30 to 230cm");
      }
      else if(((document.getElementById('weight').value)>150)||((document.getElementById('weight').value)<1))
      {
      alert("Weight must be in the range of 1 to 150kg");alert("Enter values for height and weight")
      }
      else if(((document.getElementById('age').value)>120)||((document.getElementById('age').value)<1))
      {
      alert("Age must be in the range of 1 to 120 years");
      }
      else
      {
      {
         var bmi;
         for (var r = 1; r < parseInt(4, 10); r++) {
            var x = document.getElementById('info').insertRow(r);
            for (var c = 0; c < parseInt(2, 10); c++) {
               var y = x.insertCell(c);
               if (r == 1) {
                  if (c == 0)
                     y.innerHTML = "BMI:";
                  else {
                     var h = document.getElementById('height').value;
                     var w = document.getElementById('weight').value;
                     bmi = (parseInt(w) * 100 * 100) / (parseInt(h) * parseInt(h));
                     y.innerHTML = bmi.toFixed(2);
                  }
               }
               else if (r == 2) {
                  if (c == 0)
                     y.innerHTML = "BMI Category:";
                  else {
                     if (parseInt(bmi) < 18.50)
                        y.innerHTML = "Underweight";
                     else if (parseInt(bmi) < 25)
                        y.innerHTML = "Normal Range";
                     else if (parseInt(bmi) < 30)
                        y.innerHTML = "Overweight";
                     else
                        y.innerHTML = "Obese";
                  }
               }
               else {
                  if (c == 0)
                     y.innerHTML = "Calorie Intake per day:";
                  else {
                     var w = document.getElementById('weight').value;
                     var ca = parseFloat(w) * 1 * 24 * 0.95 * 1.70;
                     y.innerHTML = ca.toFixed(2);
                     val = ca;
                  }
               }
            }
         }
         document.getElementById("asd").style.display="block";
         document.getElementById('height').value = "";
         document.getElementById('weight').value = "";
         document.getElementById('age').value = "";
         document.getElementById("button1").disabled = true;
         changeColor();
      }
      }
   }
   else
   {
      alert("Height, weight and age should be a number")
   }
      
}
function changeColor() {
      document.getElementById("button1").style.backgroundColor="#808b96";
}
function asd()
{
   document.getElementById("asd").style.display="none";
}
function excess()
{
   document.getElementById("excess").style.display="none";
}

