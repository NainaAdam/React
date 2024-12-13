/*output statement*/
console.log("Hello World....!");
alert("How are you");
confirm("wishing you luck for upcoming dayds" );
DocumentFragment.write("<h1> Hi...!</h1>");

/*input  */
a = prompt("give me a message")
console.log(a);


/* variables*/
/*global scoping*/
let num =10;
{
    /*local scoping*/
    const num = 10;
    /* block scoping*/
    var num = 10;
    console.log(num);
    num =20;
    
   }
   console.log(num);
   console.log(num);