# LAB - Class 31

## Project: Todo-app

### Author: Steve Gant

### Problem Domain  

- To Do List Manager *Phase 1*: Incorporate configuration settings to the application.

- To Do List Manager *Phase 3*: Adding security and access controls to the application.

- To Do List Manager *Phase 4*: Integrating with a live API.

### Links and Resources

- [GitHub PR - Lab32](https://github.com/stevengant/todo-app/pull/4) 
- [CodeSandbox - Lab32](https://codesandbox.io/p/github/stevengant/todo-app/context-methods?workspaceId=8be27d1e-468c-4d8f-a4af-75875ccb2c76)

- [GitHub PR - Lab33](https://github.com/stevengant/todo-app/pull/6) 
- [CodeSandbox - Lab33](https://codesandbox.io/p/github/stevengant/todo-app/lab33?workspaceId=8be27d1e-468c-4d8f-a4af-75875ccb2c76&file=%2FREADME.md)

- [GitHub PR - Lab34](https://github.com/stevengant/todo-app/pull/8)
- [CodeSandbox - Lab34](https://codesandbox.io/p/github/stevengant/todo-app/auth-api?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfw0k821006e356mjjpjpei3%2522%253A%257B%2522key%2522%253A%2522clfw0k821006e356mjjpjpei3%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clfw0kdd400d6356mu2k9csbf%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clfw0kd9100bk356mprhin8mj%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfw0k821006e356mjjpjpei3%2522%252C%2522spacesOrder%2522%253A%255B%2522clfw0k821006e356mjjpjpei3%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

### Setup

- `npm install`

#### How to initialize/run your application (where applicable)

- `npm start`

#### Features

- Routes
  - `/` - home page with the Todo form
  - `/setting` - setting form to change the setting and save them in local storage

- Feature One: Todo list
  - Based on user preferences, show listings in groups of (3, 5, etc) and provide the ability to view multiple “pages” of results.
  - Each item in list should show the text of the item as well as the assignee.
    - Based on user preferences, hide or show completed items.
    - If shown, completed items should be styled differently making their status visually obvious.

- Feature Two: Setting Form
  - Form containing `<Switch>`, `<NumberInput>`, `<TextInput>`, and `<Button>`
    - `<Switch>` - to toggle the visibility of the completed tasks
    - `<NumberInput>` - to input the number of items per page
    - `<TextInput>` - to input keyword to sort list by
    - `<Button>` - to render the current/updated settings

#### Tests

- Todo.test.jsx
- render a header element is failing

#### UML

![Lab31UML](assets/Lab31UML.png)