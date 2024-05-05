import { NotionPage } from "@/components/NotionRender";
import { getNotionPage } from "@/components/NotionData";
import { rootNotionPageId } from "@/lib/config";
import BackButton from "@/components/button";
import HomeButtion from '@/components/HomeButton'

export default async function Page({ params }: { params: { slug: string } }) {
  let data;
  try{
    data = await getNotionPage(params.slug)
  }catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading page</div>;
  }
  return (
    <div className=''>
      <div className="fixed flex gap-2 bg-blue-700 w-full top-0 z-50 p-4">
        <HomeButtion/>
        <BackButton/>
      </div>
      <div className="mt-6 pt-2">
        <NotionPage recordMap={data.props.recordMap} rootPageId={rootNotionPageId} />
      </div>
    </div>
  )
}