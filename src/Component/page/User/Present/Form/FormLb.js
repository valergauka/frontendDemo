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
  const branch = [];
  const speciality = [];
  const specialisation = [];
  const ops = [];
  const facultyName = [
    'Навчально-науковий інститут біології, хімії та біоресурсів',
    'Навчально-науковий інститут фізико-технічних та комп`ютерних наук',
    'Факультет архітектури, будівництва та декорптивно-прикладного мистецтва',
    'Географічний факультет',
    'Економічний факультет',
    'Факультет іноземних мов',
    'Факультет історії, політології та міжнародних відносин',
    'Факультет математики та інформатики',
    'Факультет педагогіки, психології та соціальної роботи',
    'Факультет фізичної культури та здоров`я людини',
    'Філологічний факультет',
    'Юридичний факультет'
  ];
  const leveledUcc = [
    'Бакалавр',
    'Магістр',
    'Освітньо-науковий'
  ];
  const [op, setOp] = useState([]);
  const category = props.orders[1].title;
  let d = new Date()
  const [value, setValue] = useState({category, date : d.toLocaleDateString()});

  
  function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }

  useEffect(() => {
    const loadOp = async () => {
      const response = await axios.get(`${NET.APP_URL}/op`);
      setOp(response.data)
    }
    loadOp();
  }, [])

  op.map(el => (
    branch.push(el.branch),
    speciality.push(el.speciality),
    specialisation.push(el.specialisation),
    ops.push(el.op)
  ));

  // console.log(value);
  return (
    <div>
      <Header />
      <main className='mainForm' >
        <Link to='/present' className='back' ><BsArrowLeftShort /></Link>
        <div className='title'>
          <h3>{category}</h3>
        </div>
        <form className='formLable'>
          <label for="">Рівень осівіти:</label>
          <Input nameInput='leveleducc' key={0}
            placeholderInput="Бакалавр/Магістр" arrayData={leveledUcc} value={value} setValue={setValue} />

          <label for="">Галузь знань:</label>
          <Input nameInput='branch' key={1} placeholderInput="Шифр та назва" arrayData={unique(branch)} value={value} setValue={setValue} />

          <label for="">Спеціальність:</label>
          <Input key={2} nameInput='speciality' placeholderInput="Код та назва" arrayData={unique(speciality)} value={value} setValue={setValue} />

          <div className={`spetializanion ${(value['speciality'] === '014 Середня освіта' ||
            value['speciality'] === '015 Професійна освіта' ||
            value['speciality'] === '035 Філологія' ||
            (value['speciality'] === '227' && value['leveleducc'] === 'Магістр'))
            && 'active'}`}>
            <label for="">Спеціалізація:</label>
            <Input key={3} nameInput='specialization' placeholderInput="Код та назва" arrayData={unique(specialisation)} value={value} setValue={setValue} />
          </div>
          {/* 
          <div className={`subjSpetializanion ${cartOpen === 2 && 'activ'}`}>
            <label for="">Предметна спеціалізація:</label>
            <Input nameInput='subjSpetialization' placeholderInput="Код та назва" arrayData={branchName} />
          </div> */}

          <label for='' >Освітня програма:</label>
          <Input key={4} nameInput='nameOp' placeholderInput="Код та назва" arrayData={unique(ops)} value={value} setValue={setValue} />

          <label for="">Гарант програми:</label>
          <input
            type="text"
            className='inputText'
            name="guaranty"
            required placeholder="Прізвище ім`я по-батькові"
            value={value['guaranty']}
            onChange={(e) => setValue({
              ...value,
              ['guaranty']: e.target.value
            })} />

          <label for="">Структурний підрозділ:</label>
          <input
            type="text"
            className='inputText'
            name="structural"
            required placeholder="Кафедра, факултет/інститут..."
            value={value['structural']}
            onChange={(e) => setValue({
              ...value,
              ['structural']: e.target.value
            })} />

          <label for="">Факультет/Інститут:</label>
          <Input key={5} nameInput='faculty' placeholderInput="Повна назва" arrayData={facultyName} value={value} setValue={setValue} />

          <Link to='/present/form/form' className='formButton'>
            <Button title="Далі" />
          </Link>
        </form>
      </main>
    </div>

  )
}
