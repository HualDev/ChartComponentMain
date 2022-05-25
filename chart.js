
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  let myObj = JSON.parse(this.responseText);
  let day =document.getElementsByClassName('day')
  let graph =document.getElementsByClassName('graph')
  let spent = document.getElementsByClassName('spent')

  for(let i=0; i<myObj.length;i++ ){
    let height =myObj[i].amount
    graph[i].style.height=(height/5+'rem')
    day[i].innerHTML = myObj[i].day;
    spent[i].innerHTML= ('$ '+height)
    
    if(height>=50){
      graph[i].style.backgroundColor='hsl(186, 34%, 60%)'
    }
  }
  


}







xmlhttp.open("GET", "./data.json");
xmlhttp.send();