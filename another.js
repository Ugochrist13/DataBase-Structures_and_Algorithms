// const num1 = parseFloat(prompt("Enter your first number"));
// const num2 = parseFloat(prompt("Enter your second number"));
// const num3 = parseFloat(prompt("Enter your third number"));

const myArr = [];

myArr[0] = prompt("input your first number")
myArr[1] = prompt("input your second number")
myArr[2] = prompt("input your third number")

num1 = myArr[0]
num2 = myArr[1]
num3 = myArr[2]

if (num1 <= num2 && num1 <= num3)
{
        if (num2<=num3)
        {
            alert(`${num1}, ${num2}, ${num3}`);
        }
        else
        {
            alert(`${num1}, ${num3}, ${num2}`);
        }
}
else if (num2 <= num1 && num2 <= num3)
{
        if (num1<=num3)
        {
            alert(`${num2}, ${num1}, ${num3}`);
        }
        else
        {
            alert(`${num2}, ${num3}, ${num1}`);
        }
}
else if (num3 <= num1 && num3 <= num2)
{
        if (num1<=num2)
        {
            alert(`${num3}, ${num1}, ${num2}`);
        }
        else
        {
            alert(`${num3}, ${num2}, ${num1}`);
        }
}      