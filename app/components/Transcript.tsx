import { PortableText } from '@portabletext/react';

export default function Transcript({ transcript }: any) {
  const components = {
    block: {
      h1: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-purple-500">{children}</blockquote>
      ),
      span: ({ children }: any) => <span>{children}</span>
    }
  };

  return <PortableText value={transcript} components={components} />;
}
