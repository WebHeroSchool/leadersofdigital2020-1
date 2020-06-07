const fs = require('fs');
const iconv = require('iconv-lite');
const parseRTF = require('rtf-parser');

const document = './documents/002.rtf';
const documentsDir = './documents';

const excludeTitles = ['ИНСТРУКЦИЯ', 'ДОЛЖНОСТНАЯ', 'ООО', 'ИНСТРУКЦИИ', 'ОБЩИЕ'];

const typeConfigOne = {
  "title": {
    "fontSize": 14,
    "style": "bold",
    "upper": true
  },

  "subtitle": {
    "style": "bold",
    "upper": false,
    "fontSize": 12.5,
    "number": true
  },

  "content": {
    "fontSize": 10.5,
    "style": "regular",
    "upper": false
  }
}

const getLineFontSize = (line) => {
  if (line && line.style && line.style.fontSize) {
    return line.style.fontSize;
  }

  return undefined;
}

const getLineContent = (line) => {
  if (line && line.content) {
    return line.content;
  }

  return undefined;
}

const getLineValue = (line) => {
  if (line) {
    const content = getLineContent(line)

    if (content && content[0] && content[0].value ) {
      return content[0].value;
    }
  }

  return undefined;

}

const isNeedFontSize = (line, needSize) => {
  if (line) {
    const lineFontSize = getLineFontSize(line);

    return (needSize * 2) === lineFontSize;
  }

  return false;
}

function isNumeric(line) {
  const value = getLineValue(line);
  if (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
}

const isLessLength = (line, minLength) => {
  const value = getLineValue(line);
  return value && value.length >= minLength;
}

const isUpper = (line) => {
  const value = getLineValue(line);
  if (value) {
    return value === value.toUpperCase();
  }
  return false;
}

const isBold = (line) => {
  return line && line.style && line.style.bold;
}

const isNotExcludeTitle = (line) => {
  const value = getLineValue(line);

  if (value) {
    return excludeTitles.indexOf(value) === -1;
  }

  return false;
}

/**
 * @typedef {object} NextLine
 * @param {object} line
 * @param {number} index
 */
/**
 * Serach next line content
 * @param {NextLine} nextLine
 * @param {string} contentText
 */
const searchLineContent = (line) => {
  const content = getLineContent(line);
  if (Array.isArray(content)) {
    return content.map(lc => lc.value).join('\r\n');
  }

  return '';
}

module.exports = new Promise((moduleResolve, moduleReject) => {
  fs.readdirSync(documentsDir).forEach((file, index) => {
    if (file && index <= 10) {
      // if (file) {
      readRtf(`${documentsDir}/${file}`)
        .then(moduleResolve)
        .catch(moduleReject);
    }
  });

  function readRtf(filename) {
    return new Promise((resolve, reject) => {
      try {
        console.log('Preparing file:', filename);
        const text = fs.readFileSync(filename);
        str = iconv.decode(text, 'win1251');

        parseRTF.string(str, (err, doc) => {
          if (err) {
            console.log('ERROR parsing file:', filename);
            return;
          }

          const { title: titleType } = typeConfigOne;
          const { fontSize: fontSizeType } = titleType;

          const { content: docLines } = doc;

          const titleLines = [];
          const subtitles = [];

          // Geting file title
          docLines
            .filter(isNotExcludeTitle)
            .filter(line => isNeedFontSize(line, typeConfigOne.title.fontSize))
            .filter(isBold)
            .filter(isUpper)
            .filter(line => !isNumeric(line))
            .filter(line => {
              const content = getLineContent(line);
              return content && content.length <= 4;
            })
            .filter(line => isLessLength(line, 5))
            .forEach((resultTitleLine) => titleLines.push(getLineValue(resultTitleLine)));

          if (titleLines.length > 0) {
            docLines
              .filter(isBold)
              .filter(line => !isUpper(line))
              .filter(line => isNeedFontSize(line, typeConfigOne.subtitle.fontSize))
              .filter(line => isLessLength(line, 5))
              .filter(line => {
                const content = getLineContent(line);
                return content && content.length <= 5;
              }).forEach((resultSubtitle) => {
              // console.log('Result sub title:', resultSubtitle);
              subtitles.push(resultSubtitle);
            });

            const indexedLines = [];
            docLines.forEach((line, index) => {
              if (subtitles.indexOf(line) !== -1) {
                indexedLines.push({
                  line,
                  index,

                  title: getLineValue(line),
                  nextLines: [],
                  nextContent: '',
                });
              } else {
                const lastSubtitle = indexedLines[indexedLines.length - 1];

                if (lastSubtitle) {
                  lastSubtitle.nextLines.push({ line, index });
                  lastSubtitle.nextContent += searchLineContent(line);
                }
              }
            });

            const result = {
              title: titleLines[0],
              subtitles: indexedLines.map(({ title, nextContent }) => (
                { title, nextContent }
              )),
            };

            console.log(result);

            resolve(result);
          }

          reject(null);
        });
      } catch (e) {
        console.error('Error in file', filename);
      }
    });
  }
});
