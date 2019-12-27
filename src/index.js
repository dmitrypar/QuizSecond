import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import  './style.css';

import Quiz from './components/Quiz';
/*import {qData} from './quizService/qData'*/



const App = () => {



    return (
<div>


<Quiz/>




</div>

    )
};


ReactDOM.render(<App />,
  document.getElementById('root'));
