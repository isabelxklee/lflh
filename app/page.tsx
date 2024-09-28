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
        <p>
          Hearing voices is one of the most powerful ways to experience oral
          history project of people living with Long COVID and associated
          conditions (pwLCAC). In this section of the exhibition we encourage
          you find a quiet space where you can listen to, and process, the audio
          clips from the interviews. Here you will hear original interviews, and
          also in the way the exhibition is organized, with one clip following
          the other and organized by theme. To keep this section accessible, we
          have included the transcript with each audio clip, so that you can
          read while you listen and listen while you read.
        </p>
      </h1>
    </div>
  );
}
