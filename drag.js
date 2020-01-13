//drag.js by wth

var drag = {

    from : function(elem,start) {

        if(!elem)return false;

        elem.draggable = true;
        if( typeof start === "function"){
            elem.ondragstart = function(e){
                start(e);//set your data here
            }
        }
        
    },

    to: function(elem,over,drop,leave) {

        if(!elem)return false;

        if( typeof over === "function"){
            elem.ondragover = function(e){
                e.stopPropagation();
                e.preventDefault();
                over(e);
            }
        }

        if(typeof drop === "function"){
            elem.ondrop = function(e){
                e.stopPropagation();
                e.preventDefault();
                drop(e);
            }
        }

        if(typeof leave === "function"){
            elem.ondragleave = function(e){
                e.stopPropagation();
                e.preventDefault();
                leave(e);
            }
        }
        
    }
}