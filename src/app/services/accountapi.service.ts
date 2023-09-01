import { Injectable } from "@angular/core";
import { BaseUrlService } from "./baseurl.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AccountAPIService {

    constructor (
        private baseUrlService : BaseUrlService,
        private httpClient : HttpClient,
    ){}


}