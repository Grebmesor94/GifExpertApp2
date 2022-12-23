import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe('', () => {

  test('should change value of textbox', () => {

    render(<AddCategory onAddCategory={() => {}}/>)
    const input = screen.getByRole('textbox');
    
    fireEvent.input(input, { target: { value: 'saitama' } })
    expect(input.value).toBe('saitama')
    
  });
  
  test('should call onAddCategory if input has a value ', () => {
    
    const inputValue = 'saitama'
    const onAddCategory = jest.fn()

    render(<AddCategory onAddCategory={onAddCategory}/>)
    
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form');
    
    fireEvent.input(input, { target: { value: 'saitama' } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onAddCategory).toHaveBeenCalled();

  });

  test('onAddCategory should not be called', () => {

    render(<AddCategory onAddCategory={onAddCategory}/>)
    
    const onAddCategory = jest.fn()
    const form = screen.getByRole('form')


    fireEvent.submit(form)
    
    expect(onAddCategory).not.toHaveBeenCalled();


  });

})