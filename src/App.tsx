import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    const [spin, setSpin] = useState(false);
    return (
        <div className="App">
            {/*<div className={`container${spin ? ' spinning' : ''}`}>
                <div className="sec-0">
                    <div className="p-relative">
                        <div className="content">a</div>
                    </div>
                </div>
                <div className="sec-1">
                    <div className="p-relative">
                        <div className="content">b</div>
                    </div>
                </div>
                <div className="sec-2">
                    <div className="p-relative">
                        <div className="content">c</div>
                    </div>
                </div>
                <div className="sec-3">
                    <div className="p-relative">
                        <div className="content">d</div>
                    </div>
                </div>
                <div className="sec-4">
                    <div className="p-relative">
                        <div className="content">e</div>
                    </div>
                </div>
                <div className="sec-5">
                    <div className="p-relative">
                        <div className="content">f</div>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                spin && setSpin(false);
                setTimeout(() => setSpin(true));
                setTimeout(() => setSpin(false), 2000);
            }}>Quay
            </button>*/}
            <div className="svg">
                {[0, 1, 2, 3, 4, 5].map((value, index) =>
                    <svg key={index}
                         width={600}
                         height={600}
                         viewBox={'0 0 600 600'}
                         style={{transform: `rotate(${(360 / 6) * value}deg)`}}>
                        <g>
                            <circle r={150} cx={300} cy={300}
                                    fill="transparent"
                                    stroke={index % 2 === 0 ? 'white' : 'orange'}
                                    strokeWidth={300}
                                    strokeDasharray={'calc(16.66 * 942 / 100) 942'}>
                            </circle>
                        </g>
                    </svg>)}
                <div className='content'>
                    <div>
                        <p>value 0</p>
                        <p>value 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
