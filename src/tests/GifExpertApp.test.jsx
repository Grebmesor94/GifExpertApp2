import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";
import { useFetch } from "../hooks/useFetch";


describe('test on <GifExpertApp />', () => {
  test('should match snapshot', () => {
    
    const {container} = render(<GifExpertApp />)

    expect(container).toMatchSnapshot();

  });
});