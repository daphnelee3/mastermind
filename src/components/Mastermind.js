import React, { Component } from 'react'
import axios from 'axios'

class Mastermind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            winningCombination: [],
            attempts: 0,
            previousAttempts: [],
            status: '', //win, lose, playing
        }
    }
}