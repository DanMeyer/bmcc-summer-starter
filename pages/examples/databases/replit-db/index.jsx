import Database from '@replit/database'

/*

Replit's built-in database:
https://docs.replit.com/hosting/database-faq

*/

/*

For complex keys, try naming them via the "Object:id:subobjects" syntax, a la Redis:
https://riptutorial.com/redis/example/13636/key-naming-schemes
https://stackoverflow.com/questions/6965451/redis-key-naming-conventions

For example:
 - user:alice
 - team:a
 - city:nyc:borough:brooklyn:gdp

*/

async function incrementAndFetchVisitorCount() {
  const db = new Database();
  
  const currentVisitorCount = await db.get("visitorCount");
  
  let newVisitorCount;
  if (!currentVisitorCount) {
    await db.set("visitorCount", 1);
    newVisitorCount = 1;
  } else {
    newVisitorCount = currentVisitorCount + 1;
  }
  await db.set("visitorCount", newVisitorCount);
  
  return newVisitorCount;
}


export async function getServerSideProps(context) {
  return {
    props: {visitorCount : await incrementAndFetchVisitorCount()}, // will be passed to the page component as props
  }
}

export default function ReplitDbExample(props) {
  
  return (
    <div>
      Visitor count: {props.visitorCount}
    </div>
  )
}
