import React from 'react';
import { Provider } from 'react-redux';
import { render , screen , act} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Login from './Login'
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore({});


describe(' Checking Login Component Elements Rendering ', () => {


  
  test('renders Welcome Text', () => {
  render(
      <Provider store={store}>
        <MemoryRouter>
            <Login/>
        </MemoryRouter>
      </Provider>
   );
    const linkElement = screen.getByRole('heading' ,{level : 4});
    expect(linkElement).toBeInTheDocument();
  });


  test('Renders LogIn Text', () => {
     render(
      <Provider store={store}>
        <MemoryRouter>
            <Login/>
        </MemoryRouter>
      </Provider>
   );
    const linkElement = screen.getByRole('heading' ,{level : 3});
    expect(linkElement).toBeInTheDocument();
  });


  test('Render the username Input-Field ', () => {
  render(
      <Provider store={store}>
        <MemoryRouter>
            <Login/> 
        </MemoryRouter>
      </Provider>
   );
    const usernameTestField = screen.getByPlaceholderText(/username/i)
    expect(usernameTestField).toBeInTheDocument();
  });


  test('Render the Password Input-Field ', () => {
    render(
        <Provider store={store}>
          <MemoryRouter>
              <Login/> 
          </MemoryRouter>
        </Provider>
     );
      const passwordTestField = screen.getByPlaceholderText(/Password/i)
      expect(passwordTestField).toBeInTheDocument();
    });

    test('Render the Submit Button ', () => {
      render(
          <Provider store={store}>
            <MemoryRouter>
                <Login/> 
            </MemoryRouter>
          </Provider>
       );
        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument();
      });
      

});

describe(' Checking Login Component Events by using userEvent Library ' , () =>{
  
  
  test('Checking the Login Submit Button With Valid Username And Password', async () => {
  render(
      <Provider store={store}>
        <MemoryRouter>
        <Login />
        </MemoryRouter>
      </Provider>
    );

    //Find The Elements First
    await act(async() => {
    const usernameTestField = screen.getByPlaceholderText(/Username/i);
    const passwordTestField = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByRole('button', { name: /Submit/ });

    //type Method
     userEvent.type(usernameTestField, 'devesh');
     userEvent.type(passwordTestField, 'Pass@123');  
     expect(usernameTestField).toHaveValue('devesh');
     expect(passwordTestField).toHaveValue('Pass@123');

     //click method
     userEvent.click(submitButton);
    });
    
    //Assertion for test
    expect(store.getActions()[0]).toMatchObject({payload: { username: 'devesh', password: 'Pass@123' }
    });
    
  });

  });
