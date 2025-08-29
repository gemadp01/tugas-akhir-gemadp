import { Link } from "react-router-dom";

function CardCafe(props) {
  // console.log(props);
  const { id, namaCafe, lokasiCafe, noTelp } = props;

  return (
    <Link to={{ pathname: `/find-cafe/cafe-detail/${id}` }}>
      <div className="flex flex-col flex-wrap sm:flex-row border items-center border-bgColor-2 py-1 px-1 max-w-96 text-center sm:text-left rounded">
        <div className="flex-shrink-0 m-4 w-16 h-16 rounded-full bg-bgColor-2 self-center"></div>
        <div className="flex flex-col py-2 pr-2">
          <h4 className="text-lg font-light">{namaCafe}</h4>
          <p className="text-sm font-hairline">
            {lokasiCafe} - {noTelp}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardCafe;
