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

  //4th requirement get only todo items that are incomplete

  it("Incomplete items", () => {
    // set up
    const todoList = new TodoList();
    const expected = [
      {
        id: 1,
        text: 'turn the heating on!',
        status: 'incomplete',
      },
      {
        id: 3,
        text: 'build a bridge',
        status: 'incomplete',
      },
    ];
    // execute
    todoList.create("turn the heating on!");
    todoList.create('turn the aircon down!');
    todoList.create('build a bridge');
    todoList.setCompletedById(2);
    const result = todoList.incompleteToDo();
    // verify
    expect(result).toEqual(expected);
  });

  //5th requirement get all the todos that are completed 

  it('Set a todo completed by its Id', () => {
    const todoList = new TodoList();
    //setup
    const expected = [
    {
      id: 2,
      text: 'turn the aircon down!',
      status: 'complete'
    }]
    // execute
    todoList.create('turn the heating on!')
    todoList.create('turn the aircon down!')
    todoList.create('build a bridge');
    todoList.setCompletedById(2)
    const result  = todoList.completedToDo()
    //Verify
    expect(result).toEqual(expected)
  })

  //6th requirement Search and return a todo Item by its Id or #
  // return a error message

it('search for valid ID item', () => {
    const todoList = new TodoList();
    //setup
    const expected = {
      id: 3,
        text: 'build a bridge',
        status: 'incomplete',
    }
    // execute
    todoList.create('turn the heating on!')
    todoList.create('turn the aircon down!')
    todoList.create('build a bridge')
    const result = todoList.validTodoId(3)
    // verify
    expect(result).toEqual(expected)
  })
  //second part test for requirement 6 
  it('search for invalid ID item', () => {
    const todoList = new TodoList();
    //setup
    const expected = 'ID not found'
    // execute
    todoList.create('turn the heating on!')
    todoList.create('turn the aircon down!')
    todoList.create('build a bridge')
    const result = todoList.validTodoId(6)
    // verify
    expect(result).toEqual(expected)
  })
  //Seventh test final requirement, remove by Id

  it('search for invalid ID item', () => {
    const todoList = new TodoList();
    //setup
    const expected = [

    ]
    // execute
    todoList.create('turn the heating on!')
    const result = todoList.removeById(1)
    // verify
    expect(result).toEqual(expected)
  })

})
