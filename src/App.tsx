import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    const [spin, setSpin] = useState(false);
    return (
        <div className="App">
            <div className={`container${spin ? ' spinning' : ''}`}>
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
                <div className="sec-5 plus">
                    <div className="p-relative">
                        <div className="content"/>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                spin && setSpin(false);
                setTimeout(() => setSpin(true));
                // setTimeout(() => setSpin(false), 2000);
            }}>Quay
            </button>
        </div>
    );
}

export default App;
