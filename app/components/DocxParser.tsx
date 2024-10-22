import officeParser from 'officeparser';
import { useEffect } from 'react';

interface DocxParser {
  url: string;
}

export default function DocxParser({ url }: DocxParser) {
  useEffect(() => {
    const parseDocxFile = () => {
      officeParser.parseOffice(url, (data: any, error: any) => {
        if (error) {
          console.log(`Error: ${error}`);
          return;
        }
        console.log(data);
      });

      officeParser
        .parseOfficeAsync(url)
        .then((data: any) => console.log(data))
        .then((error: any) => console.log(error));
    };

    parseDocxFile();
  }, []);
  return <></>;
}
