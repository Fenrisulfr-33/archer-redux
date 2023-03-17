const InfoRow = ({ title, info, ability, type }) => (
  <div className="row-flex justify-between">
    <div className="label border-2 border-gray-900">{title}:</div>
    {ability ? (
      <Link href={`/pokemon/abilities/${info.id}`} passHref>
        {info.name}
      </Link>
    ) : type ? (
      <div className={`${info.toLowerCase()}-bg rounded-lg p-2 font-bold`}>
        {info}
      </div>
    ) : (
      <div className={" bg-purple-400  rounded-lg p-2 font-bold"}>{info}</div>
    )}
  </div>
);

export default function MovePage({ move }) {
  return (
    <div className={"m-2 bg-gray-700 rounded-lg border border-purple-100 text-xs"}>
      <div className={"row-flex"}>
        <div className={"col-flex m-2 bg-gray-600 rounded-lg w-1/3"}>
          <div className={'m-2 space-y-1'}>
          <h1>Move Data</h1>
          <InfoRow title={"Type"} info={move.type} type={true} />
          <InfoRow title={"Category"} info={move.category} />
          <InfoRow title={"Power"} info={move.power} />
          <InfoRow title={"Accuracy"} info={`${move.accuracy}%`} />
          <InfoRow title={"PP"} info={`${move.pp} (max. ${move.pp * 1.6})`} />
          <InfoRow
            title={"Makes Contact?"}
            info={move.contact ? move.contact : "--"}
          />
          <InfoRow title={"Introduced"} info={`Generation ${move.generation}`} />
          </div>
        </div>
        <div className={"col-flex m-2 bg-gray-600 rounded-lg w-1/3"}>
          <div className={'m-2'}>
          <h1>Move Data</h1>
          <InfoRow title={"Type"} info={move.type} type={true} />
          <InfoRow title={"Category"} info={move.category} />
          <InfoRow title={"Power"} info={move.power} />
          <InfoRow title={"Accuracy"} info={move.accuracy} />
          <InfoRow title={"PP"} info={move.pp} />
          <InfoRow
            title={"Makes Contact?"}
            info={move.contact ? move.contact : "--"}
          />
          <InfoRow title={"Introduced"} info={move.generation} />
          </div>
        </div>
        <div className={"col-flex m-2 bg-gray-600 rounded-lg w-1/3"}>
          <div className={'m-2'}>
          <h1>Move Data</h1>
          <InfoRow title={"Type"} info={move.type} type={true} />
          <InfoRow title={"Category"} info={move.category} />
          <InfoRow title={"Power"} info={move.power} />
          <InfoRow title={"Accuracy"} info={move.accuracy} />
          <InfoRow title={"PP"} info={move.pp} />
          <InfoRow
            title={"Makes Contact?"}
            info={move.contact ? move.contact : "--"}
          />
          <InfoRow title={"Introduced"} info={move.generation} />
          </div>
        </div>
      </div>
    </div>
  );
}
