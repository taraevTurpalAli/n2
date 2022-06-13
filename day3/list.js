const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
        for(let i = 1; i <= todoList.items.length; i++) {
            todoList.print(i)
        }
    },
  
    add: function(text) {
        todoList.items.unshift(
            {
                text: `${text}`,
                completed: false
            }
        )
    },
  
    remove: function(index) {
        todoList.items.splice((index - 1), 1)
    },
  
    print: function(index) {
        let x = ' ';
        if (todoList.items[index - 1].completed) {
            x = 'x'
        }
        console.log(`[${x}]${todoList.items[index - 1].text}`)
    },
  
    complete: function(index) {
        todoList.items[index - 1].completed = true
    },
  };
  