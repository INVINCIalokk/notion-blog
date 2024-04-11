'use client'
import Head from 'next/head'

import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { NotionRenderer } from 'react-notion-x'
import dynamic from 'next/dynamic'


export const NotionPage = ({
  recordMap,
  rootPageId
}: {
  recordMap: ExtendedRecordMap
  rootPageId?: string
}) => {
  if (!recordMap) {
    return null
  }  
  const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)


  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        rootPageId={rootPageId}
        components={{
          Collection,
          Equation,
        }}
      />
    </>
  )
}