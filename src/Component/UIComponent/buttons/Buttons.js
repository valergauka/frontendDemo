import { useState } from 'react';
import { FiFileText, FiUsers, FiUserPlus, FiPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

import './Buttons.css';


const Buttons = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fab ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <FiPlus />
            </button>
            <div className='menu'>
                <Link to={'/program'}>
                    <button>
                        <FiFileText />
                        <span>Review</span>
                    </button>
                </Link>
                <Link to={'/users'}>
                    <button>
                        <FiUsers />
                        <span>Users</span>
                    </button>
                </Link>
                <Link to={'/adduser'}>
                    <button>
                        <FiUserPlus />
                        <span>Add user</span>
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Buttons;