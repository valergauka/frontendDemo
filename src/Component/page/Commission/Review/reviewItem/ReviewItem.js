import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../../../UIComponent/Button";

import './ReviewItem.css';

const ReviewItem = (props) => {
    return (
        <div>
            <main className='mainCarts'>
            <Link to='/review' className='backCart' ><BsArrowLeftShort/></Link>
            <form className='cartForm '>
                <h4 className="title">{props.cart.map(el => (el.category))}</h4>
                <div>
                    <h5>Освітня програма:  {props.cart.map(el => (el.nameOp))}</h5>
                    <h5>Спеціальність:  {props.cart.map(el => (el.speciality))}</h5>
                    <h5>Галузь знань:  {props.cart.map(el => (el.branch))}</h5>
                    <h5>Гарант програми:  {props.cart.map(el => (el.guaranty))}</h5>
                    <h5>Структурний підрозділ:  {props.cart.map(el => (el.structural))}</h5>
                    <h5>Факультет/Інститут:  {props.cart.map(el => (el.faculty))}</h5>
                    <h5>Дата подання:  {props.cart.map(el => (el.date))}</h5>
                </div>
                <h4>Перегляньте документи:</h4>
                {/* <div className="cartFormPDF">
                    <a href={props.cart.map(el => (el.raportguarant))} rel="noopener noreferrer"> Рапорт гаранта</a>
                    <a>Витяг з протоколу кафедри</a>
                    <a>Витяг з протоколу засідання вченої ради</a>
                    <a>Обгрунтування</a>
                </div> */}
                <Link className='buttonLink'   to='/review/cart/approve'>
                    <button className="buttonComent">Затвердити</button> 
                </Link>
                
           </form>
           <div className='comentForm'>
                <textarea className='coment' placeholder='Залишіть свій коментар тут...'></textarea>
                <button className='buttonComent'>Надіслати</button>    
           </div>
           
        </main>
        </div>
        
    );
}

export default ReviewItem;