let num1=0;
let num2=1;
for (let i=0;i<20;i++)
{
    sum=num1+num2;
    num1=num2;
    num2=sum;
    document.write(sum + " ");
}
