import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
//ADD-EXPENSE

const addExpense = (
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

const removeExpense = ( {id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
    
    
});
//EDIT-EXPENSE

const editExpense = (id, update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
});
//SET-TEXT-FILTER

const setTextFilter = ( text ='') =>({
    type:'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE

const sortByDate = () =>({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE

const setStartDate = (startDate = undefined) =>({
    type:'SET_START_DATE',
    startDate
});
//SET_END_DATE

const setEndDate = (endDate = undefined) =>({
    type:'SET_END_DATE',
    endDate

});
//EXPENSES_REDICER
const expenseReducerDafultState = []
const expenseReducer = (state = expenseReducerDafultState, action) =>{
 
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

//Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortyBy:'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState, action)=>{

    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortyBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortyBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default: 
            return state;
    }
};

// Get visible expense 
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate }) =>{
    return expenses.filter( (expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters:  filtersReducer
    })
);

store.subscribe(() =>{
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expenses, state.filters);
    console.log(visibleExpense);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt:-1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

store.dispatch(setTextFilter('Coffee'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));

// store.dispatch(setEndDate(999));

//console.log(store.getState());
const demoState = {
    expenses :[{
        id: 'asdasd',
        description:'Jan rent',
        note:'this is for me honey',
        amount: 45500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy:'amount', //date or amount
        startData: undefined,
        endDate: undefined
    }
};

