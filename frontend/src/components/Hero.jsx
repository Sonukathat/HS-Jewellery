import { useEffect, useState } from 'react';
import home1 from '../assets/homeImg/WhatsApp Image 2025-08-11 at 9.41.49 AM.jpeg';
import home2 from '../assets/homeImg/photo-1749027862164-0088ea3cce4e.avif';

const images = [home1, home2];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pb-1 w-full overflow-hidden relative border-b border-gray-400">
      <div
        className="flex transition-transform duration-700 ease-in-out  max-h-[650px]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt="jewellery" className="w-full flex-shrink-0" />
        ))}
      </div>
    </div>
  );
}
