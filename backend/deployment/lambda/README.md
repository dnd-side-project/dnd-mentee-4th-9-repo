# CRON JOB Lambda

- 조회수를 하루 주기로 초기화 및 누적하기 위한 파이썬 코드가 저장되어있는 디렉터리입니다.
- 여기 있는 코드들은 `aws lambda` 서비스로 사용되게 됩니다.

- 이 코드들은 `serverless framework`을 이용하여 aws lambda 서비스에 배포됩니다.
- 배포에 필요한 내용은 `serverless.yml` 에 작성 되어있습니다.

## 배포 방법

- aws 계정의 개발자용 엑세스 키, 시크릿 키를 다운로드 받는다.
- `aws-cli` 를 설치한다. (엑세스 키 및 시크릿 키를 로컬에 저장하여 배포시 사용하기 위함)
- `aws configure` 를 입력하여 엑세스 키 및 시크릿 키, 리전을 입력한다.
- `npm install -g serverless` 를 이용하여 `serverless` 를 전역 설치한다.
- `serverless`는 serverless framework 을 활용하여 작성한 내용을 `액세스 키` 및 `시크릿 키`를 확인하고, 해당 계정의 aws 플랫폼에 배포 할 수 있는 명령어.

- 배포
    - `sls deploy --region ap-northeast-2` 를입력하면 로컬에서 배포 가능 (하지만 하지 않을것)
    - jenkins pipe line 구축하여 배포 (Ok)


