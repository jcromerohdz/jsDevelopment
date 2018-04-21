import React from "react";
import Link from "gatsby-link";

export default () => <div style={{color: `tomato`}}>
                       <h1>Hello Christian!</h1>
                       <p>What a world!</p>
                       <img src="https://source.unsplash.com/random/400x200" alt="" />
                       <br />
                       <div>
                        <Link to="/page-2/">Let's go</Link>
                        <br/>
                        <Link to="/page-3/">To another dimension!</Link>
                       </div>
                       <div>
                        <Link to="/counter/">Counter</Link>
                       </div>
                     </div>
