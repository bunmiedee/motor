import {PipeTransform,Pipe} from "@angular/core";
@Pipe({
    name:'selectPipe'
})
export class SelectPipe implements PipeTransform{
    transform(value:any[],args:any[]):any{
        console.log(args);
        if(!value){
            console.log('Value is undefined');
            return[];
        }
        return value.filter(item=>item.Make.indexOf(args)!== -1 ||item.Model.indexOf(args)!== -1);
    }
}
