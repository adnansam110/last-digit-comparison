function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}
var a = prompt("Enter 1st Number");
var b = prompt("Enter 2nd Number");
var c = prompt("Enter 3rd Number");
document.write(last_digit(a, b, c));