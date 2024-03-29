const fs = require('fs');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it')({ html: true });
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const yaml = require('js-yaml');
const removeMarkdown = require('remove-markdown');
const htmlMin = require('html-minifier');

const global = yaml.load(
	fs.readFileSync('src/data/global.yml', 'utf8')
);

module.exports = function(eleventyConfig) {
  
  // Collections

  const collections = {
    'posts': 'src/posts/*/index.md',
    'pages': 'src/pages/!(404)/index.njk',
  };

  eleventyConfig.addCollection('posts', (collectionApi) => {
    return collectionApi.getFilteredByGlob(
      collections.posts
    );
  });

  eleventyConfig.addCollection('sitemap', (collectionApi) => {
    return collectionApi.getFilteredByGlob([
      collections.posts,
      collections.pages,
    ]);
  });


  // Yaml

  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));


  // Plugins

  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: true,
  })
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  

  // HTML

	eleventyConfig.addTransform('html-minify', (content, path) => {
		if (path && path.endsWith('.html')) {
			return htmlMin.minify(
				content, {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					decodeEntities: true,
					includeAutoGeneratedTags: false,
					removeComments: true,
				}
			);
		}

		return content;
	});


  // To enable merging of tags

  eleventyConfig.setDataDeepMerge(true)


  // Copy these static files to _site folder

  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/manifest.json')
  eleventyConfig.addPassthroughCopy('CNAME')


  // To create a filter to determine duration of post

  eleventyConfig.addFilter('readTime', (value) => {
    const content = value
    const textOnly = content.replace(/(<([^>]+)>)/gi, '')
    const readingSpeedPerMin = 450
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin))
  })

  // Enable us to iterate over all the tags, excluding posts and all
  
  eleventyConfig.addCollection('tagList', collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['posts', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })


  // Dates

	eleventyConfig.addFilter('dateLong', (value) => {
		return value.toLocaleString('en', {
			dateStyle: 'long',
		});
	});

	eleventyConfig.addFilter('dateShort', (value) => {
		const articleYear = value.getFullYear();
		const currentYear = new Date().getFullYear();
		const dateFormat = articleYear < currentYear
			? {
				dateStyle: 'long',
			}
			: {
				month: 'long',
				day: 'numeric',
			};

		return value.toLocaleString('en', dateFormat);
	});


  // Absolute links

	eleventyConfig.addFilter('absolute', (content, post) => {
		const reg = /(src="[^(https://)])|(src="\/)|(href="[^(https://)])|(href="\/)/g;
		const prefix = global.domain + post.url;
		return content.replace(reg, (match) => {
			if (match === 'src="/' || match === 'href="/') {
				match = match.slice(0, -1);
				return match + prefix;
			} else {
				return match.slice(0, -1) + prefix + match.slice(-1);
			}
		});
	});


  // Markdown

	eleventyConfig.addFilter('markdownIt', (value) => {
		return markdownIt.render(value);
	});
  
  eleventyConfig.addFilter('markdownRemove', (value) => {
		return removeMarkdown(value);
	});

  eleventyConfig.setLibrary('md', markdownIt);


  // Passthrough copy

	[
		'src/images',
		'src/posts/**/*.!(md|yml)',
	].forEach(
		path => eleventyConfig.addPassthroughCopy(path)
	);


  return {
    dir: {
      input: 'src',
      output: 'dist',
			includes: 'includes',
			layouts: 'layouts',
      data: 'data'
    },
    dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		templateFormats: [
			'md', 'njk'
		],
  }
}
