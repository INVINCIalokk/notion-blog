

import { ExtendedRecordMap } from 'notion-types'
import { NotionPage } from '../components/NotionRender'
import { rootNotionPageId } from '../lib/config'
import notion from '../lib/notion'

async function getData() {
  const recordMap = await notion.getPage(rootNotionPageId)
  return {
    props:{
    recordMap
  }
  }
}

export default async function Page() {
  let data;
  try {
    data = await getData();
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading page</div>;
  }

  if (!data || !data.props || !data.props.recordMap) {
    console.error('Invalid data:', data);
    return <div>Error loading page</div>;
  }

  return (
    <div className='bg-black'><NotionPage recordMap={data.props.recordMap} rootPageId={rootNotionPageId} /></div>
  )
}
