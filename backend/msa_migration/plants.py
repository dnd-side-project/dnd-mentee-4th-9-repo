import json
import os
import pymysql
import pymysql.constants.ER

from libs.db import get_connection

HOST = os.environ.get('DB_HOST')
USER = os.environ.get('DB_USER')
PORT = int(os.environ.get('DB_PORT'))
TABLE = os.environ.get('DB_TABLE')
PASSWORD = os.environ.get('DB_PASSWORD')

conn = get_connection(HOST, PORT, USER, PASSWORD, TABLE)

SQL = 'SELECT `Plant`.`id`, `Plant`.`name`, `Plant`.`feature`, `Plant`.`warning`, `Plant`.`description`, \
`Plant`.`testDescription`, `Plant`.`ment`, `Plant`.`totalViews`, `Plant`.`todayViews`, `Plant`.`yesterDayViews`, \
`Plant`.`imagePath`, `Plant`.`thumbnailPath`, `Tags`.`id` AS `Tags.id`,\
 `Tags`.`name` AS `Tags.name`, `Tags`.`type` AS `Tags.type`, `Tags`.`order` AS `Tags.order` FROM `plants` AS `Plant` \
 LEFT OUTER JOIN ( `plantTags` AS `Tags->PlantTag` INNER JOIN `tags` AS `Tags` ON `Tags`.`id` = `Tags->PlantTag`.`TagId`) \
 ON `Plant`.`id` = `Tags->PlantTag`.`PlantId` ORDER BY `Plant`.`createdAt` DESC, `Tags`.`order` ASC'


def find_row_count(cur: pymysql.connections.Connection.cursor) -> int:
    sql = 'SELECT COUNT(*) FROM plants'
    cur.execute(sql)
    result = cur.fetchone()
    ret = result.get('COUNT(*)')
    return ret


def handler(event, context):
    print(event)
    with conn.cursor() as cur:
        try:
            query_size = find_row_count(cur)
            cur.execute(SQL)
            result = cur.fetchmany(query_size)
            response = {
                'statusCode': 200,
                'body': json.dumps(result)
            }
            return response
        except pymysql.err.DatabaseError as e:
            response = {
                'statusCode': 500,
                'body': json.dumps(e)
            }
            return response
        except pymysql.err.MySQLError as e:
            response = {
                'statusCode': 500,
                'body': json.dumps(e)
            }
            return response
