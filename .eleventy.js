module.exports = function (eleventyConfig) {


    eleventyConfig.addShortcode("shortened", function (content) {

        const maxLength = 300;

        if(content && typeof content === 'string' && content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }

        return content;
    });

    eleventyConfig.setTemplateFormats("html,liquid,md,css,jpg,png");
};