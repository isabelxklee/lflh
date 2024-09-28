import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>
        <Image
          src="./assets/LFLH-logo.svg"
          width={500}
          height={500}
          alt="Listening for the Long Haul Logo"
        />
      </h1>
    </div>
  );
}
