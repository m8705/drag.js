# drag.js
🛠 A drag &amp; drop library



## Usage

1.Make a DOM element become draggable ( Optional )

```javascript
//var from = document.getElementById("from");
drag.from(from,function(e){
    //set your data here
})
```

2.Set the target DOM element become droppable

```javascript
//var to = document.getElementById("to");
drag.to(to,function(e){
    //on drag over
},function(e){
    //on drop
},function(e){
    //on drag leave
})
```



## Demo

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Drag & Drop</title>
        <style>
        #from {
            width: 200px;
            height: 200px;
            border: 1px solid black;
        }
        #to {
            width: 400px;
            height: 400px;
            border: 1px solid black;
            margin-top: 10px;
        }
        </style>
        <script src="drag.js"></script>
    </head>
    <body>
        <div id="from">drag me</div>
        <div id="to">to here</div>
        <script>

            var from = document.getElementById('from');
            var to = document.getElementById('to');

            drag.from(from,function(e){

                e.dataTransfer.setData("text/plain","https://github.com");
                e.dataTransfer.dropEffect = "copy";

            })
            drag.to(to,function(e){

                //over
                e.target.textContent = "drag over"

            },function(e){

                //drop
                var data = e.dataTransfer.getData("text/plain");
                e.target.textContent = data;

            },function(e){

                //leave
                e.target.textContent = "drag leave"

            })

        </script>
    </body>
</html>
```



