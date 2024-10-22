import { OfficeParserConfig, parseOfficeAsync } from 'officeparser';
import { useEffect, useState } from 'react';

interface DocxParser {
  url: string;
}

export default function DocxParser({ url }: DocxParser) {
  const [parsedData, setParsedData] = useState<any>();

  const config: OfficeParserConfig = {
    newlineDelimiter: ' ', // Separate new lines with a space instead of the default \n.
    ignoreNotes: true // Ignore notes while parsing presentation files like pptx or odp.
  };

  useEffect(() => {
    const parseDocxFile = () => {
      parseOfficeAsync('/Users/harsh/Desktop/files/mySlides.pptx', config)
        .then(data => {
          const newText = data + ' look, I can parse a powerpoint file';
          setParsedData(newText);
        })
        .catch(error => console.error(error));
    };

    parseDocxFile();
  }, []);
  return <></>;
}
