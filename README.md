# Discord & Steam Account Takeover Guide

한국어·영어 커뮤니티용 계정 탈취 예방·복구 가이드입니다. 공격 원리, 재탈취의 가능한 원인, 예방, 계정·기기 복구, 관리자 대응과 공식 출처를 담았습니다.

A bilingual community guide to account takeover prevention and recovery. It covers attack methods, possible reasons for repeat incidents, prevention, account and device recovery, moderation, and official sources.

이 자료는 AI의 도움을 받아 작성·정리했습니다. 작성자는 IT·보안의 기초 지식이 있지만 보안 전문가는 아닙니다. 설명·번역에 오류나 누락이 있을 수 있으므로 실제 복구 시 최신 공식 안내를 우선 확인하세요. 유입 경로의 예시는 빈도 순위나 특정 사건의 진단이 아닙니다.

This is an AI-assisted community reference. The author has basic IT and security knowledge but is not a security professional. Explanations or translations may contain errors or omissions; prioritize current official guidance when recovering. The entry-route examples are not a frequency ranking or an incident diagnosis.

- [한국어 사이트](https://henry9904.github.io/discord-steam-security-guide/)
- [English guide](https://henry9904.github.io/discord-steam-security-guide/en.html)
- [Discord 공지 (한·영) / Announcement (KO·EN)](DISCORD_NOTICE.md)
- [공식 출처 / Sources](sources.md)

## 바로 사용하기

`index.html`을 열면 한국어, `en.html`을 열면 영어 가이드를 읽을 수 있습니다. 두 페이지 상단에서 언어를 바꿀 수 있습니다. 외부 글꼴·스크립트·분석 도구나 빌드 과정이 필요하지 않습니다. 페이지 내 체크리스트는 저장·전송되지 않으며 현재 페이지를 떠나면 초기화됩니다. JavaScript가 꺼져 있어도 본문·목차·언어 전환·체크리스트를 사용할 수 있습니다.

## GitHub Pages 배포

1. 이 폴더의 **내용 전체**를 저장소 루트에 올립니다. `assets/`와 숨김 파일 `.nojekyll`도 포함합니다.
2. 저장소의 **Settings → Pages → Build and deployment**에서 **Deploy from a branch**를 선택합니다.
3. 브랜치는 **main**, 폴더는 **/(root)**로 저장합니다.
4. GitHub 배포가 완료된 뒤 표시되는 실제 URL을 확인합니다.

다른 계정·저장소 이름으로 옮기면 이 README, 공지문의 URL과 두 HTML의 GitHub 링크를 실제 주소로 바꾸세요. 사이트 자원은 상대 경로이므로 프로젝트 하위 경로에서도 동작합니다.

[GitHub 공식 배포 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 수정 위치

- `index.html`: 한국어 본문
- `en.html`: 같은 구조의 영어 본문
- `assets/style.css`: 반응형·인쇄 스타일
- `assets/site.js`: 현재 목차 강조, 언어 전환 시 읽던 섹션 유지
- `sources.md`: 출처와 적용 범위
- `DISCORD_NOTICE.md`: 한·영을 한 번에 올리는 2,000자 미만 공지

내용 수정 시 두 언어의 의미·순서와 공식 자료 확인일을 함께 검토하세요. 관리자 절차는 운영 제안이고, 개별 사건의 원인은 증거 없이는 단정하지 않습니다. 개인 피해 사례, 파일 해시, 개인 기기 경로, 계정 비밀 정보는 포함하지 않았습니다.

Last reviewed: 2026-10-26. This is an independent community guide, not an official notice from Discord, Valve or Microsoft.
