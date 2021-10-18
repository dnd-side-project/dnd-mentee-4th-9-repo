import pymysql
from log import logger
import json

__db_conn = None


def get_connection(host: str, port: int, user: str, password: str, db: str,
                   connect_timeout=60) -> pymysql.connections.Connection:
    global __db_conn
    if __db_conn is None:
        try:
            __db_conn = pymysql.connect(host=host, port=port, user=user, password=password, db=db, charset='utf8mb4',
                                        connect_timeout=connect_timeout, cursorclass=pymysql.cursors.DictCursor)
            logger.info("success to Connecting DB")
        except Exception as e:
            logger.exception(e)

    else:
        __db_conn.ping(reconnect=True)
    return __db_conn


HOST = '3.34.87.77'
USER = 'root'
PORT = 3306
TABLE = 'dnd'
PASSWORD = 'j112189'

conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)

print(conn)

sql = 'SELECT COUNT(*) FROM plants'

with conn.cursor() as cursor:
    cursor.execute(sql)
    result = cursor.fetchone()
    print(result)
    pp = result.get('COUNT(*)')
    print(pp)
    sql = 'SELECT `Plant`.`id`, `Plant`.`name`, `Plant`.`feature`, `Plant`.`warning`, `Plant`.`description`, `Plant`.`testDescription`, `Plant`.`ment`, `Plant`.`totalViews`, `Plant`.`todayViews`, `Plant`.`yesterDayViews`, `Plant`.`imagePath`, `Plant`.`thumbnailPath`, `Plant`.`createdAt`, `Plant`.`updatedAt`, `Tags`.`id` AS `Tags.id`, `Tags`.`name` AS `Tags.name`, `Tags`.`type` AS `Tags.type`, `Tags`.`order` AS `Tags.order` FROM `plants` AS `Plant` LEFT OUTER JOIN ( `plantTags` AS `Tags->PlantTag` INNER JOIN `tags` AS `Tags` ON `Tags`.`id` = `Tags->PlantTag`.`TagId`) ON `Plant`.`id` = `Tags->PlantTag`.`PlantId` ORDER BY `Plant`.`createdAt` DESC, `Tags`.`order` ASC'
    cursor.execute(sql)
    result = cursor.fetchall()
    print(result)
    print(len(result))
