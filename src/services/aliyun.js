import fs from 'fs';
import OSS from 'ali-oss';
import { FileService } from 'medusa-interfaces';
export default class AliService extends FileService {
  constructor({}, options) {
    super();
    this.bucket = options.bucket;
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
    const filename = file.originalname;
    return new Promise((resolve, reject) => {
      client
        .put(filename, fs.createReadStream(file.path))
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

// export default AliService;
exports.default = AliService
