import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    const d = 600;  // Đường kính
    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return (
        <div className="App">
            <div className="svg">
                {data.map((value, index) => {
                    // Chi vi hinh tron> C = d.pi or 2r * pi
                    const circumference: number = (d / 2) * Math.PI;
                    return <svg key={index}
                                width={d}
                                height={d}
                                viewBox={`0 0 ${d} ${d}`}
                                style={{transform: `rotate(${(360 / data.length) * index}deg)`}}>
                        <g>
                            <circle r={d / 4} cx={d / 2} cy={d / 2}
                                    fill="transparent"
                                    stroke={index % 2 === 0 ? 'white' : 'orange'}
                                    strokeWidth={d / 2}
                                    strokeDasharray={`calc(${100 / data.length} * ${circumference} / 100) ${circumference}`}>
                            </circle>
                        </g>
                    </svg>;
                })}
                <div className='content'>
                    {data.map((value, index) => {
                        const temp: number = data.length / 2;
                        const deg_avg = 360 / data.length;
                        if (index < temp)
                            return <div key={index}
                                        style={{
                                            minWidth: d + 'px',
                                            minHeight: d / 2 + 'px',
                                            top: d / 4 + 'px',
                                            transform: `rotate(${index === 0 ? deg_avg / 2 : (deg_avg * index + (deg_avg / 2))}deg)`
                                        }}>
                                <p>value {data[index]}</p>
                                <p>value {data[index + temp]}</p>
                            </div>;
                        else return null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
