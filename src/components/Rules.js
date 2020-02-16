import React from "react";

const Rules = () => {
    return (
        <div className="rules">
            <main>
                <h2>How To Play</h2>
                <p>Select from the three available difficulty levels: easy, medium, and hard.</p>
                <p>The codemaker will generate a four digit number for you to crack.</p>
                <p>Your number of tries depends on your chosen difficulty level.</p>
                <p>Good Luck!</p>
                <img src="https://media.giphy.com/media/SJkmbhE2ytRDaT1iyG/giphy.gif" alt="you ready?"
                    style={{ width: 300, height: 300, marginTop: 100 }} />
            </main>
        </div>
    );
};

export default Rules