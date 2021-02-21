import pymysql
from log import logger
__db_conn = None 

def get_connection(host: str, port: int, user: str, password: str, db: str, connect_timeout=60) -> pymysql.connections.Connection:
    global __db_conn
    if __db_conn is None:
        try:
            __db_conn = pymysql.connect(host=host, port=port,  user=user, password=password, db=db, charset='utf8mb4', connect_timeout=connect_timeout, cursorclass=pymysql.cursors.DictCursor)
            logger.info("success to Connecting DB")
        except Exception as e:
            logger.exception(e)
    
    else:
        __db_conn.ping(reconnect=True)
    return __db_conn