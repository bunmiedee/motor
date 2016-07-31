import {Directive, HostListener, HostBinding} from "@angular/core";
@Directive({
    selector:'[collapse-click]'
})
export class CollapseClick{
    isCollapsed = true;

@HostBinding("class.collapsed")
get collapsed(){
    return this.isCollapsed;
}

@HostListener('click')
toggle(){
    this.isCollapsed = !this.isCollapsed;
}
}