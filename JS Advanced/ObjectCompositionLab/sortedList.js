/**
 * Created by GTX on 29.10.2016 г..
 */
function result() {
    let collection = [];

    return {
        add: function (element) {
            collection.push(element);
            this.size++;
            return collection.sort((a,b) => a-b);
        },
        remove: function (index) {
            if(index>=0 && index<collection.length){
                collection.splice(index,1);
                this.size--;
                return collection.sort((a,b) => a-b);
            }
            else{
                throw new Error
            }
        },
        get: function (index) {
            if(index>=0 && index<collection.length){
                return collection[index];
            }
            else{
                throw new Error
            }
        },
        size:0
    }
}