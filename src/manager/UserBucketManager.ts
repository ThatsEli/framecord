import { BucketManager } from './BucketManager';
import { User } from 'discord.js';
import { DataBucket } from '../classes/Bucket';

export class UserBucketManager {

    private bucketManager = new BucketManager();

    public getUserBucket(user: User): DataBucket {
        return this.bucketManager.getBucket(user.id);
    }

    public clear(): void {
        this.bucketManager.clear();
    }

}
