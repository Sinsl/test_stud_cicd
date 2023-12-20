/* eslint-disable react/prop-types */
import pencil from '../assets/pencil.png';


const Step = ({data: {date, steps}, onClick, onEdit}) => {
  // const stepId = nanoid();
  // const handleClick = (id) => {
  //   // console.log(event);
  //   console.log(id);
  // }

  
  return (
    <tr className='columns step-data'>
      <td>{date}</td>
      <td>{steps}</td>
      <td className='actions'>
        <img className='edit-img' src={pencil} alt="pencil" onClick={onEdit}/>
        <span className='delete-step'  onClick={onClick}>{'\u2716'}</span>
      </td>
    </tr>
  )
}

export default Step