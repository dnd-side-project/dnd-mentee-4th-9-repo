import os
import datetime
import time
import boto3
from log import logger
from db import get_connection

HOST = os.environ.get('DB_HOST', '3.34.87.77')
PORT = int(os.environ.get('DB_PORT', 3306))
USER = os.environ.get('DB_USER', 'root')
TABLE = os.environ.get('DB_TABLE', 'dnd')
PASSWORD = os.environ.get('DB_PASSWORD', 'j112189')

TEST_QUERY = 'SELECT 1 + 1 AS result'

def handler(event, context):
    logger.info("this lambda has been invoked ")
    logger.info(event)

    if event.get('dt'):
        dt = event.get('dt')
        logger.info(f'this is dt object  {dt}')
    else:
        logger.info('No dt got')

    conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)

    with conn.cursor() as cur:
        cur.execute(TEST_QUERY)
        result = cur.fetchall()
        logger.info(result)
        return result

if __name__ == "__main__":
    conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)
    with conn.cursor() as cur:
        cur.execute(TEST_QUERY)
        result = cur.fetchall()
        logger.info(result)
        cur.close()
    