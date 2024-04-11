import { NotionPage } from "@/components/NotionRender";
import { getNotionPage } from "@/components/NotionData";
import { rootNotionPageId } from "@/lib/config";

export default async function Page({ params }: { params: { slug: string } }) {
  let data;
  try{
    data = await getNotionPage(params.slug)
  }catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading page</div>;
  }
  return (
    <div className='bg-black'><NotionPage recordMap={data.props.recordMap} rootPageId={rootNotionPageId} /></div>
  )
}