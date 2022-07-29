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
}

module.exports = TodoList