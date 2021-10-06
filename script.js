const searchFilter = ()=>{
    let names    = document.getElementById('myinput').value.toUpperCase();
       let myTable   = document.getElementById('mytable');
     let tr        = myTable.getElementsByTagName('tr');
     let td        = document.getElementsByTagName('td');
     
     
        for(var i = 0; i < tr.length;i++){
    
        let td = tr[i].getElementsByTagName('td')[0];
    
        if(td){
            let myname = td.textContent;
        if(myname.toUpperCase().indexOf(names) > -1){
    
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }
        }
    }
     
    }