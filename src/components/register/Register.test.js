import React from 'react';
import { Provider } from 'react-redux';
import { render , screen , act} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import Register from './Register'
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore({});


describe(' Checking Register Component Elements Rendering ', () => {


  
  test('renders Welcome Text', () => {
  render(
      <Provider store={store}>
        <MemoryRouter>
            <Register/>
        </MemoryRouter>
      </Provider>
   );
    const linkElement = screen.getByRole('heading' ,{level : 4});
    expect(linkElement).toBeInTheDocument();
  });


  test('Renders Register Text', () => {
     render(
      <Provider store={store}>
        <MemoryRouter>
            <Register/>
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
            <Register/> 
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
              <Register/> 
          </MemoryRouter>
        </Provider>
     );
      const passwordTestField = screen.getByPlaceholderText(/Password/i)
      expect(passwordTestField).toBeInTheDocument();
    });

    test('Render the Radio Button Male - Female ', () => {
        render(
            <Provider store={store}>
              <MemoryRouter>
                  <Register/> 
              </MemoryRouter>
            </Provider>
         );
          const radioButtonLables = screen.getByText(/male female/i)
          expect(radioButtonLables).toBeInTheDocument();
        });


        test.skip('should allow the user to select a gender', () => {
          render(
            <Provider store={store}>
              <MemoryRouter>
                  <Register/> 
              </MemoryRouter>
            </Provider>
         );
          const maleRadio = screen.getByRole('radio', { name: /male/i });
          const femaleRadio = screen.getByRole('radio', { name: /female/i });
      
         
          expect(maleRadio).not.toBeChecked();
          expect(femaleRadio).not.toBeChecked();
      
         
          userEvent.click(maleRadio);
          expect(maleRadio).toBeChecked();
          expect(femaleRadio).not.toBeChecked();
      
          
          userEvent.click(femaleRadio);
          
          expect(maleRadio).not.toBeChecked();
          expect(femaleRadio).toBeChecked();
        });


    test('Render the Submit Button ', () => {
      render(
          <Provider store={store}>
            <MemoryRouter>
                <Register/> 
            </MemoryRouter>
          </Provider>
       );
        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument();
      });
      

});

describe("Register", () => {
   
    test.skip('submits form data on valid input', () => {
        const signupUserMock = jest.fn();
        const navigateMock = jest.fn();
        
        render(
            <Provider store={store}>
              <MemoryRouter>
                  <Register signupUser={signupUserMock} navigate={navigateMock}/> 
              </MemoryRouter>
            </Provider>
         );
        
        const usernameTestField = screen.getByPlaceholderText('Enter Username');
        const passwordTestField = screen.getByPlaceholderText('Password');
        const maleRadioButton = screen.getByRole('radio', {name : 'gender'});
        const submitButton = screen.getByText(/Submit/i);
        
        userEvent.type(usernameTestField, 'john123');
        userEvent.type(passwordTestField, 'Password123!');
        userEvent.click(maleRadioButton);
        userEvent.click(submitButton);
       
        expect(signupUserMock).toHaveBeenCalledWith({ userid: 'john123', password: 'Password123!', gender: 'Male' });
        expect(navigateMock).toHaveBeenCalled();
      });
});