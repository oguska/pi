#!/usr/bin/python
import MySQLdb


   
db = MySQLdb.connect(host="localhost",user="root",passwd="",db="turta")
cur = db.cursor()
cur.execute("SELECT * FROM zaman")
for row in cur.fetchall():
        plug = row[2]
        turn_mode = row[3]
        smh = row[4]
        number = row[5]
        then = row[6]
        print row[1]

db.close()
