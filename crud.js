let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let date = document.getElementById('date');
let DateMassage=document.getElementById('date-massage')
let dataBtn=document.getElementById('data-btn')
 let deleteAll =document.getElementById('deleteAll')

let searchMood='title'
let mood ='create'
let ind;
//create proudct

 let dataPro;
 if(localStorage.product != null){
    dataPro=JSON.parse(localStorage.product)
 }
 else{
     dataPro=[];
 }


 submit.onclick=function(){
let newPro ={
    title:title.value,
    count:count.value,
    category:category.value,
    price:price.value,
    taxes:taxes.value,
    discount:discount.value,
    date:date.value,
}
if(title.value != ''&&price.value!= ''&&category.value!=''&&count.value<1000){
    if(mood==='create'){
    if(count.value >1){
 
        dataPro.push(newPro)        

 

}
else{
            dataPro.push(newPro)        

}

}else{
    dataPro[ind]=newPro
    mood='create'
    submit.innerHTML='إضافة المنتج'
    count.style.display='block'
}clearInputs();
}


localStorage.setItem('product' , JSON.stringify(dataPro))


readData()

 }
 

 //read elmntes
 function readData(){

let table=''
for(let i=0 ;i<dataPro.length;i++){
          let basePrice = +dataPro[i].price;
        let taxValue = (basePrice * +dataPro[i].taxes) / 100;
        let discountValue = (basePrice * +dataPro[i].discount) / 100;

        let sum = basePrice + taxValue - discountValue;
     table +=`  
  <tr>
                        <th>${dataPro[i].title}</th>
                        <th>${dataPro[i].count}</th>
                        <th>${dataPro[i].category}</th>
                        <th>${dataPro[i].price}</th>
                        <th>${dataPro[i].taxes}%</th>
                        <th>${dataPro[i].discount}%</th>
                        <th>${sum.toFixed(1)}</th>
                       <th><button type="submit" onclick="updateData(${i})"  id="update" class="btn btn-primary"> تعديل</button></th>
                       <th><button type="submit" onclick="clearPro(${i})" id="delete" class="btn btn-primary">مسح </button></th>
                       <th><button type="submit" onclick="dateMg(${i})" id="data-btn" class="btn btn-primary">التاريخ </button></th>
                       </tr>`
                       
}



let tbody = document.getElementById('productsTableBody').innerHTML= table;
if(dataPro.length > 0){
   
deleteAll.style.display='block'
deleteAll.innerText=` مسح الكل (${dataPro.length})`
}
else{
    deleteAll.style.display='none'

}

 }
readData()

//delete
function clearPro(i){
if(dataPro[i].count>1){
 dataPro[i].count=dataPro[i].count-1   
}
else{
    dataPro.splice(i,1)
}
    
    localStorage.product=JSON.stringify(dataPro)
    readData()

}
//daelet all
deleteAll.onclick=function(){
    dataPro=[];
    localStorage.product=JSON.stringify(dataPro)
     readData()
}

//clearinp
function clearInputs() {
    title.value = '';
    count.value='';
    price.value = '';
    taxes.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    date.value=''
}

//updateData

function updateData(i){
    title.value=dataPro[i].title
    count.value=dataPro[i].count
    category.value=dataPro[i].category
    price.value=dataPro[i].price
    taxes.value=dataPro[i].taxes
    discount.value=dataPro[i].discount
    date.value=dataPro[i].date

   
  
    submit.innerHTML='تعديل المنتج'
     mood='update'
     ind=i;
     scroll({
        top:0,
        behavior:"smooth"

     })}
     //search 
     function searchDataMood(id){
         let search=  document.getElementById('search')
         if(id==='searchTitle'){
             searchMood='title'
 
  search.placeholder='ابحث بالإسم'
}
else{
        searchMood='category'
search.placeholder='ابحث بالنوع'
}
search.focus()

search.value=''
readData()


     }

function searchData(value){
let table='';
    if(searchMood==='title'){
        for(let i=0;i< dataPro.length;i++){
                 let basePrice = +dataPro[i].price;
        let taxValue = (basePrice * +dataPro[i].taxes) / 100;
        let discountValue = (basePrice * +dataPro[i].discount) / 100;

        let sum = basePrice + taxValue - discountValue;
            if(dataPro[i].title.includes(value.toLowerCase())){   
          
           table +=`  
  <tr>
                        <th>${dataPro[i].title}</th>
                        <th>${dataPro[i].count}</th>
                        <th>${dataPro[i].category}</th>
                        <th>${dataPro[i].price}</th>
                        <th>${dataPro[i].taxes}%</th>
                        <th>${dataPro[i].discount}%</th>
                        <th>${sum.toFixed(1)}</th>
                       <th><button type="submit" onclick="updateData(${i})"  id="update" class="btn btn-primary"> تعديل</button></th>
                       <th><button type="submit" onclick="clearPro(${i})" id="delete" class="btn btn-primary">مسح </button></th>
                                              <th><button type="submit" onclick="dateMg(${i})" id="data-btn" class="btn btn-primary">التاريخ </button></th>

                       </tr>`
                       
                    }}        }
        else{
    for(let i=0;i< dataPro.length;i++){
                 let basePrice = +dataPro[i].price;
        let taxValue = (basePrice * +dataPro[i].taxes) / 100;
        let discountValue = (basePrice * +dataPro[i].discount) / 100;

        let sum = basePrice + taxValue - discountValue;
            if(dataPro[i].title.includes(value.toLowerCase())){   
          
           table +=`  
  <tr>
                        <th>${dataPro[i].title}</th>
                        <th>${dataPro[i].count}</th>
                        <th>${dataPro[i].category}</th>
                        <th>${dataPro[i].price}</th>
                        <th>${dataPro[i].taxes}%</th>
                        <th>${dataPro[i].discount}%</th>
                        <th>${sum.toFixed(1)}</th>
                       <th><button type="submit" onclick="updateData(${i})"  id="update" class="btn btn-primary"> تعديل</button></th>
                       <th><button type="submit" onclick="clearPro(${i})" id="delete" class="btn btn-primary">مسح </button></th>
                                              <th><button type="submit" onclick="dateMg(${i})" id="data-btn" class="btn btn-primary">التاريخ </button></th>

                       </tr>`
                       
                    }}   
                }
                document.getElementById('productsTableBody').innerHTML= table;
}
//massage dat//
function dateMg(i){
       let dateValue=dataPro[i].date
DateMassage.style.display='flex'
DateMassage.style.opacity='0'

DateMassage.innerHTML=`  <h3>تاريخ اضافه هذا المنتج: </h3>
                <p>${dateValue}</p>
                                <button class="btn btn-primary" id="backDate">موافق</button>
`
  let opacity = 0;
      let timer = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(timer); // وقف بعد ما يوصل 1
        }
        DateMassage.style.opacity = opacity;
        opacity += 0.01; // كل مرة يزيد شوية
      }, 4);
        document.getElementById('backDate').onclick = function () {
    DateMassage.style.display = 'none';
  };
    localStorage.product=JSON.stringify(dataPro)
readData()
    }

 





