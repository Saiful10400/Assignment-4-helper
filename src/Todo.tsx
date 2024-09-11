
import { useRoomsQuery } from './Redux/api/api';
import { useAppDispatch, useAppSelector } from './Redux/feathcer/hoocks';
import { addTodo, deleteTodo, updateTodo } from './Redux/feathcer/todoSlice';


const Todo = () => {
    const dispatch=useAppDispatch()
    const localData=useAppSelector((state)=>state.todoStore)
    const createHandle=(e)=>{
        e.preventDefault()
        const form=e.target
        const payload={name:form.name.value,roll:form.roll.value}
        dispatch(addTodo(payload))
    }
    const updateHandle=(e)=>{
        e.preventDefault()
        const form=e.target
        const payload={name:form.name.value,roll:form.roll.value}
        dispatch(updateTodo(payload))
    }
    const deleteHandle=(e)=>{
        e.preventDefault()
        const form=e.target
       
        dispatch(deleteTodo(form.roll.value))
    }

    const { data, error, isLoading } = useRoomsQuery()
    console.log(data)
    return (
        <div className='flex justify-center gap-x-7 mt-5'>
            <div className='w-[500px] h-[400px] border border-black'>
                <form onSubmit={createHandle}>
                    <input className='border border-black py-3 text-lg' name='name' type="name" />
                    <input className='border border-black py-3 text-lg' name='roll' type="roll" />
                    <button>Create</button>
                </form>
            </div>
            <div className='w-[500px] h-[400px] border border-black'>
            <form onSubmit={updateHandle}>
                    <input className='border border-black py-3 text-lg' name='name' type="name" />
                    <input className='border border-black py-3 text-lg' name='roll' type="roll" />
                    <button>Update</button>
                </form>
            <form className='mt-7' onSubmit={deleteHandle}>
                    <input className='border border-black py-3 text-lg' name='roll' type="roll" />
                    <button>Delete</button>
                </form>
            </div>
            <div className='w-[500px] h-[400px] border border-black'>
            <h1>all student.</h1>
          
            </div>
        </div>
    );
};

export default Todo;