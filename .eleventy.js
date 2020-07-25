module.exports = function (eleventyConfig) {

    eleventyConfig.addShortcode("shortened", function (content) {

        const maxLength = 300;

        if(content && typeof content === 'string' && content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }

        return content;
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