import { useEffect, useState } from 'react';

const TranslateResult = ({ translateResult }: { translateResult: string }) => {
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

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
      <div className="px-60">
        <p className={`overflow-hidden font-mono text-xl text-justify`}>
          {animatedTranslation}
        </p>
      </div>
    </div>
  );
};

export default TranslateResult;
