'use client'
import { NotionRenderer } from "react-notion-x"

const NotionPage = (recordMap:any) => {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
  )
}

export default NotionPage