/**
 * Created by GTX on 29.10.2016 г..
 */
function domHighlighter(selector) {
    let start = $(selector);
    let maxDepth = 0;
    let maxDepthelement ='';

    function setDepth(depth, element) {
        if (depth > maxDepth){
            maxDepth = depth;
            maxDepthelement = element;
        }
        let children = $(element).children();

        children.each((index,element) => setDepth(depth + 1, element));
    }

    setDepth(1,start);

    let jQueryElement = $(maxDepthelement);
    jQueryElement.addClass('highlight');
    while(maxDepth){
        maxDepth--;

        jQueryElement.addClass('highlight');
        jQueryElement = jQueryElement.parent();
    }

}