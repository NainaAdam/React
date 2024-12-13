<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>title</title>
</head>
<body>
    <script>
        // Looping over arrays//
        // How to print more than 100 value in an array?//
        // simple for loop//

        const arr1 = ["Royal enfield","BMW","Yamaha", "KWk"];
        for (i=0;i<arr1.length;i++) {
            console.log(arr1[i]);
        }


// for..in loop//
for (let j in arr1){
    console.log(arr1[j]);
}

//for...of loop//
for(let k of arr1){
    console.log(k);

}

// for ..each//
arr1.forEach(function(item)) {
    console.log(item);

    
}
    



    </script>
</body>
</html>