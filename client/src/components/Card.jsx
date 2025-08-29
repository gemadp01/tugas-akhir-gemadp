const Card = ({ title, description, status }) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <div className="flex flex-col h-full shadow justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3 bg-gray-50">
        <div>
          <h4 className=" font-bold text-2xl leading-tight">{title}</h4>
          <div className="my-4">
            <p>{description}</p>
          </div>
        </div>
        <div>
          <a
            className="mt-1 inline-flex font-bold items-center border-2 border-transparent outline-none focus:ring-1 focus:ring-offset-2 focus:ring-link active:bg-link active:text-gray-700 active:ring-0 active:ring-offset-0 leading-normal bg-link text-gray-700 hover:bg-opacity-80 text-base rounded-lg py-1.5"
            aria-label="Quick Start"
            target="_self"
            href="/learn"
          >
            {status}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
