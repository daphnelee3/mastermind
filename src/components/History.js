import React from 'react'

export const History = ({ previousAttempts }) => {
    return (
        <div>
            <div>Previous Attempts</div>
            {previousAttempts.length > 0 ?
                previousAttempts.map((object, idx) => (
                    <div key={idx}>
                        <div>{object.guess} </div>
                        <div>{object.feedback} </div>
                    </div>)) : 'none'}
        </div>
    )
}