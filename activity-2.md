## Activity 2 answers 

### Question 1

The scripts section contains all of the commands that can be run by the program.
devDependencies section contains all of libraries that the program needs to run and its versions. 
'dependencies' contains similar with the library of the basic package library that the program is based on, which in this case is lit and its version.
The commands you can run are the ones under the scripts section.

### Question 2

This file loads up the html page and makes all the basic elements of it, mostly the background, color, and title card. The HTML that makes it show a demo is 
'''
const title = 'Hello owc World!';
    render(
      html`
        <hello-world .title=${title}>
          some light-dom
        </hello-world>
      `,
      document.querySelector('#demo')
'''
The same html makes it render with JavaScript with the 'render()' command.

### Question 3

The reason they are separated is because when defining a class, you want to make that in a separate file and have your instances of that class in a different file. This can also be helpful with inheritance and making sure the class itself is not edited or changed, and instead only instances of the class. 

### Question 4

Lit is very useful for building quick and easy web components. It is open-source, so anyone can use it and learn it easily because of its nature. It also helps to write simple html that can be carried over from project to project.
