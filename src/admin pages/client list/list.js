import React from 'react';
import './list.css';
import { Link } from "react-router-dom";


const List = () => {
  return (
    <div className='List'>
        <h1 className='title'>Client List</h1>
        <section>
            <div className='list'>
                <ul>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>Client website</p> <p>Service</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>Client website</p> <p>Service</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>   
                    <li className='listitem'>
                        <p>Client Name  </p> <p>Client website</p> <p>Service</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>Client website</p> <p>Service</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>
                    <li className='listitem'>
                        <p>Client Name  </p> <p>Client website</p> <p>Service</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>  
                    <li className='listitem'>
                        <p>Client Name  </p> <p>Client website</p> <p>Service</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>  
                    <li className='listitem'>
                        <p>Client Name  </p> <p>Client website</p> <p>Service</p> <button className='listbtn'><Link to='/clientdetail' className="link">Detail</Link></button>
                    </li>   
                </ul>
            </div>
        </section>
    </div>
  )
}

export default List