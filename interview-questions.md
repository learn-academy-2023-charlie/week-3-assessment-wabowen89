# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: 
    JSX is a markup language that allows us to utilize JavaScript within the HTML language. One syntax difference between JSX and HTML is when you call an event listener. In JSX you would use Camel Case to call an event listener (ie: onClick). Whereas, in HTML, you would not use Camel Case (ie: onclick)

Researched answer: 
    JSX stands for JavaScript XML. It is a markup language that allows the programmer to write and add HTML within React. A big difference between JSX and HTML syntax is that in HTML you don't have to return a single parent element. Whereas, within JSX you must return a single parent element, otherwise the code will not compile. 

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: 
    Yarn is a package manager that provides access to libraries and other functionalities. No files are actually modified when you run yarn in your terminal. It simply adds a bunch of code snippets that are easily accessible to the coder.

Researched answer: 
    Yarn is one of the main package managers for JavaScript and was developed by Facebook for the Node.JS runtime environment. If you run yarn without any arguments, your yarn.lock file will be checked to see if the dependencies there match what are listed in your package.jscon file and install any that are missing. Adding arguments to the yarn command will modify other files depending on what argument you add. For example, running yarn add will modify the package.json and yarn.lock file to reflect new dependencies that are installed.

3. What is a React component?

Your answer: 
    A React component is is a separate file the provides a display and/or a logical portion to your HTML file.

Researched answer: 
    React components are reusable and separate peices of code. They function the same as JavaScript functions, but only work independently and also return HTML. There are two types, class components and function components.

4. What is the difference between state values and props in React?

Your answer: 
    State values provide logic to a component. Props allow you to pass information from a parent component to a child component.

Researched answer: 
    State values are owned locally and only the component itself can update them. Whereas props are owned by the parent and are read-only. Props can be changed, but only if a callback function is passed to a child component. They are both JavaScript objects and can hold information that influences the manner in which an output is rendered. However, props are passed to the child component, whereas state is managed within the parent component.

5. What is the DOM?

Your answer: 
    The DOM is the Document Object Model. It proivdes a visual representation of the code in a browser.

Researched answer: 
    The DOM, or Document Object Model, is the representation of dat objects that comprise the structure and content of a web document. It presents the document as nodes and object allowing programming languages to interact with a page. This is especially useful when discussing user interactions, as the DOM Event Listener will listen for user actions on a given page and provide a reaction that is visible to the user.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
    Object-oriented programming is a model of programming based around objects. These objects can contain data and code. The data is in the form of attributes, or properties, whereas the code in the form of methods. Within this style of programming, programs are made out of objects that interact with one another.

2. Ruby:
    Ruby is a general purpose programming language that is high-level and interpreted. It can support multiple programming models and was designed with a focus on productivity and simplicity. 

3. Implicit return:
    An implicit return is when a function returns a value without the return statement written in to it. This can be accomplished when the curly braces are dropped from the function syntax.

4. Ruby blocks:
    

5. Ruby hashes:
