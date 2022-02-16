// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'email',
    message: `What's your email address?`,
    validate: function (value) {
        let pass = value.match(
            /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        );
        if (pass) {
            return true;
        }
        return 'Please enter a valid email address!';
    },
},
{
    type: 'input',
    name: 'github',
    message: `What's your GitHub User Name?`,

},
{
    type: 'input',
    name: 'title',
    message: `What is the title of your project?`,
},
{
    type: 'input',
    name: 'description',
    message: `Please write a description of your project`,

},
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(success)
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

