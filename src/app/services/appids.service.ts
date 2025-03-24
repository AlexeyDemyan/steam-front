import { Injectable } from "@angular/core";
import { AppId } from "../appid-item/appid-item.type";

@Injectable({
    providedIn: 'root',
})
export class AppIdsService {
    url = 'http://127.0.0.1:8000/api/appids';
    protected appIdsList: AppId[] = [];

    async getAllAppIds(): Promise<AppId[]> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
    }
}