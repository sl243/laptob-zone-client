import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-3/4 mx-auto mt-12'>
                <h3 className='text-2xl font-bold'>What are the different ways to manage a state in a react application?</h3>
                <p className='text-xl'>There are four main types of state you need to properly manage in your React application</p>
                <p className='text-xl'>
                    1. Local state <br></br>
                    2. Global state <br></br>
                    3. Server state <br></br>
                    4. URL state <br></br>
                </p>
                <p className='text-xl'>
                    <strong>Local (UI) state</strong> - Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
                </p>
                <p className='text-xl'>
                    <strong>Global (UI) state</strong> - Global state is data we manage across multiple components. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                </p>
                <p className='text-xl'>
                    <strong>Server state</strong> - Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                </p>
                <p className='text-xl'>
                    <strong>URL state</strong> - Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                </p>
            </div>
            <div className='w-3/4 mx-auto mt-10'>
                <h3 className='text-2xl font-bold'>
                    How does prototypical inheritance work?
                </h3>
                <p className='text-xl'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                </p>
            </div>
            <div className='w-3/4 mx-auto mt-10'>
                <h3 className='text-2xl font-bold'>
                    What is unit test?
                </h3>
                <p className='text-xl'>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. A unit can be anything you want it to be — a line of code, a method, or a class.
                </p>
                <h3 className='text-2xl font-bold'>
                    Why should we write unit tests?
                </h3>
                <p className='text-xl'>
                    There are two types of unit testing:

                </p>
                <p className='text-xl'>
                    <strong>1. Manual:</strong> As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.

                </p>
                <p className='text-xl'>
                    <strong>2. Automated:</strong> This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.

                </p>
                <p className='text-xl mt-2'>
                    <strong>Here are a few benefits to writing unit tests:</strong> <br></br>
                    1. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system. <br></br>
                    2. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. <br></br>
                    3. It simplifies the debugging process. <br></br>
                    4. Unit testing is an integral part of extreme programming. Extreme programming is basically a "test-everything-that-can-possibly-break" programming strategy. <br></br>
                    5. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results. <br></br>
                    6. Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                </p>
            </div>
            <div className=' my-10'>
                <p className='text-2xl font-bold mb-3'>
                    Angular vs React vs Vue?
                </p>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Angular</th>
                                <th>React</th>
                                <th>Vue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Developed by</td>
                                <td>Google</td>
                                <td>Facebook</td>
                                <td>Community</td>
                            </tr>
                            <tr className="hover">
                                <td>Framework Size</td>
                                <td>143k</td>
                                <td>43k</td>
                                <td>23k</td>
                            </tr>
                            <tr>
                                <td>Initial Release</td>
                                <td>October 20, 2010</td>
                                <td>May 29, 2013</td>
                                <td>February 2014</td>
                            </tr>
                            <tr className="hover">
                                <td>Programming language</td>
                                <td>Typescript</td>
                                <td>JavaScript</td>
                                <td>JavaScript</td>
                            </tr>
                            <tr>
                                <td>UI component</td>
                                <td>In-built material tech stack</td>
                                <td>React UI tools</td>
                                <td>Component Libraries</td>
                            </tr>
                            <tr className="hover">
                                <td>Syntax</td>
                                <td>Real DOM</td>
                                <td>Virtual DOM</td>
                                <td>Virtual DOM</td>
                            </tr>
                            <tr>
                                <td>Prevalent Architecture</td>
                                <td>MVC</td>
                                <td>Flux</td>
                                <td>Flux</td>
                            </tr>
                            <tr className="hover">
                                <td>Scalability</td>
                                <td>Modular development structure</td>
                                <td>Component-based approach</td>
                                <td>Template-based approach</td>
                            </tr>
                            <tr>
                                <td>Documentation</td>
                                <td>Yes, simple and point to point documentation</td>
                                <td>Yes, official documentation is somehow limited <br></br> and not be the best suites for a newbie</td>
                                <td>Yes, quality documentation is available</td>
                            </tr>
                            <tr className="hover">
                                <td>CLI</td>
                                <td>Angular-CLI is available that is loved by Angular developers</td>
                                <td>No official CLI, but in general, https://github.com/ <br></br> Facebook/create-react-app is used</td>
                                <td>Vue-CLI is proficient and it enables <br></br> you to set up your project using the <br></br>desired template such as webpack or browser </td>
                            </tr>
                            <tr>
                                <td>Rendering</td>
                                <td>Client-side</td>
                                <td>Server-side</td>
                                <td>Server-side </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Blog;