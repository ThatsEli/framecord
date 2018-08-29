import { DataBucket } from '../classes/Bucket';

export class BucketManager {

    private static buckets: Array<DataBucket>;

    public static initBucket(): string {
        this.buckets.push(new DataBucket());
        return this.buckets[this.buckets.length-1].id;
    }

    public static getBucket(id: string): DataBucket|undefined {
        for (let i: number = 0; i < this.buckets.length; i++) {
            if(this.buckets[i].id == id) {
                return this.buckets[i];
            }
        }
        return undefined;
    }

}
