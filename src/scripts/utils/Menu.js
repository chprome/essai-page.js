
function a(href) {
    return document.querySelector('[href=".' + href + '"]');
}

module.exports = {
    render : function(ctx, next) {
        var el = document.querySelector('.active');
        
        if (el) {
            el.classList.remove('active');
        }
            
        a(ctx.path).classList.add('active');
        next();
    }
};