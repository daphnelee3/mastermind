import React from 'react'

const PreviousAttempts = ({ previousAttempts }) => {
    return (
        <div className="previous-attempts">
            <div>Previous Attempts</div>
            {previousAttempts.length > 0 ?
                previousAttempts.map((object, idx) => (
                    <div key={idx}>
                        <div >You Guessed: {object.guess} - {object.feedback}</div>
                    </div>)) : 'none'}
        </div>
    )
}

export default PreviousAttempts