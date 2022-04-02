import fs from 'fs';
import OSS from 'ali-oss';
import { FileService } from 'medusa-interfaces';

class AliService extends FileService {
  constructor({}, options) {
    super();
    this.bucket_ = options.bucket;
    this.accessKeyId = options.access_key_id;
    this.accessKeySecret = options.access_key_secret;
    this.region = options.region;
  }

  upload(file) {
    const { accessKeyId, accessKeySecret, region, bucket } = this;
    const client = new OSS({
      accessKeyId,
      accessKeySecret,
      region,
      bucket,
    });
    console.log(file);
    const filename = file.originalname;
    return new Promise((resolve, reject) => {
      client
        .putStream(filename, fs.createReadStream(file.path))
        .then((data) => {
          resolve({ url: data.url });
        })
        .catch(reject);
    });
  }

  delete(file) {
    const { accessKeyId, accessKeySecret, region, bucket } = this;
    const client = new OSS({
      accessKeyId,
      accessKeySecret,
      region,
      bucket,
    });
    console.log(file);
    return new Promise((resolve, reject) => {
      client
        .delete(file)
        .then((data) => {
          resolve(data);
        })
        .catch(reject);
    });
  }
}

export default S3Service;
