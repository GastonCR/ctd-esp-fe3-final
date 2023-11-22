import React from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [loading, setLoading] = useState(true);
  const {getUsuarios, handleSetUsers, state} = useContext(ContextGlobal)

  useEffect(()=>{
    getUsuarios().then((datos)=>{
      handleSetUsers(datos);
      setLoading(false);
    });
  }, []);


  return (
   <div>
      <main className=''>
         <h1>Home</h1>
        <div className='card-grid'>
        {!loading && 
          state.allDestist.map((item) =>(
            <Card key={item.id} {...item} />
          ))
        }
        </div>
       </main>
   </div>
  );
};

export default Home;