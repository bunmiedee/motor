import {PipeTransform,Pipe} from "@angular/core";

@Pipe({
    name:'slicePipe'
})
export class SlicePipe implements PipeTransform{
    transform(value:string,args:number):string{
        if(!value)
            throw 'Invalid String';
        return value.slice(0,args) + ' .....'
    }
}