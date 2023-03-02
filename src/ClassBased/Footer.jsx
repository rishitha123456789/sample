import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div style={{textAlign:"center"}} className="card">
        <div className="card-header">
          MERN
        </div>
        <div className="card-body">
          <blockquote style={{marginLeft:"30px",marginRight:"50px"}} className="blockquote mb-0">
            <p>MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB — document database. Express(.js) — Node.js web framework. React(.js) — a client-side JavaScript framework.</p>
            <footer className="blockquote-footer">made with ❤️ by Rishita </footer>
          </blockquote>
        </div>
      </div>
    )
  }
}
