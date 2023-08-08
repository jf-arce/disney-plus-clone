import {BsPlusCircle} from 'react-icons/bs'
import { useListContext } from '../../context/ListContext'
import { useCreateItemsMovies } from '../../hooks/useCreateItemsMovies';

export const MyListPage = () => {
    const {list} = useListContext();

    return (
        <div className='px-[calc(3.5vw+24px)] text-[#f9f9f9] min-h-[700px] bg-body-img bg-no-repeat bg-center bg-cover '>
            {list.length === 0 ? (
                <div className='min-h-[700px] flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center text-slate-50 gap-4'> 
                        <BsPlusCircle className='text-[#c8c8c8] text-9xl opacity-20 mb-6'/>
                        <h2 className='text-2xl font-black'>Mi lista está vacía</h2>
                        <h3>El contenido que agregues aparecerá aquí</h3>
                    </div>
                </div>
            ) 
            : 
            (
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[44px] font-bold ml-2 mt-8'>Mi lista</h1>
                    <div>
                        <h2 className='text-xl font-black ml-2'>Mis peliculas y series</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 animate-fade">
                            {useCreateItemsMovies(list)}
                        </div>
                    </div>
                    
                </div>
                
            )}
        </div>
    );
}
