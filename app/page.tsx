
import { getNotionPage } from "@/components/notion1";
import { NotionRenderer } from "react-notion-x";


export default async function Page(){
  const recordMap = await getNotionPage('National-Academy-f00ec23812134553b59ff8b3eee7f2b0')
  console.log({recordMap})
  return(
    // <div>
    //   Hello
      
    // </div>
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )
}
