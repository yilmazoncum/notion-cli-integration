import { Client } from '@notionhq/client';

import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const blockId = process.env.BLOCK_ID;

export async function getNotes() {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  var childArray = response.results;
  //console.log(childArray);
  let index = 0;
  childArray.forEach((child) => {
    console.log(index + "." + child.to_do.rich_text[0].plain_text);
    index++;
  });
}

export async function test() {
  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  var childArray = response.results;
  console.log(childArray[1].to_do.rich_text[0].text);

}

export async function appendNote(targetString) {

  const response = await notion.blocks.children.append({
    block_id: blockId,
    children: [
      {
        object: 'block',
        type: 'to_do',
        to_do: {
          rich_text: [
            {
              text: { content: `${targetString}`, link: null },
              type: 'text'
            }],
          checked: false,
          color: 'default'
        }
      },
    ],
  });

  console.log(response);
}

export async function deleteNote(number) {
  

  const response = await notion.blocks.children.list({
    block_id: blockId,
  });
  var childArray = response.results;

  const deleteID = childArray[number].id;
  
  const response2 = await notion.blocks.delete({
    block_id: deleteID,
  });

  console.log("Note " + number + " is deleted");
  console.log("-------------------------------");

  getNotes();
  
} 