import os
import pymysql
from typing import List # for type annotation
from log import logger
from db import get_connection

HOST = os.environ.get('DB_HOST', '3.34.87.77')
PORT = int(os.environ.get('DB_PORT', 3306))
USER = os.environ.get('DB_USER', 'root')
TABLE = os.environ.get('DB_TABLE', 'dnd')
PASSWORD = os.environ.get('DB_PASSWORD', 'password')
COLS = ['totalViews', 'todayViews', 'id']
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

    conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)

    with conn.cursor() as cur:
        views = get_all_views(cur)
        logger.info(views)
        for v in views:
            total_view, today_view, id = map(lambda x : v.get(x), COLS)
            cur.execute(f'UPDATE plants SET totalViews = {total_view + today_view}, todayViews = {0}, yesterDayViews = {today_view} WHERE id={id}')
            try:
                conn.commit() # commit.
            except Exception as e:
                logger.info(f'error occured while commit : {e}')
    

if __name__ == "__main__":
    conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)
    with conn.cursor() as cur:
        origin_views = get_all_views(cur)
        # print(result)
        for v in origin_views:
            total_view, today_view, id = map(lambda x : v.get(x), COLS)
            cur.execute(f'UPDATE plants SET totalViews = {total_view + today_view}, todayViews = {0}, yesterDayViews = {today_view} WHERE id={id}')
            result = conn.commit() # commit.
            print(result)
