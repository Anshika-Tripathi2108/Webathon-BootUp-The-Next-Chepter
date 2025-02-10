// 1.	Write a function that takes an input of item prices and returns the total bill.
let n=prompt("Enter number of items");
console.log("Enter price of each item");
let i=1,b=0;
for(i=1;i<=n;i++)
{
    p=prompt("Enter price");
    p=parseInt(p);
    b+=p; //b=b+p
}
console.log(b);