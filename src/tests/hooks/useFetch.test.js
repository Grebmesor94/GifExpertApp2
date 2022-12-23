import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../hooks/useFetch";


describe('Name of the group', () => {

  const category = 'one punch'

  test('should return initial state', () => {

    
    const {result} = renderHook(() => useFetch(category))

    const { images, loading } = result.current

    expect(loading).toBe(true);
    expect(images).toEqual([]);
    expect(images.length).toBe(0);

  });

  test('should return images and loading false', async () => {

    const { result } = renderHook(() => useFetch(category))

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0), {timeout: 5000})
    
  });
});