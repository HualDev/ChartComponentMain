
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  let myObj = JSON.parse(this.responseText);
  let day =document.getElementsByClassName('day')
  let graph =document.getElementsByClassName('graph')
  let spent = document.getElementsByClassName('spent')
  let container = document.getElementsByClassName('spending_container')

  for(let i=0; i<myObj.length;i++ ){
    let height =myObj[i].amount
    graph[i].style.height=(height*1.5+'%')
    day[i].innerHTML = myObj[i].day;
    spent[i].innerHTML= ('$ '+height)
    
    if(height>=50){
      graph[i].style.backgroundColor='hsl(186, 34%, 60%)'
    }

    container[i].addEventListener('mouseover',()=>{
      spent[i].style.display='block'
      graph[i].style.opacity='0.5'
      container[i].style.cursor='pointer'
    })

    container[i].addEventListener('mouseout',()=>{
      spent[i].style.display='none'
      graph[i].style.opacity='1'
    })
  }
  


}







xmlhttp.open("GET", "./data.json");
xmlhttp.send();