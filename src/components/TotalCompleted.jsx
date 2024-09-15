import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleted = () => {
    const yapilacaklar = useSelector( state=>state.todos.filter( eleman=>eleman.completed===true ) )

	return <h4 className='mt-3'>Tamamlanan Toplam İş: {yapilacaklar.length}</h4>;
};

export default TotalCompleted;