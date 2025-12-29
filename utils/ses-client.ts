
import { SESClient } from "@aws-sdk/client-ses";

const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
    region: process.env.AWS_REGION || 'us-east-1',
};

export const sesClient = new SESClient(SES_CONFIG);
