import { useEffect, useRef, useState } from 'react';

const TranslateResult = ({ translateResult }: { translateResult: string }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const [animatedTranslation, setAnimatedTranslation] = useState('');

  useEffect(() => {
    setAnimatedTranslation('');

    const translationWords = translateResult.split(' ');

    translationWords.forEach((word, index) => {
      setTimeout(() => {
        setAnimatedTranslation(
          (prevTranslation) => `${prevTranslation} ${word}`
        );
      }, index * 50);
    });
  }, [translateResult]);

  useEffect(() => {
    const handleClick = () => {
      navigator.clipboard.writeText(translateResult);
    };

    const element = paragraphRef.current;

    element?.addEventListener('click', handleClick);

    return () => {
      element?.removeEventListener('click', handleClick);
    };
  }, [translateResult]);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
      <div className="mx-60">
        <p
          ref={paragraphRef}
          className={`overflow-hidden font-mono text-xl text-justify hover:cursor-pointer`}
        >
          {animatedTranslation}
        </p>
      </div>
    </div>
  );
};

export default TranslateResult;
