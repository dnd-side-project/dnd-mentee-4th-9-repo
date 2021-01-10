# DND 9조

### Git branch 전략
- 사이드 프로젝트이므로 master 브랜치를 대상으로 기능 브랜치들을 merge 하는 방식으로 진행!

- 브랜치 네이밍 규칙
    - `feature/{front or back}/detail`
    - `bugfix/{front or back}/detail`
    - 예: `feature/front/add-context-api`
    - 예: `bugfix/back/fix-wrong-http-response-code`

### 깃 프로세스

1. `git checkout master`
2. `git pull origin master --rebase`
3. `git branch feature/{front or back}/detail`
4. `git checkout feature/{front or back}/detail`
5. `git add 작업내용`
6. `git commit -m "커밋 메시지"`
7. `git push origin feature/{front or back}/detail`
8. 깃허브에서 Pull Request 생성
9. 리뷰 및 리뷰어의 approve 완료 후 본인이 본인 PR 머지!
10. 머지 이후 브랜치 삭제

- 혹시 더 나은 프로세스가 있을 것 같다면 말씀해주세요! :)

