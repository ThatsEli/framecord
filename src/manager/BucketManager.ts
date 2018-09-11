import { DataBucket } from '../classes/Bucket';

export class BucketManager {

    private buckets: any = {};

    public getBucket(id: string): DataBucket {
        if(this.buckets[id] == undefined) { // truly
            this.buckets[id] = new DataBucket();
        }
        return this.buckets[id];
    }

    public clear(): void {
        this.buckets = {};
    }

}
