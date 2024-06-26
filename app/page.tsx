
import { NotionPage } from '../components/NotionRender'
import { rootNotionPageId } from '../lib/config'
import { getNotionPage } from '@/components/NotionData'
import '../styles/firststyle.css'

export default async function Page() {
  let data;
  try {
    data = await getNotionPage(rootNotionPageId);
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading page</div>;
  }

  if (!data || !data.props || !data.props.recordMap) {
    console.error('Invalid data:', data);
    return <div>Error loading page</div>;
  }

  return (
    <div>
        <NotionPage recordMap={data.props.recordMap} rootPageId={rootNotionPageId} />
    </div>
  )
}
