const Features = () => {
  const BentoCard = ({ src, title, description }) => {
    return (
      <div className="relative size-full">
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <>
            <h1 className="bento-title text-blue-500">{title}</h1>
          </>
        </div>
      </div>
    );
  };
  return (
    <section id="features" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">What is FGO?</p>
          <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              src="/videos/fgo_complain.mp4"
              title={<>Malding</>}
              description="What is new in FGO"
            />
          </div>
          <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              src="/videos/fgo_run.mp4"
              title={<>Fou</>}
              description="What is new in FGO"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
