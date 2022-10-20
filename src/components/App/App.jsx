import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h2>Add an Item</h2>
                <form>
                    <label>Item</label>
                    <input type="text" required placeholder="Item"></input>

                    <label>Quantity</label>
                    <input type="text" required placeholder="Quantity needed"></input>

                    <label>Unit</label>
                    <input type="text" required placeholder="Unit"></input>
                </form>

                <article>
                    <header>
                        <h2>Shopping List</h2>
                        <button id="resetBtn">Reset</button>
                        <button id="clearBtn">Clear</button>
                    </header>

                    <section>
                        <div class="listItem">
                            <h4>Pineapple</h4>
                            <p>5 lbs</p>
                            <button class="purchasedBtn">Purchased</button>
                            <button class="removeBtn">Remove</button>
                        </div>
                        <div class="listItem">
                            <h4>Apple Jacks</h4>
                            <p>3 boxes</p>
                            <button class="purchasedBtn">Purchased</button>
                            <button class="removeBtn">Remove</button>
                        </div>
                    </section>
                </article>
            <footer>
                <p>Created by Pod 2 on October 20th, 2022 at Prime Digital Academy</p>
                <p>Copywrite: 2022</p>
            </footer>
            </main>
        </div>
    );
}

export default App;
