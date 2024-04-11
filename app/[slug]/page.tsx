import { NotionPage } from "@/components/NotionRender";
import { rootNotionPageId } from "@/lib/config";
import notion from "@/lib/notion";

async function getData(rootNotionPageId:string) {
  const recordMap = await notion.getPage(rootNotionPageId)
  return {
    props:{
    recordMap
  }
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  let data;
  try{
    data = await getData(params.slug)
  }catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading page</div>;
  }
  return (
    <div className='bg-black'><NotionPage recordMap={data.props.recordMap} rootPageId={rootNotionPageId} /></div>
  )
}