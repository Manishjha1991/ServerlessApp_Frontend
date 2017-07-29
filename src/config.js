export default {
MAX_ATTACHMENT_SIZE: 5000000,
s3: {
  BUCKET: 'serverlessapp-prod-serverlessdeploymentbucket-lezjjcae6y1s'
},
apiGateway: {
  URL: 'https://poanroml3h.execute-api.us-east-1.amazonaws.com/prod',
  REGION: 'us-east-1',
},
  cognito: {
    USER_POOL_ID : 'us-east-1_YhS1uztjo',
    APP_CLIENT_ID : '635c6slekdcli2jbcea48mcnjj',
    REGION: 'us-east-1',
    IDENTITY_POOL_ID: 'us-east-1:01ccf5b1-3e1e-430e-b3e0-a7701b745fa6',
  }
};