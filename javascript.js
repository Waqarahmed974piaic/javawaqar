//Chapter1
alert("Error! Please enter a valid password")
alert("Welcome to JS Land\nHappy Coding!")
alert("Happy Coding\nPrevent this page from creating additional dialogs")
alert("Hello... I can run Js through my web browser's console.")
//Chapter2
var username;
var username="Waqar Ahmed";
var message;
message="Hello World";
alert(message);
var name="Jhone Doe";
var age="15 years ld";
var course="Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);
var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);
var email="waqarahmed176549@gmail.com";
alert("My email address is"+" "+email);
var book="A smarter\nway to learn JavaScript";
alert("I am trying to learn from the book"+" "+book);
document.write("Yah! I can write HTML Content through JavaScript");
//Chapter3
var age=24;
alert("I am"+" "+age+" year old");
var visit=24;
alert("You have visited this page 14 times");
var birthYear=1997;
document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is number");
var visitor_name="Jhon Doe";
var Product_title="T-Shirt";
var Quantity=5;
document.write("<strong>"+visitor_name+"</strong>"+" ordered "+"<strong>"+Quantity+Product_title+"</strong>"+"(s)"+" On XYZ Clothing store");
//Chapter4
var name,age,residency;
Legal variable name
var name,age,NIC_no,residency,qualification;
Illegal variable name
var var;
var while;;
var document.;
var do;
var if;
var numbers="numbers";
var $="$";
var _="_";
var letter="letter";
var sensitive="sensitive";
var Keywords="Keywords"
document.write("<h1>Rules for naming JS variables</h1><br><br><br>"+" Varaible names can only contain,"+numbers+","+$+" and "+_+" .For example $my_1stVariable");
document.write("<br>Variable must begin with a "+letter+","+$+" or "+_+".For example $name, _name or name");
document.write("<br>Variable names are case "+sensitive)
document.write("<br> Variable names should not be JS "+Keywords)
//Chapter6to9

