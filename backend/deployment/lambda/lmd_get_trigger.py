import os
import datetime
import time
import boto3
import pymysql
from typing import List # for type annotation
from log import logger
from db import get_connection

HOST = os.environ.get('DB_HOST', '3.34.87.77')
PORT = int(os.environ.get('DB_PORT', 3306))
USER = os.environ.get('DB_USER', 'root')
TABLE = os.environ.get('DB_TABLE', 'dnd')
PASSWORD = os.environ.get('DB_PASSWORD', 'j112189')
# TODO: How to hide this password in serverless.yml ?

TEST_QUERY = 'SELECT 1 + 1 AS result'

GET_VIEWS_QUERY = 'SELECT id, totalViews, yesterDayViews, todayViews FROM plants WHERE 1=1'

def get_all_views(cursor: pymysql.connections.Connection.cursor) -> List[dict]:
    try:
        cursor.execute(GET_VIEWS_QUERY)
        return cursor.fetchall()
    except Exception as e:
        logger.info(f'failed to fetch :{e}')
        return []
    

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
        pass
    
    # TODO: First. select all todayViews and totalViews from all plants (o)
    # TODO: Second. Save that counts in somewhere
    # TODO: Third. update all plant's totalViews . Like this : Update totalViews = totalViews + todayViews
    # TODO: Fourth. update yesterdayViews with todayViews
    # TODO: Finally. update todayViews as 0.

    # TODO: How to make all of above logics with OOP?

if __name__ == "__main__":
    conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)
    with conn.cursor() as cur:
        origin_views = get_all_views(cur)
        # print(result)
        for v in origin_views:
            total_view = int(v.get('totalViews'))
            today_view = int(v.get('todayViews'))
            id = int(v.get('id'))
            print(f'UPDATE plants SET totalViews = {total_view + total_view}, todayViews = {0}, yesterDayViews = {today_view} WHERE id={id}')
            cur.execute(f'UPDATE plants SET totalViews = {total_view + total_view}, todayViews = {0}, yesterDayViews = {today_view} WHERE id={id}')
            result = conn.commit() # commit.
            print(result)
