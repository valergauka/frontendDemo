import { BsArrowLeftShort, BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../../../UIComponent/Header";

import './ReviewUserItem.css';

const ReviewUserItem = (props) => {
    return (
        <div>
            <Header/>
            <main className='mainCarts'>
            <Link to='/reviewuser' className='backCart' ><BsArrowLeftShort/></Link>
            {/* <div className="trash"><BsTrashFill/></div> */}
            <form className='cartForm '>
                <div className="titule">{props.cart.map(el => (el.category))}</div>
                <div>
                    <h5>Освітня програма:  {props.cart.map(el => (el.nameop))}</h5>
                    <h5>Спеціальність:  {props.cart.map(el => (el.speciality))}</h5>
                    <h5>Галузь знань:  {props.cart.map(el => (el.branchofknowledge))}</h5>
                    <h5>Гарант програми:  {props.cart.map(el => (el.guarantoftheprog))}</h5>
                    <h5>Структурний підрозділ:  {props.cart.map(el => (el.structuralunit))}</h5>
                    <h5>Факультет/Інститут:  {props.cart.map(el => (el.faculty))}</h5>
                    <h5>Дата подання:  {props.cart.map(el => (el.date))}</h5>
                </div>
                <h4>Перегляньте документи:</h4>
                <div className="cartFormPDF">
                    <a href={props.cart.map(el => (el.raportguarant))} target='_blank' rel="noopener noreferrer">Рапорт гаранта</a>
                    <a>Витяг з протоколу кафедри</a>
                    <a>Витяг з протоколу засідання вченої ради</a>
                    <a>Обгрунтування</a>
                </div>
           </form>
        </main>
        </div>
        
    );
}

export default ReviewUserItem;