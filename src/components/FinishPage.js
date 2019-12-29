import React from 'react';


const Finish = ({qDataLength, score}) =>{

    return (
        <div className="correctIs">
            <h2>Поздравляем! Викторина окончена!</h2>
            <h2>
                <span > {`Правильных ответов ${score} из ${qDataLength}`}</span>
            </h2>
        </div>
    )
};

export default Finish;