import { useState, useEffect } from 'react';
import { getSiteSettings } from '../../actions';

export default function Themes() {
  const [siteSettings, setSiteSettings] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const siteSettings = await getSiteSettings();
      setSiteSettings(siteSettings);
    };

    fetchData();
  }, []);

  console.log(siteSettings);

  return (
    <>
      <h1>Themes</h1>
    </>
  );
}
