import query from "./bit-io"

export async function getServerSideProps(context) {
  const { rows } = await query('SELECT * FROM "dliden/2020_Census_Reapportionment"."Historical Apportionment" limit 10;');
  console.table(rows);

  const alabama = rows[0];
  /*

      {
      Name: 'Alabama',
      'Geography Type': 'State',
      Year: '1910',
      'Resident Population': '2138093',
      'Percent Change in Resident Population': 16.9,
      'Resident Population Density': 42.2,
      'Resident Population Density Rank': '25',
      'Number of Representatives': '10',
      'Change in Number of Representatives': '1',
      'Average Apportionment Population Per Representative': '213809'
    }
  */
  console.log(alabama);
  
  return {
    props: {state : alabama}, // will be passed to the page component as props
  }
}

export default function PostgresExample(props) {
  
  return (
    <div>
      <p>{props.state.Name}</p>
      <p>{props.state.Year}</p>
      <p>Population: {props.state['Resident Population']}</p>
    </div>
  )
}
