
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", getTodos);
//是在 DOM 文件結構載入完畢的時候觸發的，因此要比 load 事件型別先被觸發
todoButton.addEventListener("click", addTodo); //方法可以用來綁定元素的事件處理函數
todoList.addEventListener("click", deleteCheck);


function addTodo(event){
    // Prevent form from subitting
    event.preventDefault(); // 事件處理 的停止事件
// Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); //classList.add( 加的屬性) 把div+到todoDiv屬性
 // Creat LI
    const newTodo = document.createElement("li");
    newTodo.innerText =todoInput.value;  //innerText 回傳「實際所見的內容 文字 打什麼就出現什麼
    newTodo.classList.add("todo-item"); //classList.add( 新增屬性 內容文字) 
    todoDiv.appendChild(newTodo);  //把( newTodo)裡面的值 傳到最一開始的todoDiv
    
    //新增TODO to localStorage 儲存資料到 todoInput.value 顯示出實際畫面內容傳回saveLo
    saveLocallTodos(todoInput.value);
    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`; //fa-check 打勾勾圖案
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
//
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; //fa-trash 垃圾桶圖案
    trashButton.classList.add("trash-btn"); // 新增trash-btn 刪除屬性(垃圾桶)
    todoDiv.appendChild(trashButton);
    //AppEND
    todoList.appendChild(todoDiv); //把上面全部事件 傳回到todoList 的ul裡顯示出來
    //clear Todo INPUT VALUE
    todoInput.value ="";  //todoInpu.value 裡面的值= 空白

}

function deleteCheck(e) {
    const item = e.target; // 屬性則是永遠指向觸發事件的 DOM 物件
  
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;  // 傳回父連結 item (把空白的div傳至item)
        todo.classList.add("fall");
        removeLocalTodos(todo); //把暫時儲存資料移除的含式 帶入到delete含式裡
        todo.addEventListener("transitionend" , function(){  
            //*transitionend是在css轉換結束後觸發 (fall是顯示動畫的css class)
            todo.remove();  //.remove ( 移除的屬性 移除空白的div)
        });
    }

    //CHECK 編輯
    if (item.classList[0] === "complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle("completed")
    }
}


 
// 保存資料
function saveLocallTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos =[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    //JSON.stringify() ：物件變 JSON
    // localStorage.setItem  存入資料的意思  第一個值是key 第二個是value
}
   
   
 function getTodos(){
    
     let todos;
     if(localStorage.getItem("todos") === null){
         todos =[];
     }else{
         todos = JSON.parse(localStorage.getItem("todos"));
     }
     todos.forEach(function(todo){
         // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); 
 // Creat LI
    const newTodo = document.createElement("li");
    newTodo.innerText =todo;  
    newTodo.classList.add("todo-item");  
    todoDiv.appendChild(newTodo);  

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`; 
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
//
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'; 
    trashButton.classList.add("trash-btn"); 
    todoDiv.appendChild(trashButton);
    //AppEND
    todoList.appendChild(todoDiv);
     });
 }
   //移除
function removeLocalTodos(todo){
    
    let todos;
    if(localStorage.getItem("todos") === null){
        todos =[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
   const todoIndex= todo.children[0].innerText;
   //children是指DOM Object型別的子物件
   todos.splice(todos.indexOf(todoIndex), 1);
   // .splice 陣列 是刪除原有元素 或加入新元素
   // .indexof  尋找有沒有符合的元素 
   localStorage.setItem("todos", JSON.stringify(todos));
}
 
    
  
   
    
    
   
 