var a=10;
document.write("Result");
document.write("<br>The value of a is:"+a);
document.write("<br>------------------------");
document.write("<br>The value of ++a is:"+(++a));
document.write("<br>The value of a is:"+a);
document.write("<br><br><br>The value of a++ is:"+a++);
document.write("<br>The value of a is:"+a);
document.write("<br><br><br>The value of --a is:"+(--a));
document.write("<br>The value of a is:"+a);
document.write("<br><br><br>The value of a-- is:"+a--);
document.write("<br>The value of a is:"+a);
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("The vlaue of a,b and result after --a is 1,1 and 1");
document.write("<br>The vlaue of a,b and result after --a---b is 1,0 and 1");
document.write("<br>The vlaue of a,b and result after --a---b+++b is 1,1 and 2");
document.write("<br>The vlaue of a,b and result after --a---b+++b+b-- is 1,0 and 3");
document.write("<br>a is:"+a);
document.write("<br>b is:"+b);
document.write("<br>result is:"+result);
var name=prompt("Whats your name: ")
alert("Hello"+" "+name);
var table=+prompt("Enter the table");
if (table==""){
    for (j = 1; j<11; j++){        
            console.log(5+"x"+j+"="+5*j);
    }
}
else{
    for (j = 1; j<11; j++){        
        console.log(table+"x"+j+"="+table*j);
}
}
var city=prompt("Enter the city name:")
if(city=="Karachi"){
    alert("Welcome to city of lights")
}
var gender=prompt("Enter the gender:")
if(gender=="male"){
    alert("Good Morning Sir")
}
else{
    alert("Good Morning Ma'am")
}
var color=prompt("Enetr the color:")
if(color="Red"){
    alert("Must Stop")
}
else if(color=="Yellow"){
    alert("Ready to move")
}
else{
    alert("Move to now")
}
var fuel=+prompt("Enter the remaining fuel:")
if(fuel<0.25){
    alert("Please refill the fuel in your car")
}
//
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");//Alert enable
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");//No alert enable
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");//No alert enable
}
if (c === 13){
alert("condition 2 is true");//Alert enable
}
if (++c < 14){
alert("condition 3 is true");//No alert enable
}
if(c === 14){
alert("condition 4 is true");//alert enable
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");//No alert enable
}
if (true){
alert("True");//Alert enable
}
if (false){
alert("False");//No alert enable
}
if("car" < "cat"){
alert("car is smaller than cat");//No alert enable
}
var english=+prompt("Enter the english mark:")
var math=+prompt("Enter the math mark:")
var urdu=+prompt("Enter the urdu mark:")
var totalmark=+prompt("Enter the total marks:")
var obtained_marks=english+math+urdu
var percentage=(obtained_marks/totalmark)*100
var grade
var remarks
if (percentage=>80) {
    alert("A-one\nExcellent")
    grade="A-one"
    remarks="Excellent"
}   
else if(percentage=>70 & percentage<80){
    alert("A\nGood")
    grade="A"
    remarks="Good"
}
else if(percentage=>60 & percentage<70){
    alert("B\nYou need to improve")
    grade="B"
    remarks="You need to improve"
}
else{
    alert("Fail\nSorry")
    grade="Fail"
    remarks="Sorry"
}
document.write("<h1>Marks Sheet</h1>")
document.write("<br><br> Total marks:"+totalmark)
document.write("<br>Marks obtained:"+obtained_marks)
document.write("<br>Percentage:"+percentage)
document.write("<br>Grade:"+grade)
document.write("<br>Remarks:"+remarks)
var secret_number=13
var guess_number=+prompt("Enter the number:")
if(guess_number=secret_number){
    alert("Bingo! Correct answer")
}
else if(guess_number==secret_number+1){
    alert("Close enough to the correct answer")
}
var three=+prompt("Enter the number:")
if(three%3==0){
    alert("Your number is divisible by 3")
}
var evenodd=+prompt("Enter the number:")
if (evenodd%2==0) {
    alert("The number is even")
}
else{
    alert("The number is odd")
}
var temp=+prompt("Enter the temperature:")
if (temp>40) {
    alert("It is too hot outside.")
}
else if(temp>30 && temp<40){
    alert("The Weather today is Normal.")
}
else if(temp>20 && temp<30){
    alert("Today’s Weather is cool.")
}
else{
    alert("OMG! Today’s weather is so Cool.")
}
var First_number=+prompt("Enter the first number:")
var Second_number=+prompt("Enter the second number:")
var operator=prompt("Enter the opreator;")
var result
if (operator=="+") {
    result=First_number+Second_number
    alert(result)
}
else if(operator=="-"){
    result=First_number-Second_number
    alert(result)
}
else if(operator=="*"){
    result=First_number*Second_number
    alert(result)
}
else if(operator=="/"){
    result=First_number/Second_number
    alert(result)
}
else{
    result=(First_number/Second_number)*100
    alert(result)
}
//chapters12-13
var state=prompt("Enter the number or alphabets:")
if (state=parseInt(state)) {
    alert("")
}
var number1=+prompt("Enter the first number:")
var number2=+prompt("Enter the second number:")
if (number1>number2) {
    alert("First number is greater than second")
}
else if(number1<number2){
    alert("Second number is greater than first")
}
else{
    alert("Both number are equal")
}
var numbertype=+prompt("Enter the number:")
if (numbertype>1) {
    alert("Number is positive")
}
else if(numbertype==0){
    alert("Number is Zero")
}
else{
    alert("Number is negative")
}
var charac=+prompt("Enter the character")
if(charac=="a" || "e" || "i" || "o" || "u"){
    alert("True")
}
else{
    alert("False")
}
var pass=prompt("Enter the password:")
var enterpass="waqar"
if(pass=""){
    alert("Please enter your password")
}
if(pass==enterpass){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}
var hour=+prompt("Enter the time:")
var convert
if(hour==1200){
    alert("12am")
}
else if(hour==1300){
    alert("1pm")
}
else if(hour==1400){
    alert("2pm")
}
else if(hour==1500){
    alert("3pm")
}
else if(hour==1600){
    alert("4pm")
}
else if(hour==1700){
    alert("5pm")
}
else if(hour==1800){
    alert("6pm")
}
else if(hour==1900){
    alert("7pm")
}
else if(hour==2000){
    alert("8pm")
}
else if(hour==2100){
    alert("9pm")
}
else if(hour==2200){
    alert("10pm")
}
else if(hour==2300){
    alert("11pm")
}
else if(hour==2400){
    alert("12pm")
}
//
else if(hour==1100){
    alert("11am")
}
else if(hour==1000){
    alert("10am")
}
else if(hour==900){
    alert("9am")
}
else if(hour==800){
    alert("8am")
}
else if(hour==700){
    alert("7am")
}
else if(hour==600){
    alert("6am")
}
else if(hour==500){
    alert("5am")
}
else if(hour==400){
    alert("4am")
}
else if(hour==300){
    alert("3am")
}
else if(hour==200){
    alert("2am")
}
else if(hour==100){
    alert("1am")
}
//chapters14-16
var empty=[]
var str=["S","W"]
var boo=[True,false]
var mix=["Ahmed",True,1]
var qualif=[SSC, HSC, BCS,BS, BCOM, MS, M. Phil, PhD]
document.write("<h1>Qualifications:</h1>")
document.write("<br>1:"+qualif[0])
document.write("<br>2:"+qualif[1])
document.write("<br>3:"+qualif[2])
document.write("<br>4:"+qualif[3])
document.write("<br>5:"+qualif[4])
document.write("<br>6:"+qualif[5])
document.write("<br>7:"+qualif[6])
document.write("<br>8:"+qualif[7])

