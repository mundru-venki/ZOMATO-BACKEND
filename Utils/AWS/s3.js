 import AWS from "aws-sdk"; 

//AWS s3 bucket config

 const s3Bucket = new AWS.S3({
     accessKeyId: "AKIAWL3C2C5CXKHYFTSZ",
     secretAccessKey: "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",
     region: "ap-south-1"
 });

 export const s3Upload = (options) => {
    return new Promise((resolve, reject)=> 
        s3Bucket.upload(options, (error,data)=>{
            if(error) return reject(error);
            return resolve(data);
        })
    );
};
