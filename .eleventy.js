module.exports = function (eleventyConfig) {

    eleventyConfig.addShortcode("shortened", function (content) {

        const maxLength = 300;

        if (content && typeof content === 'string' && content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }

        return content;
    });

    eleventyConfig.addCollection("peopleSorted", function (collectionApi) {

        return collectionApi.getFilteredByTag("people")
            .sort((a, b) => {
                if (a.data.profile.sortOrder > b.data.profile.sortOrder) return 1;
                if (a.data.profile.sortOrder < b.data.profile.sortOrder) return -1;
                return 0;
            })
    });

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.setTemplateFormats("html,liquid,md,jpg,png");

    return {
        dir: {
            input: 'data',
            includes: '',
            layouts: '../layouts'
        }
    };
};