import {createSlice, nanoid} from '@reduxjs/toolkit';

const todoSlice = ({
    name:"todos",
    initialState :[],
    reducer:{
        addToDo: (state,action) =>{
            const newTodo ={
                id:nanoid(),
                text:action.payload.text,
                complete:false,
            };
            state.push(newTodo);
        },
    },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;