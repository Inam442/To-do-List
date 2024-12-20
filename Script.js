function addTask(){
    const newtask=document.createElement('li')
    const taskList=document.getElementById('taskList')
    taskList.appendChild(newtask)
    newtask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value=""
    deleteTask(newtask)
    



}
function deleteTask(newtask){
    const deletebtn=document.createElement('button')
    deletebtn.textContent="Delete"
    newtask.appendChild(deletebtn)
    deletebtn.onclick=function(){
        newtask.remove()
    }
}