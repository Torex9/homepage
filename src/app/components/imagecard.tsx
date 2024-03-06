interface ImageCardPropTypes {
  imageUrl: string;
  imageAlt: string;
  heading: string;
  subheading: string;
  paragraph: string;
}

const ImageCard = ({
  imageUrl,
  imageAlt,
  heading,
  subheading,
  paragraph,
}: ImageCardPropTypes) => {
  return (
    <div className=" grid grid-cols-[1fr_2fr] grid-rows-[1fr_1fr_2fr] gap-x-5 items-center">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover row-[span_3]"
      />
      <h3 className="font-sans font-extrabold text-[32px] text-slate-300">
        {heading}
      </h3>
      <h4 className="text-slate-950 font-sans font-extrabold text-[16px] hover:text-red-400 hover:cursor-pointer">
        {subheading}
      </h4>
      <p className="font-sans font-normal text-xl text-slate-500 leading-relaxed">
        {paragraph}
      </p>
    </div>
  );
};

export default ImageCard;
