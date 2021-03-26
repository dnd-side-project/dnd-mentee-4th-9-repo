# API gateway

If client call API made by api gateway,
client's request content of headers and body will transfer by 'event'

Below is the content of 'event'

```python3
{
    "resource": "/plants",
    "path": "/plants",
    "httpMethod": "GET",
    "headers": {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "max-age=0",
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "KR",
        "Host": "sqvpn9daib.execute-api.ap-northeast-2.amazonaws.com",
        "sec-ch-ua": '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
        "Via": "2.0 8fe450b14ab15570329ffffc38b89966.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id": "AYrVYXhm2uOGXe-I3L-5s3CJDO0aOCb2oeiwgcn5ZUwv2DWPBOGNYA==",
        "X-Amzn-Trace-Id": "Root=1-605e00a3-1e30e7215c9c32a609bcac35",
        "X-Forwarded-For": "218.154.56.171, 130.176.125.173",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https",
    },
    "multiValueHeaders": {
        "Accept": [
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
        ],
        "Accept-Encoding": ["gzip, deflate, br"],
        "Accept-Language": ["ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"],
        "cache-control": ["max-age=0"],
        "CloudFront-Forwarded-Proto": ["https"],
        "CloudFront-Is-Desktop-Viewer": ["true"],
        "CloudFront-Is-Mobile-Viewer": ["false"],
        "CloudFront-Is-SmartTV-Viewer": ["false"],
        "CloudFront-Is-Tablet-Viewer": ["false"],
        "CloudFront-Viewer-Country": ["KR"],
        "Host": ["sqvpn9daib.execute-api.ap-northeast-2.amazonaws.com"],
        "sec-ch-ua": [
            '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"'
        ],
        "sec-ch-ua-mobile": ["?0"],
        "sec-fetch-dest": ["document"],
        "sec-fetch-mode": ["navigate"],
        "sec-fetch-site": ["none"],
        "sec-fetch-user": ["?1"],
        "upgrade-insecure-requests": ["1"],
        "User-Agent": [
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36"
        ],
        "Via": ["2.0 8fe450b14ab15570329ffffc38b89966.cloudfront.net (CloudFront)"],
        "X-Amz-Cf-Id": ["AYrVYXhm2uOGXe-I3L-5s3CJDO0aOCb2oeiwgcn5ZUwv2DWPBOGNYA=="],
        "X-Amzn-Trace-Id": ["Root=1-605e00a3-1e30e7215c9c32a609bcac35"],
        "X-Forwarded-For": ["218.154.56.171, 130.176.125.173"],
        "X-Forwarded-Port": ["443"],
        "X-Forwarded-Proto": ["https"],
    },
    "queryStringParameters": None,
    "multiValueQueryStringParameters": None,
    "pathParameters": None,
    "stageVariables": None,
    "requestContext": {
        "resourceId": "2fw3pk",
        "resourcePath": "/plants",
        "httpMethod": "GET",
        "extendedRequestId": "czUJmEEAoE0FvEA=",
        "requestTime": "26/Mar/2021:15:41:23 +0000",
        "path": "/dev/plants",
        "accountId": "671221010754",
        "protocol": "HTTP/1.1",
        "stage": "dev",
        "domainPrefix": "sqvpn9daib",
        "requestTimeEpoch": 1616773283710,
        "requestId": "2d5d97ee-4a1d-4050-a651-a93684c76615",
        "identity": {
            "cognitoIdentityPoolId": None,
            "accountId": None,
            "cognitoIdentityId": None,
            "caller": None,
            "sourceIp": "218.154.56.171",
            "principalOrgId": None,
            "accessKey": None,
            "cognitoAuthenticationType": None,
            "cognitoAuthenticationProvider": None,
            "userArn": None,
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
            "user": None,
        },
        "domainName": "sqvpn9daib.execute-api.ap-northeast-2.amazonaws.com",
        "apiId": "sqvpn9daib",
    },
    "body": None,
    "isBase64Encoded": False,
}
```

TODO : Need test path params, query strings..