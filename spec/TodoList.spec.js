const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the aircon down!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the aircon down!")
    // verify
    expect(result).toEqual(expected)
  })
  
  /// Second Test with the ID
  
  it("should increment the id", () => {
    // set up
    const todoList = new TodoList();
    const firstTodo = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    const secondTodo = {
      id: 2,
      text: "turn the aircon down!",
      status: "incomplete"
    }

    // execute
    todoList.create("turn the heating on!")
    const result = todoList.create("turn the aircon down!")

    expect(result).toEqual(secondTodo)
  })

  // Gets all todo items

  it("Get all todo items", () => {
    const todoList = new TodoList();
    // set up
    const expected = [{
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete'
    },
    {
      id: 2,
      text: 'turn the aircon down!',
      status: 'incomplete'
    }]
    // execute
    todoList.create('turn the heating on!')
    todoList.create('turn the aircon down!')
    const result = todoList.getAllToDo()
    // verify
    expect(result).toEqual(expected)
  })

  // 3rd requirement Set a todo completed by its Id

  it('Set a todo completed by its Id', () => {
    const todoList = new TodoList();
    //setup
    const expected = [{
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete'
    },
    {
      id: 2,
      text: 'turn the aircon down!',
      status: 'complete'
    }]
    // execute
    todoList.create('turn the heating on!')
    todoList.create('turn the aircon down!')
    const result  = todoList.setCompletedById(2)
    //Verify
    expect(result).toEqual(expected)
  })






})
