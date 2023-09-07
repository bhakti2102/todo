import React from 'react';
import { Provider } from 'react-redux';
import { render , screen , act} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

const mockStore = configureMockStore();
const store = mockStore({});


describe(' Checking TodoList Component Elements Rendering ', () => {

    test(' Render the component with empty input ', () => {
        render(
          <Provider store={store}>
            <TodoList />
          </Provider>
        );
        const inputElement = screen.getByPlaceholderText(/Enter your list item here/i);
        expect(inputElement).toBeInTheDocument();
        
      });


      test('Render the add button', () => {
        render(
          <Provider store={store}>
            <TodoList />
          </Provider>
        );
        const addButtonElement = screen.getByText(/add/i);
        expect(addButtonElement).toBeInTheDocument();
      });

      
});