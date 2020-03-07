export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_QkHYOwt3hp1FCYUCr01WBHYQ00qq0EaAmN",
  s3: {
    REGION: "us-east-1",
    BUCKET: "edit-mule-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://t8bciryuu8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_eyKzmzMat",
    APP_CLIENT_ID: "2v8dlfe5rffhb5nk4f885fegom",
    IDENTITY_POOL_ID: "us-east-1:d2615f7f-668e-4db3-b3b7-0466b28e46f0"
  }
};
