import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
	toasts: any[] = [];

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		this.toasts.push({ textOrTpl, ...options });
	}

	remove(toast:any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}

    success(msg:any){
        this.show(msg, { classname: 'text-light', delay: 2500,  color:'#e6f8f0' })
    }
    warning(msg:any){
        this.show(msg, { classname: 'text-light', delay: 2000,  color:'#fff3e6' })
    }
    danger(msg:any){
        this.show(msg, { classname: 'text-light', delay: 3000,  color:'#fee8e6' })
    }
    info(msg:any){
        this.show(msg, { classname: 'text-light', delay: 2000,  color:'##eaeafe' })
    }
}