module.exports = (blogpostsData) => {
    const blogposts = blogpostsData.map(r => r.dataValues);
    blogposts.forEach(element => {
        element.user = element.user.dataValues;
        // --------------------- Date time
        const day = element.created_at.getDate() + '';
        const month = (element.created_at.getMonth()) + '';
        const year = element.created_at.getFullYear() + '';
        element.created_at = `${month}/${day}/${year}`
        delete element.user.password;
    });
    return blogposts;
};