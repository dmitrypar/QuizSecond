import React from 'react';
import {qData} from "../service/qData";

const Finish = (props) =>{
    const  {score} = props.score;
    return (
        <div>
            <h2>Поздравляю! Викторина окончена!</h2>
            <h2>
                <span className="correctIs"> {`Правильных ответов ${score} из ${qData.length}`}</span>
            </h2>
        </div>
    )
};

export default Finish;