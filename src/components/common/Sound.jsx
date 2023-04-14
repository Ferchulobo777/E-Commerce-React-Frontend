import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

const Sound = ({ src }) => {
  const [sound, setSound] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const newSound = new Howl({
      src,
      autoplay: true,
      loop: true,
      volume: 0.7,
    });
    setSound(newSound);
    setPlaying(true);

    // Reproducir música automáticamente cuando se carga la página
    newSound.play();

    return () => {
      // Detener la instancia de Howl cuando el componente se desmonte
      newSound.stop();
    };
  }, [src]);

  const toggleSound = () => {
    if (sound) {
      if (playing) {
        sound.pause();
        setPlaying(false);
      } else {
        sound.play();
        setPlaying(true);
      }
    }
  };
  return (
    <button
      className="flex justify-center items-center p-4 h-full button text-white text-2xl sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 2xl:ml-28 mask"
      onClick={toggleSound}
    >
      <FontAwesomeIcon
        className="text-white w-10 h-6 icon_music items-center justify-center"
        icon={playing ? faStop : faPlay}
      />
    </button>
  );
};

export default Sound;
