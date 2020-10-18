import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
// addExpense -> water bill
store.dispatch(addExpense({description: 'Water bill', amount:4000}));

//addExpense -> Gas bill
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount:109500}));


//getVisibleExpenses -> print visibles ones to screen
const state = store.getState()
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible)


//console.log(store.getState());
const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));

