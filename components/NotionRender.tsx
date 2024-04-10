import { NotionRenderer } from "react-notion-x";
export default ({ recordMap }:any) => (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  )