var stu=["Michael","Jhon","Tonny"]
var mar=[320,230,480]
document.write("Score of "+stu[0]+" is "+mar[0]+" .Percentage:"+(mar[0]/500)*100)
document.write("Score of "+stu[1]+" is "+mar[1]+" .Percentage:"+(mar[1]/500)*100)
document.write("Score of "+stu[2]+" is "+mar[2]+" .Percentage:"+(mar[2]/500)*100)

var sor=[320,230,140.780]
console.log(sort.sort())
var cit=["Karachi","Islamabad","Lahore","Pehaswar","Quetta"]
console.log("Selected Cities list:\n"+cit.slice(1,2))
var arr = ["This", "is", "my", "cat"];
console.log("String:\n"+arr.join())
var device=["Keyboard","Mouse","Printer","Monitor"]
for(i=0;i<device.length;i++){
    console.log("Out:\n"+device[0])
}
//Reverse Order
for(i=device.length-1;i<0;i--){
    console.log("Out:\n"+device[0])
}
var manu=["Apple","Motorola","Nokia","Samsung"]
for(i=0;i<manu.length;i++){
    document.write("<br>"+manu[i])
}

//chapters17-20
var mul=[[],[]]
var ma=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
for(i=1;i<11;i++){
    console.log(i)
}
var Input_1=+prompt("Enter the table");
var Input_2=+prompt("Enter the length of table")
console.log("Multiplication table of "+Input_1+" Length "+Input_2)
for (j = 1; j<Input_2+1; j++){        
        console.log(Input_1+"x"+j+"="+Input_1*j);
    }
var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log("Element at index 0 "+fruits[0])
console.log("Element at index 1 "+fruits[1])
console.log("Element at index 2 "+fruits[2])
console.log("Element at index 3 "+fruits[3])

for(i=1;i<18;i++){
    document.write("<h2>Counting</h2>")
    document.write(i)
}
for(i=10;i<0;i--){
    document.write("<h2>Reverse Counting</h2>")
    document.write(i)
}
for(i=0;i<21;i--){
    if(i%2==0){
        document.write("<h2>Even:</h2>")
        document.write(i)

    }
}
for(i=0;i<21;i--){
    if(i%2!=0){
        document.write("<h2>Odd:</h2>")
        document.write(i)

    }
}
for(i=0;i<21;i--){
    if(i%2==0){
        document.write("<h2>Series:</h2>")
        document.write(i+"k,")

    }
}
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var aa=true
var bak=prompt("Welcome to the bakrey what do you want:")
for(i=0;i<A.length;i++){
    if(bak==A[i]){
        document.write(A[i]+" is available at index "+i)
        break
        aa=false
    }
}
if(aa){
    document.write("<br>Sorry "+bak+" is not available in our bakrey")
}
var AB = [24, 53, 78, 91, 12]
document.write("Array items: "+AB+"<br>The largest number is "+AB.max())
document.write("Array items: "+AB+"<br>The largest number is "+AB.min())
for(i=5;i<101;i++){
    if(i%5==0){
        document.write(i+",")
    }
}
