import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components";

describe('test on <GifItem />', () => { 
  const titletest = 'titulo';
  const urltest =  'https://prueba.js/';
  
  test('should implement PropTypes', () => {

    const {container} = render(<GifItem  title={titletest} url={urltest}/>)

    expect(container).toMatchSnapshot();

  });

  test('should show url and title described', () => {
    render(<GifItem url={urltest} title={titletest} />)

    // expect(screen.getByRole('img').src).toBe(urltest);
    // expect(screen.getByRole('img').alt).toBe(titletest);

    const {src, alt} = screen.getByRole('img')

    expect(src).toBe(urltest);
    expect(alt).toBe(titletest);

  });

 })