const TranslateResult = ({ translateResult }: { translateResult: string }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
      <div className="px-60">
        <p
          className={`overflow-hidden whitespace-nowrap font-mono text-xl ${
            translateResult ? 'animate-typing' : ''
          }`}
        >
          {translateResult}
        </p>
      </div>
    </div>
  );
};

export default TranslateResult;
