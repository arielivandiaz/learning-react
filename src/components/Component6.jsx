import React, { useEffect } from 'react'

export const Component6 = () => {

  useEffect(() => {
    console.log('Componente 6 MONTADO');
    return () => {
        console.log('Componente 6 DESMONTADO');
    }
}, []);

  return (
    <div>
        <h3>Year is past</h3>
    </div>
  )
}
