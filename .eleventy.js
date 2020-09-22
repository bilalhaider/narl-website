module.exports = function (eleventyConfig) {

    eleventyConfig.addShortcode("shortened", function (content) {

        const maxLength = 300;

        if (content && typeof content === 'string' && content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }

        return content;
    });

    eleventyConfig.addFilter('themeFilter', function (collection, theme) {

        if (!theme) return collection;
        const filtered = collection.filter(item => (item.data.themes || []).includes(theme));
        return filtered;
    });

    eleventyConfig.addFilter('profileFilter', function (collection, profileKey) {

        if (!profileKey) return collection;
        const found = collection.find(item => item.data.key == profileKey);
        return found;
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
            includes: '../layouts/includes',
            layouts: '../layouts'
        }
    };
};