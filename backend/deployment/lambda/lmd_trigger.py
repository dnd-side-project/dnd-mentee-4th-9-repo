import boto3
import os
import datetime
import time
import json

TRIGGERD_LAMDA = os.environ.get('TRIGGERD_LAMBDA', 'dnd-4th-9-seeat-batch-lambda-cron-get-trigger')

lmd = boto3.client('lambda')

def timenow_dt_strftime():
    time_now = time.time()
    dt = datetime.datetime.fromtimestamp(time_now)
    return dt.strftime('%Y-%m-%d-%H-%M')

def handler(event, context):
    print('lambda invoked ! ')
    print(f'invoked time : {timenow_dt_strftime()}')

    try:
        lmd.invoke(
            FunctionName=TRIGGERD_LAMDA,
            InvocationType='Event', Payload=json.dumps({'dt' : timenow_dt_strftime()})
        )
    except Exception as e:
        print(f'error occured when triggering lambda : {e}')