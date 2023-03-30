const InfoRow = ({ title, info, ability, type }) => (
  <div className="row-flex justify-between">
    <div className={"m-1"}>
      {/* <div className="bg-gray-500 text-black border border-black rounded-lg p-2 font-bold">{title}:</div> */}
      <div className={'xxs-label phone:label border-2 border-gray-800'}>{title}:</div>
    </div>
    {ability ? (
      <Link href={`/pokemon/abilities/${info.id}`} passHref>
        {info.name}
      </Link>
    ) : type ? (
      <div className={'m-1'}>
      <div className={`${info.toLowerCase()}-bg text-gray-800 blank-label`}>
        {info}
      </div>
      </div>
    ) : (
      <div className={"m-1"}>
        <div className={"label-purp"}>{info}</div>
      </div>
    )}
  </div>
);

export default function MovePage({ move }) {
  return (
    <div className={'flex justify-center'}>
    <div
      className={"m-2 bg-gray-700 rounded-lg border border-purple-100 w-5/6 tablet:w-full text-xxs phone:text-xs"}
    >
      <div className={"row-col tablet:row-flex"}>
        <div className={"col-flex m-2 bg-gray-600 rounded-lg tablet:w-1/3"}>
          <div className={"m-2"}>
            <div className={'flex justify-center'}>
              <h1 className={'label'}>Move Data</h1>
            </div>
            <InfoRow title={"Type"} info={move.type} type={true} />
            <InfoRow title={"Category"} info={move.category} />
            <InfoRow title={"Power"} info={move.power} />
            <InfoRow title={"Accuracy"} info={`${move.accuracy}%`} />
            <InfoRow title={"PP"} info={`${move.pp} (max. ${move.pp * 1.6})`} />
            <InfoRow
              title={"Makes Contact?"}
              info={move.contact ? move.contact : "--"}
            />
            <InfoRow
              title={"Introduced"}
              info={`Generation ${move.generation}`}
            />
          </div>
        </div>
        <div className={"col-flex m-2 bg-gray-600 rounded-lg tablet:w-2/3"}>
          <div className={"m-2"}>
            <h1>Effects</h1>
            <InfoRow title={"Short Effect"} info={move.effect.shortEffect} />
            <InfoRow title={"Full Effect"} info={move.effect.full} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
