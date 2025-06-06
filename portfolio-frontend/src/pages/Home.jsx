import { useEffect, useState } from 'react';
import { getAbout } from '../api';

export default function Home() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getAbout()
      .then(res => setAbout(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{about.name}</h1>
      <p className="mt-4">{about.bio}</p>
      <h3 className="mt-4 font-semibold">Skills:</h3>
      <ul className="list-disc list-inside">
        {about.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
      <div className="mt-4">
        <a 
          href={about.contact_links.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline mr-4"
        >
          LinkedIn
        </a>
        <a 
          href={about.contact_links.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
