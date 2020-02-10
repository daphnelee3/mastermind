import React from 'react'

export const History = ({ previousAttempts }) => {
    return (
        <div>
            <div className="prev-attempts">Previous Attempts</div>
            {previousAttempts.length > 0 ?
                previousAttempts.map((object, idx) => (
                    <div key={idx}>
                        <div >You Guessed: {object.guess} - {object.feedback}</div>
                    </div>)) : 'none'}
        </div>
    )
}