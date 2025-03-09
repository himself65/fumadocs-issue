import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    async: false
  }
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
