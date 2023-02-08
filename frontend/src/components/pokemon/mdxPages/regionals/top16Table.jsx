export default function Top16Table({ regionalResults}){
    return (
        <div className={'flex flex-row'}>
            <table className={'table-row'}>
                <tr>
                    <th>Top 16</th>
                    <th>Score</th>
                </tr>
                {regionalResults.top_16.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.score}</td>
                    </tr>
                ))}
            </table>
            <table>
                <tr>
                    <th>Top 8</th>
                    <th>Score</th>
                </tr>
                {regionalResults.top_8.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.score}</td>
                    </tr>
                ))}
            </table>
            <table>
                <tr>
                    <th>Top 4</th>
                    <th>Score</th>
                </tr>
                {regionalResults.top_4.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.score}</td>
                    </tr>
                ))}
            </table>
            <table>
                <tr>
                    <th>Finals</th>
                    <th>Score</th>
                </tr>
                {regionalResults.top_2.map((obj, index) => (
                    <tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.score}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}