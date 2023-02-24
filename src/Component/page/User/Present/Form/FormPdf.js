import React from 'react';
import Button from '../../../../UIComponent/Button';

import './FormPdf.css';
import './Form.css';
import CategoriesPdf from './CategoriesPdf';
export default function FormPdf(props) {
  return (
    <div>
        <main className='mainForm'>
          <div className='title'>
            {props.orders.map(el => (<h3>{el.title}</h3>))}
          </div>
          <form  className='form'>
            {props.categories.map(el =>(<CategoriesPdf key={el.id} category={el} />))}
            <div className='formButton'>
              <Button title='Подати'/>
            </div>
          </form>
        </main>
    </div>
    
  )
}
