import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Button from '../../../../UIComponent/Button';
import Header from '../../../../UIComponent/Header';
import NET from '../../../../../network';
import Input from './FormInput/Input';
import axios from 'axios';

import './FormLb.css';
import './Form.css';



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
      name: 'Навчально-науковий інститут біології, хімії та біоресурсів'
    },
    {
      id: 2,
      name: 'Навчально-науковий інститут фізико-технічних та комп`ютерних наук'
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
    },
    {
      id: 7,
      name: 'Факультет історії, політології та міжнародних відносин'
    },
    {
      id: 8,
      name: 'Факультет математики та інформатики'
    },
    {
      id: 9,
      name: 'Факультет педагогіки, психології та соціальної роботи'
    },
    {
      id: 10,
      name: 'Факультет фізичної культури та здоров`я людини'
    },
    {
      id: 11,
      name: 'Філологічний факультет'
    },
    {
      id: 12,
      name: 'Юридичний факультет'
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
    },
    {
      id: 3,
      name: 'Освітньо-науковий'
    }
  ]
  let [cartOpen, setCartOpen] = useState(0);
  let [level, setLevel] = useState(false);
  const [branch, setBranch] = useState([]);

  useEffect(() => {
    const loadBranch = async () => {
      const response = await axios.get(`${NET.APP_URL}/branch`);
      setBranch(response.data)
    }
    loadBranch();
  }, [])


  const Level = (event) => {
    if (event.target.value === 'Магістр')
      return setLevel(level = true)
  }

  const OpentCart = (event) => {
    console.log(event.target.leveleducc)
    if (event.target.value === '014' || event.target.value === '015' || event.target.value === '035') {
      return setCartOpen(cartOpen = 1)
    }
    else {
      if (event.target.value === '227' || level === true)
        return setCartOpen(cartOpen = 1)
    }



    return setCartOpen(cartOpen = 0)
  }

  return (
    <div>
      <Header />
      <main className='mainForm'>
        <Link to='/present' className='back' ><BsArrowLeftShort /></Link>
        <div className='title'>
          {props.orders.map(el => (<h3 key={el.id}>{el.title}</h3>))}
        </div>
        <form className='formLable'>
          <label for="">Рівень осівіти:</label>
          <Input nameInput='leveleducc' placeholderInput="Бакалавр/Магістр" arrayData={leveledUcc} onInput={Level} />

          <label for="">Галузь знань:</label>
          <Input nameInput='branch' placeholderInput="Шифр та назва" arrayData={branch} />

          <label for="">Спеціальність:</label>
          <Input nameInput='spetialty' placeholderInput="Код та назва" arrayData={branchName} onInput={OpentCart} />

          <div className={`spetializanion ${cartOpen === 1 && 'active'}`}>
            <label for="">Спеціалізація:</label>
            <Input nameInput='spetialization' placeholderInput="Код та назва" arrayData={branchName} />
          </div>
{/* 
          <div className={`subjSpetializanion ${cartOpen === 2 && 'activ'}`}>
            <label for="">Предметна спеціалізація:</label>
            <Input nameInput='subjSpetialization' placeholderInput="Код та назва" arrayData={branchName} />
          </div> */}

          <label for='' >Освітня програма:</label>
          <Input nameInput='op' placeholderInput="Код та назва" arrayData={branchName} />



          <label for="">Гарант програми:</label>
          <input type="text" className='inputText' name="guarantorProg" required placeholder="Прізвище ім`я по-батькові" />


          <label for="">Структурний підрозділ:</label>
          <input type="text" className='inputText' name="structural" required placeholder="Кафедра, факултет/інститут..." />

          <label for="">Факультет/Інститут:</label>
          <Input nameInput='faculty' placeholderInput="Повна назва" arrayData={facultyName} />

          <Link to='/present/form/form' className='formButton'>
            <Button title="Далі" />
          </Link>
        </form>
      </main>
    </div>

  )
}
