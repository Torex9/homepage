interface NewsPropTypes {
  header: string;
  news: { newsHeadLine: string; newsBody: string }[];
}

const News = ({ header, news }: NewsPropTypes) => {
  return (
    <div className=" px-5 py-[25px] bg-slate-950 lg:overflow-y-scroll">
      <h2 className="font-sans font-extrabold text-3xl text-amber-300 lg:text-[45px] lg:pb-3">
        {header}
      </h2>
      {news.map((items, index) => (
        <div
          key={index}
          className={` px-0 py-[30px] ${
            index > 0 && index < news.length - 1
              ? "border-t-slate-500  border-t-2 border-solid"
              : ""
          } ${
            index < news.length - 1
              ? "border-solid border-b border-b-slate-500"
              : ""
          }`}
        >
          <h3 className="font-sans font-extrabold text-xl text-white mb-2.5 hover:text-amber-300 hover:cursor-pointer">
            {items.newsHeadLine}
          </h3>
          <p className="font-sans font-normal text-xl text-slate-300 leading-relaxed">
            {items.newsBody}
          </p>
        </div>
      ))}
    </div>
  );
};
export default News;
