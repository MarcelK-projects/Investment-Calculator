export default function Table({ results, formatter, initInvest}) {

    return (
      <table id="result">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
          {results.map((result) => 
            <tr>
              <td>{result.year}</td> 
              <td>{formatter.format(Math.trunc(result.valueEndOfYear))}</td>
              <td>{formatter.format(Math.trunc(result.interest))}</td>
              <td>{formatter.format(result.valueEndOfYear - (initInvest + (result.annualInvestment * result.year)))}</td>
              <td>{formatter.format(initInvest + (result.annualInvestment * result.year))}</td>
            </tr>)}
      </table>
    )

}