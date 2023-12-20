import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import minMax from 'dayjs/plugin/minMax';
dayjs.extend(minMax);

import { nanoid } from 'nanoid'
import './steps.css';
import { useState } from 'react';

import Step from './Step';
import checkDates from './checkDates';
import sortArray from './sortArray';

const sorter = (a, b) => {
  const day1 = dayjs(a.date, "DD.MM.YYYY");
  const day2 = dayjs(b.date, "DD.MM.YYYY");

  if (dayjs(day1).isAfter(dayjs(day2))) {
    return -1;
  }
  if (dayjs(day1).isBefore(dayjs(day2))) {
    return 1;
  }
  // a должно быть равным b
  if (dayjs(day1).isSame(dayjs(day2))) {
    return 0;
  }
}

const Steps = () => {

  const [stepState, setStepState] = useState({
    date: '',
    steps: '',
    id: '',
  }); // Добавление нового результата

  const [steps, setSteps] = useState([]);

  const handleChange = (event) => {
    const {value, name} = event.target;
    console.log(event.target);
    setStepState((prevStepStateValue) => ({...prevStepStateValue, [name]: value, id: nanoid()}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSteps((prevSteps) => [...prevSteps, stepState]); // рабочий вариант
    // setStepState((prevStepStateValue) => ({...prevStepStateValue, id: nanoid()}))

    console.log(stepState);
    
    setSteps((prevSteps) => [...checkDates(prevSteps, stepState)]); // рабочий вариант

    // setSteps((prevSteps) => [...prevSteps.sort(sorter)]); // Сортировка массива тренировок. Перезаписываю состояние новым отсорированным массивом
    setSteps((prevSteps) => [...sortArray(prevSteps, sorter)]); // Сортировка массива тренировок. Перезаписываю состояние новым отсорированным массивом

    // console.log(stepState);
    // setSteps((prevSteps) => <Check dataArray={prevSteps} checkingItem={stepState}/>);
    console.log(steps);
    // <Step data={stepState}/>;

    // сбросить поля
    setStepState((prevStepStateValue) => ({...prevStepStateValue, date: '', steps: '',}));
  }

  const handleClick = (id) => {
    console.log(id);
    setSteps((prevSteps) => [...prevSteps.filter(step => step.id !== id)]) // id передается при вызове метода (клике), не хранится в разметке
  }

  const handleEdit = (id) => {
    console.log(id);
    const editStep = steps.find(step => step.id === id) // id передается при вызове метода (клике), не хранится в разметке
    setStepState({...editStep}); // Меняю текущее состояние, из которого в инпуты идут соответствующие value
  }


  return (
    <div className='steps-widjet'>
      <form id='add-steps-form' className='form' onSubmit={handleSubmit}>
        <label>Дата (дд.мм.гггг)
          <input 
          className='date-input input' 
          name='date' 
          placeholder='дд.мм.гггг'
          value={stepState.date}
          onChange={handleChange}
          required
          />
        </label>
        <label>Пройдено, км
          <input 
          className='steps-input input' 
          name='steps'  
          placeholder='Введите пройденную дистанцию' 
          value={stepState.steps}
          onChange={handleChange} 
          required
          />
        </label>
        <button className='btn' type='submit'>OK</button>
      </form>
      <table className='steps-schedule'>
        <tr className='columns table-header'>
          <th>Дата (дд.мм.гггг)</th>
          <th>Пройдено, км</th>
          <th>Действия</th>
        </tr>
        {steps.map(
          (stepData) => (
            <Step 
              key={stepData.id} 
              data={stepData} 
              onClick={() => handleClick(stepData.id)} 
              onEdit={() => handleEdit(stepData.id)}
            />
            )
          )
        }
      </table>
    </div>
  )
}

export default Steps