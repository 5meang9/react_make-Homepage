import { useEffect, useState } from "react";
import type {FC} from 'react'

export type TypingFontProps = {
  prevContents: string,
  TyingContents: string,
}

export const TypingFont: FC<TypingFontProps> = ({
  prevContents,
  TyingContents,
  ...props

}) => {

  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  // const completionWord = 'Yuto Village';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevContents) => {
        let result = prevContents ? prevContents + TyingContents[count] : TyingContents[0];
        setCount(count + 1);

        if (count >= TyingContents.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <p className="main-title">{blogTitle}</p>;
};

export default TypingFont;