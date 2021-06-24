var table = document.querySelector("table");

addRow.onclick = () => {
    let trs = document.querySelector("tr");
    let tr = document.createElement('tr');
    for (let i = 0; i < trs.children.length; i++){
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

addCol.onclick = () => {
    let trs = document.querySelectorAll('tr');
    for (let tr of trs) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
}

remRow.onclick = () => {
    if(table.rows.length > 1){
        table.deleteRow(0);
    }
}

remCol.onclick = () => { 
    let tr = document.querySelector('tr');
    for (let i = 0; i < table.rows.length; i++){
        if(table.rows[i].cells.length > 1){
            table.rows[i].deleteCell(0);
        }
    }
}

function move(event) {
    let rect = event.getBoundingClientRect();
    remCol.style.marginLeft = (rect.left - 100) + "px";
    remRow.style.marginTop = (rect.top - 100) + "px";
}

table.onmouseover = (event) => {
    let over = event.target;
    move (over);
}            