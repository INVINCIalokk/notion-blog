import { NotionAPI } from "notion-client";
const notion = new NotionAPI();

export async function getNotionPage(pageId: string) {
  try {
    const recordMap = await notion.getPage(pageId);
    // console.log(recordMap)
    return recordMap;
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    throw error;
  }
}



