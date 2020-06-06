const fs = require('fs');
const iconv = require('iconv-lite');
const parseRTF = require('rtf-parser');

const document = './documents/002.rtf';
const documentsDir = './documents';

const typeConfigOne = {
    "title": {
      "font-size": 14,
      "style": "bold",
      "upper": true
    },

    "subtitle": {
      "style": "bold",
      "upper": false,
      "font-size": 12.5,
      "number": true
    },

    "content": {
      "font-size": 10.5,
      "style": "regular",
      "upper": false
    }
}

fs.readdirSync(documentsDir).forEach((file, index) => {
  if (file && index === 0) {
    readRtf(`${documentsDir}/${file}`);
  }
});

function readRtf(filename) {
  try {
    console.log('Redfile', filename);
    const text = fs.readFileSync(filename);
    str = iconv.decode(text, 'win1251');

    parseRTF.string(str, (err, doc) => {
      if (err) {
        console.log('ERROR in file', filename);
        return;
      }

      const { title: titleType } = typeConfigOne;
      const { content: docLines } = doc;

      const searchTitleLine = (line) => {

      }

      docLines.filter((line) => {
        console.log(line)
      }).forEach((line) => {
        if (line && line.content && line.content[0]) {
          const value = line.content[0].value;
        }
      });
    });
  } catch (e) {
    console.error('Error in file', filename);
  }
}
