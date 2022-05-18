import pyodbc
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import time
from PIL import Image, ImageDraw, ImageFont
import re
import random
import numpy as np


server = 'cmpe195test.database.windows.net'
database = 'Backend Database'
username = 'tulgaa'
password = 'Alice0315!'
driver= '{ODBC Driver 17 for SQL Server}'
timeline = 0
i = 1
n = True
while n:
    with pyodbc.connect('DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password) as conn:
       with conn.cursor() as cursor:
            cursor.execute("SELECT temp FROM dbo.weather")
            row = cursor.fetchall()
            print("Temperature values pulled")
       # for i in row:
        #    print(type(i))
            data = [list(i) for i in row]
            temps = []
            for row in data:
                value = row[0]
                temps.append(value)

            cursor.execute("SELECT datetime FROM dbo.weather")
            row = cursor.fetchall()
            data = [list(i) for i in row]
            timeValue = []
            for row in data:
                value = row[0]
                timeValue.append(value)
            print("Time values pulled")
            timeList = []
            for t in timeValue:
               timeList.append(t.strftime("%H:%M"))
            print("Time values converted to strings")

            if timeline >= 695:
                time.sleep(10)

            plt.clf()
            plt.plot(timeList[timeline:timeline + 24], temps[timeline:timeline + 24], marker='o')
            plt.grid(True, 'major', 'both', color='g', linestyle='-', linewidth=0.2)
            plt.title("Daily Temperature Report\n", fontsize=45)
            plt.xticks(np.arange(0, 25, 2))
            plt.xticks(rotation=90)
            plt.xticks(fontsize=20)
            plt.yticks(np.arange(min(temps[timeline:timeline + 24]) - 2, max(temps[timeline:timeline + 24]) + 2, 2))
            plt.yticks(fontsize=24)
            plt.gcf().set_size_inches(10.5, 18.5)
            plt.ylabel('Temperature (F)', fontsize=30)
            plt.xlabel('\nTime', fontsize=30)
            plt.savefig('temp'+ str(i) + '.png', dpi=100)
            print("Temperature/Time plotted")
            i = i+1
            timeline = timeline + 24