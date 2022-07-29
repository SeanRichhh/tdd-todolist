class TodoList {
    todoList = []
 
    // Create a todo item that has an ID, text and starts off incomplete
    create(text){
        const todoListCreate = {
            id: this.todoList.length + 1,
            text: text,
            status: "incomplete"
        } 
        this.todoList.push(todoListCreate)

        return todoListCreate
    }

    // Get all the todo Items
    getAllToDo(){
        return this.todoList
    }

    //Set a todo completed by its ID
    setCompletedById(id){
        this.todoList.forEach((item) => {
            if(item.id === id){
                item.status = 'complete'
            }
        })
        return this.todoList
    }
    
    // Get all todo items that are incomplete

    incompleteToDo(){
        const incompleteItems = []
        for(let i = 0; i < this.todoList.length; i++){
            if(this.todoList[i]['status'] === 'incomplete'){
                incompleteItems.push(this.todoList[i])
            }
        }
        return incompleteItems
    }

    // Get all todo items that are complete
    completedToDo(){
        const completeItems = []
        for(let i = 0; i < this.todoList.length; i++){
            if(this.todoList[i]['status'] === 'complete'){
                completeItems.push(this.todoList[i])
            }
        }
        return completeItems
    }

    validTodoId(id){
        for(let i = 0; i < this.todoList.length; i++){
            //loop through toDoList
            if(this.todoList[i]['id'] === id){
            //if todoList id === id return the todolist
                return this.todoList[i]
            }
        }
        //else return the error message
        return 'ID not found'
    }

    // Remove a todo item by its ID

    removeById(id){
        for(let i = 0; i < this.todoList.length; i++){
            if(this.todoList[i]['id'] === id){
                this.todoList.splice(i, 1)
            }
        }
        return this.todoList
    }
}

module.exports = TodoList