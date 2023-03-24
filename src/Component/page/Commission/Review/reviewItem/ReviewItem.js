import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../../../UIComponent/Button";
import React, { useEffect, useState } from 'react';
import NET from '../../../../../network';
import axios from 'axios';
import Coment from "./coment/Coment";

import './ReviewItem.css';

const ReviewItem = (props) => {
    const [comment, setComment] = useState([]);
    const id_review = Number(props.cart.map(el => (el.id)));
    const id_user = 1;
    const [value, setValue] = useState({idReview : id_review, idUser : id_user});

    const comentar = [];
    comment.map(el => {
        if (Number(el.idReview) === Number(props.cart.map(el => (el.id)))) {
            comentar.push(el.comment)
        }
    })
    


    useEffect(() => {
        const loadComment = async () => {
            const response = await axios.get(`${NET.APP_URL}/comment`);
            setComment(response.data)
        }
        loadComment();
    }, [])


    console.log(value)

    // console.log(value)

    return (
        <div>
            <main className='mainCarts'>
                <Link to='/review' className='backCart' ><BsArrowLeftShort /></Link>
                <form className='cartForm '>
                    <h4 className="title">{props.cart.map(el => (el.category))}</h4>
                    <div>
                        <h5>Рівень:   {props.cart.map(el => (el.educLevel))}</h5>
                        <h5>Галузь знань:  {props.cart.map(el => (el.branch))}</h5>
                        <h5>Спеціальність:  {props.cart.map(el => (el.speciality))}</h5>

                        <h5>Освітня програма:  {props.cart.map(el => (el.nameOp))}</h5>
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
                    <Link className='buttonLink' to='/review/cart/approve'>
                        <Button title="Затвердити" />
                    </Link>

                </form>
                <div className='comentForm'>
                    <textarea className='coment' placeholder='Залишіть свій коментар тут...' value={value['comment']}
                        onChange={(e) => setValue({
                            ...value,
                            ['comment']: e.target.value
                        })}></textarea>
                    <button className='buttonComent'>Надіслати</button>
                </div>
                <div className="comments">
                    {comentar.map(el =>
                    (
                        <div className="comentar">
                            {el}
                        </div>
                    )
                    )}
                </div>
            </main>
        </div>

    );
}

export default ReviewItem;