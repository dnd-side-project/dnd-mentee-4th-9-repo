# 배포에 필요한 리소스를 정리한 디렉터리

- 실제 운영 배포에 들어가게 될 경우 사용할 CloudFormation 템플릿을 정의하였습니다.

- Serverless Framework를 이용하여 배포합니다.

- 자신의 로컬 PC `~/.aws/credential` 이 존재해야 배포 가능합니다.
- `aws cli` 를 설치하면 위 정보를 셋업 가능합니다.
- 자신의 로컬 PC에 `npm i serverless` 를 통해 serverless 가 설치되어야 합니다.