const fs = require('fs').promises;
const path = require('path');
const dayjs = require('dayjs');
const md5 = require('md5')

// npm run new:post filename title [tag1] [tag2] ...
const createPost = async () => {
  const [, , type, title, ...tags] = process.argv;
  
  await fs.writeFile(
    path.join(process.cwd(), `./src/content/${type}/${dayjs().format('YYYY-MM-DD')}-${title.replace(/[^\w^\s^\u4e00-\u9fa5]/gi,'')}.mdx`),
`---
title: '${title}'
date: '${dayjs().format('YYYY-MM-DD HH:mm:ss')}'
slug: '${md5(dayjs().format('YYYY-MM-DD HH:mm:ss'),title)}'
tags:${tags.map(tag => `\n  - '${tag}'`).join('')}
---
null`,
    );
  };

createPost();