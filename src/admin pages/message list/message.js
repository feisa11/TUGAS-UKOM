import React from 'react';
import './message.css';
import { Link } from "react-router-dom";


const Message = () => {
  return (
    <div className='List'>
        <h1 className='title'>Message List</h1>
        <section>
            <div className='list'>
                <ul>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>About</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>About</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>About</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>About</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>About</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>  
                    <li className='listitem'>
                        <p>Client Name  </p> <p>About</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>  
                    <li className='listitem'>
                        <p>Client Name  </p> <p>About</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>   
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Message