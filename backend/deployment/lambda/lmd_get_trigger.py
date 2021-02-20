import os
import datetime
import time
import boto3
from db import get_connection

HOST = os.environ.get('DB_HOST', '3.34.87.77')
PORT = int(os.environ.get('DB_PORT', 3306))
USER = os.environ.get('DB_USER', 'root')
TABLE = os.environ.get('DB_TABLE', 'dnd')
PASSWORD = os.environ.get('DB_PASSWORD', 'j112189')

TEST_QUERY = 'SELECT 1 + 1 AS result'

def handler(event, context):
    print("this lambda has been invoked ")
    print(event)

    if event.get('dt'):
        dt = event.get('dt')
        print(f'this is dt object  {dt}')
    else:
        print('No dt got')

    conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)

    with conn.cursor() as cur:
        cur.execute(TEST_QUERY)
        result = cur.fetchall()
        print(result)
        return result

if __name__ == "__main__":
    conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)
    with conn.cursor() as cur:
        cur.execute(TEST_QUERY)
        result = cur.fetchall()
        print(result)
        cur.close()
    