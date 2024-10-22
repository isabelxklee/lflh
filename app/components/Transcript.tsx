import { PortableText, toPlainText } from '@portabletext/react';
import { useCallback } from 'react';

export default function Transcript({ text }: any) {
  const stringStrip = useCallback(() => {
    text.map((block: any) => {
      return block;
    });
  }, []);

  const PLogic = ({ children, value }: any) => {
    console.log(toPlainText(value));
    return <p>{children}</p>;
  };

  const components = {
    block: {
      p: PLogic
    }
  };

  return (
    <>
      <PortableText value={text} components={components} />
    </>
  );
}
