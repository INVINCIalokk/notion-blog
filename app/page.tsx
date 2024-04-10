
import NotionPage from "@/components/NotionRender";
import { getNotionPage } from "@/components/notion1";




export default async function Page(){
  
  const recordMap = await getNotionPage('f47bd446a08c48668aece02970dffe0d')
  console.log(recordMap)
  return(
    <>
      <NotionPage recordMap={recordMap} />
    </>
  
  )

}
