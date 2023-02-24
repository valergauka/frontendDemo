import React, {useState} from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Button from '../../../../UIComponent/Button';
import Header from '../../../../UIComponent/Header';

import './FormLb.css';
import './Form.css';
import Input from './FormInput/Input';
export default function FormLb(props) {
  const branchName = [
    {
      id: 1,
      name: '01 Математична статистика'
    },
    {
      id: 2,
      name: '02 Математика'
    },
    {
      id: 3,
      name: '03 Математичне знання'
    }

  ];
  const facultyName = [
    {
      id: 1,
      name: 'ІФТКН'
    },
    {
      id: 2,
      name: 'ІБХБ'
    },
    {
      id: 3,
      name: 'Факультет архітектури, будівництва та декорптивно-прикладного мистецтва'
    },
    {
      id: 4,
      name: 'Географічний факультет'
    },
    {
      id: 5,
      name: 'Економічний факультет'
    },
    {
      id: 6,
      name: 'Факультет іноземних мов'
    }
  ];
  const leveledUcc = [
    {
      id: 1,
      name: 'Бакалавр'
    },
    {
      id: 2,
      name: 'Магістр'
    }
  ]
  let [cartOpen, setCartOpen] = useState(0)
  
  const OpentCart = (event) => {
    if (event.target.value === '014'){
      return  setCartOpen(cartOpen = 2)
    }
    else {
      if (event.target.value === '015' || event.target.value === '035' )
        return  setCartOpen(cartOpen = 1)
    }

    return setCartOpen(cartOpen = 0)
  }

  return (
    <div>
      <Header/>
      <main className='mainForm'>
      <Link to='/present' className='back' ><BsArrowLeftShort /></Link>
      <div className='title'>
        {props.orders.map(el => (<h3 key={el.id}>{el.title}</h3>))}
      </div>
      <form  className='formLable'>
        <label for="">Галузь знань:</label>
        <Input  nameInput='branch' placeholderInput="Шифр та назва" arrayData={branchName} />

        <label for="">Спеціальність:</label>
        <Input nameInput='spetialty' placeholderInput="Код та назва" arrayData={branchName}  onInput={OpentCart}/>
        
        <div className={`spetializanion ${cartOpen === 1 &&'active'}`}>
          <label for="">Спеціалізація:</label>
          <Input nameInput='spetialization' placeholderInput="Код та назва" arrayData={branchName}/>
        </div>

        <div className={`subjSpetializanion ${cartOpen === 2 &&'activ'}`}>
          <label for="">Предметна спеціалізація:</label>
          <Input nameInput='subjSpetialization' placeholderInput="Код та назва" arrayData={branchName}/>
        </div>
        
        <label for='' >Освітня програма:</label>
        <Input nameInput='op' placeholderInput="Код та назва" arrayData={branchName} />

        <label for="">Рівень осівіти:</label>
        <Input nameInput='leveleducc' placeholderInput="Бакалавр/Магістр" arrayData={leveledUcc} />

        <label for="">Гарант програми:</label>
        <input type="text" className='inputText' name="guarantorProg" required placeholder="Прізвище ім`я по-батькові" />
        
        
        <label for="">Структурний підрозділ:</label>
        <input type="text" className='inputText' name="structural"  required placeholder="Кафедра, факултет/інститут..."/>
        
        <label for="">Факультет/Інститут:</label>
        <Input nameInput='faculty' placeholderInput="Повна назва" arrayData={facultyName} />
          
        <Link to='/present/form/form' className='formButton'>
            <Button title="Далі"/>
        </Link>
      </form>
    </main>
    </div>
    
  )
}
