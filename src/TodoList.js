class TodoList {
    todoList = []
 

    create(text){
        const todoListCreate = {
            id: this.todoList.length + 1,
            text: text,
            status: "incomplete"
        } 
        this.todoList.push(todoListCreate);

        return todoListCreate
    }


}

module.exports = TodoList
