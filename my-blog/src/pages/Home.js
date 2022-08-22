import React from 'react';

const HomePage = () => (
    <>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0">
            
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={require('../img/wp.jpeg')} alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <div className="text-lg font-medium whitespace-pre-line w-3/4 ">
                Hi!
                I'm a software developer that I'm mainly focused in the back end side using spring boot as main framework following the micro-services concept, 
                but also I have experience working in the front end side using JavaScript libraries and framework.

            </div>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                Flor Ortiz
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                Full stack developer
            </div>
            </figcaption>
        </div>
        </figure>
    </>
);

export default HomePage;