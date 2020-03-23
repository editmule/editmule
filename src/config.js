const dev = {
  STRIPE_KEY: "pk_test_Xt1sNlUfR6bZwd66WfxRPHGg00E9SpX4Sy",
  s3: {
    REGION: "us-east-1",
    BUCKET: "editmule-2-api-dev-attachmentsbucket-ejoo37si6wz"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v1xqiqwcrc.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_unaCRHOVU",
    APP_CLIENT_ID: "3rbl1nhup1fsgeqgenpmggjpok",
    IDENTITY_POOL_ID: "us-east-1:67faef25-1dbc-4aa9-b523-be3dd9920edf"
  }
};

const prod = {
  STRIPE_KEY: "pk_live_JASopZlaOkFhGj5WnnidVV0100DwSUduBg",
  s3: {
    REGION: "us-east-1",
    BUCKET: "editmule-2-api-prod-attachmentsbucket-4ehmwlpjajxv"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qxn3tijge0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0sa3SjRLP",
    APP_CLIENT_ID: "2rgjidsj9pfu3co173g6p49gfk",
    IDENTITY_POOL_ID: "us-east-1:743d02dd-99e2-4ed7-ad8f-583398425d6c"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
