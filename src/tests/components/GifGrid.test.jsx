import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";

describe('test on <GifGrid />', () => {
  
  const category = 'one punch'

  test('should render the loading initially', () => {


    render( <GifGrid category={category} /> )
    screen.debug()
    expect(screen.getByText('Cargando...')).toBeTruthy()
    
  });

});