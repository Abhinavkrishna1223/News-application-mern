require('dotenv').config();
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
  "accessKeyId": process.env.ACCESS_KEY_ID,
  "secretAccessKey": process.env.SECRET_ACCESS_KEY,
  region: "ap-south-1",
  // accessKeyId: "AKIA4SLIDRBCSD5L6QHJ",
  // secretAccessKey: "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",
  // correctClockSkew: true,
  
});
// S3_BUCKET_NAME = 'upi-gateway'
// AWS_REGION = 'ap-south-1'
// aws_access_key_id = AKIA4SLIDRBCSD5L6QHJ
// aws_secret_access_key = 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

const s3 = new AWS.S3();


class UploadController {
  async getSignedUrl(userId, data) {
    try {
      let resp = { msg: 'file not sent' };
      if (userId) {
        const key = `${userId}/${uuidv4()}.${data.extension}`;
        const url = await s3.getSignedUrl('putObject', {
          Bucket: 'my-blogster-bucket-1234',
          // Bucket: 'upi-gateway',
          ContentType: 'image/jpeg',
          Key: key
        });
        resp = { key, url };
        if (data?.sender && data.receiver) {
          console.log(data.sender, data.receiver, data.title, url);
        };
      }
      return resp;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

}

module.exports = UploadController;