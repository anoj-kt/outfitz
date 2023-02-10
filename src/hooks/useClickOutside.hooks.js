import { useEffect } from 'react';

export const useClickoutside = (domNode, handler) => {
  useEffect(() => {

    const dropdownCloser = (event) => {
      if (
        !domNode.current.contains(event.target) &&
        !domNode.current.parentElement.contains(event.target)
      ) {
        console.log(event.target.parentElement);
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
