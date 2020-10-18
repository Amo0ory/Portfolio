import { v4 as uuidv4 } from 'uuid';
//ADD-EXPENSE

export const addExpense = (
    {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
    } = {}
    )=>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }

});
// previousState.options.filter((option) =>{
        //return optionToremove !== option;
//})
//REMOVE_EXPENSE

export const removeExpense = ( {id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
    
    
});
//EDIT-EXPENSE

export const editExpense = (id, update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
});