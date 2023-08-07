import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Component6 } from './Component6';

export const Component5 = ({year}) => {

    
    const [currentYear, setCurrentYear] = useState(year);
    /*

    // Solo se ejecuta al montar el componente por el []
    useEffect(() => {
        console.log('Componente5 montado');
    }, []);

    // Se ejecuta siempre que se actualiza algo en el componente.
    useEffect(() => {
        console.log('Componente5 actualizado');
    });

    // Se ejecuta siempre que se actualiza el año.
    useEffect(() => {
        console.log('Año actualizado');
        // If currentYear is less than 2000, set

    }, [currentYear]);
*/
    const nextYear = () => {
        console.log(currentYear);
        setCurrentYear(currentYear + 1);
    };
    const prevYear = () => {
        console.log(currentYear);
        setCurrentYear(currentYear - 1);
    };
    const changeYear = (e, newYear) => {
        const year = parseInt(newYear);
        if (!isNaN(year)) {
            setCurrentYear(parseInt(newYear));
        }
    };

  return (
    <>
    <h1 className={ currentYear < 2000 ? 'label-red' : ''}> YEAR : { currentYear }</h1>

    <button onClick={prevYear}>Prev Year</button>
    <button onClick={nextYear}>Next Year</button>

    <div className="card">
        <input type="text" placeholder="Change year" onKeyUp={e => changeYear(e, e.target.value)}></input>
        { currentYear < 2023 && <Component6 /> }
        </div>

    </>
  )

}

Component5.propTypes = {
    year: PropTypes.number.isRequired,
  }
