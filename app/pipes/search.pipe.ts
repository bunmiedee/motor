import {PipeTransform, Pipe} from "@angular/core";
@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(value:any[], args:any[]):any {
        console.log(args);
        if (!value) {
            console.log('hello');
            return [];
        }
        return value.filter(item => item.Make.indexOf(args) !== -1);
    }
/*    transform(value:any[], [term]):any {
        if (!value) {
            console.log('hello');
            return [];
        }
        return value.filter(item=>item.Make.startsWith(term))
    }*/
}