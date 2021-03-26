import json

BODY = {
    'message': 'this is test lambda!'
}

response = {
    'statusCode': 200,
    'body': json.dumps(BODY)
}


def handler(event, context):
    print(event)
    return response
