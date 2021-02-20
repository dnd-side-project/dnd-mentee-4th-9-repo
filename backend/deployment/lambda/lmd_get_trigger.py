import os
import datetime
import time
import boto3

def handler(event, context):
    print("this lambda has been invoked ")
    print(event)

    if event.get('dt'):
        dt = event.get('dt')
        print(f'this is dt object  {dt}')
    else:
        print('No dt got')
    