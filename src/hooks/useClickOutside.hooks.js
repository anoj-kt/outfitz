import { useEffect } from 'react';


export const useClickoutside = (domNode, handler) => {

  useEffect(() => {
    console.log('Passed down as node arg', domNode.current)

    const dropdownCloser = (event) => {
      if (!domNode.current.contains(event.target)) {
        console.log(event.target);
        handler();
      }
    };

    document.addEventListener('mousedown', dropdownCloser);

    return () => {
      document.removeEventListener('mousedown', dropdownCloser);
    };
  }, []);

   return domNode;
};

