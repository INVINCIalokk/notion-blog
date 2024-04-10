

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

export default async function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  const data = await getData()
  console.log(data)
  return <NotionPage recordMap={data.props.recordMap} rootPageId={rootNotionPageId} />
}
