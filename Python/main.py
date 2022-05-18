import pyodbc
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import time
from PIL import Image, ImageDraw, ImageFont
import re
import random


server = 'cmpe195test.database.windows.net'
database = 'Backend Database'
username = 'tulgaa'
password = 'Alice0315!'
driver= '{ODBC Driver 17 for SQL Server}'
timeline = 0
while True:
    with pyodbc.connect('DRIVER='+driver+';SERVER=tcp:'+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password) as conn:
        with conn.cursor() as cursor:
            #cursor.execute("SELECT temp FROM dbo.weather")
            #row = cursor.fetchall()
            #print("Temperature values pulled")
            # for i in row:
            #    print(type(i))
            #data = [list(i) for i in row]
            #temps = []
            #for row in data:
            #    value = row[0]
            #    temps.append(value)

            #cursor.execute("SELECT datetime FROM dbo.weather")
            #row = cursor.fetchall()
            #data = [list(i) for i in row]
            #timeValue = []
            #for row in data:
            #    value = row[0]
            #    timeValue.append(value)
            #print("Time values pulled")
            #timeList = []
            #for t in timeValue:
            #    timeList.append(t.strftime("%H:%M"))
            #print("Time values converted to strings")

            #if timeline >= 695:
            #    time.sleep(10)

            #plt.clf()
            #plt.plot(timeList[timeline:timeline + 24], temps[timeline:timeline + 24], marker='o')
            #plt.grid(True, 'major', 'both', color='g', linestyle='-', linewidth=0.2)
            #plt.title("Daily Temperature Report\n", fontsize=45)
            #plt.xticks(np.arange(0, 25, 2))
            #plt.xticks(rotation=90)
            #plt.xticks(fontsize=20)
            #plt.yticks(np.arange(min(temps[timeline:timeline + 24]) - 2, max(temps[timeline:timeline + 24]) + 2, 2))
            #plt.yticks(fontsize=24)
            #plt.gcf().set_size_inches(10.5, 18.5)
            #plt.ylabel('Temperature (F)', fontsize=30)
            #plt.xlabel('\nTime', fontsize=30)
            #plt.savefig('temp' + str(i) + '.png', dpi=100)
            #print("Temperature/Time plotted")
            #i = i + 1
            #timeline = timeline + 24



            cursor.execute("SELECT weatherTempSim FROM dbo.t1 WHERE timeStmp=(SELECT max(timeStmp) FROM dbo.t1);")
            row = cursor.fetchall()
            data = [list(i) for i in row]
            latest_temp = str(row[0])
            latest_temp = re.sub(r'[^0-9.]+', '', latest_temp)
            latest_temp = latest_temp[0:4]
            image = Image.new("RGB", (85, 40), "white")
            draw = ImageDraw.Draw(image)
            font = ImageFont.truetype("SF-Pro.ttf", size=25)
            draw.text((5, 5), latest_temp+" °F", font=font, fill="black")
            image.save("/var/www/html/apple_temp.png")
            print("apple temp saved")

            crops = ["potato", "banana", "peach", "chili", "tomato"]
            for c in crops:

               latest = float(latest_temp) + random.uniform(-15.0, 15.0)
               image = Image.new("RGB", (85, 40), "white")
               draw = ImageDraw.Draw(image)
               font = ImageFont.truetype("SF-Pro.ttf", size=25)
               draw.text((5, 5), "{:.1f}".format(latest) + " °F", font=font, fill="black")
               image.save("/var/www/html/"+c+"_temp.png")
               print(c+" temp saved")

            cursor.execute("SELECT weatherMoistureSIM FROM dbo.t1 WHERE timeStmp=(SELECT max(timeStmp) FROM dbo.t1);")
            row = cursor.fetchall()
            data = [list(i) for i in row]
            latest_moist = str(row[0])
            latest_moist = re.sub(r'[^0-9.]+', '', latest_moist)
            latest_moist = latest_moist[0:4]
            image = Image.new("RGB", (85, 40), "white")
            draw = ImageDraw.Draw(image)
            font = ImageFont.truetype("SF-Pro.ttf", size=25)
            draw.text((5, 5), latest_moist + "%", font=font, fill="black")
            image.save("/var/www/html/apple_moisture.png")
            print("apple moisture saved")

            for c in crops:

               latest = float(latest_moist) + random.uniform(-15.0, 15.0)
               if latest > 100:
                   latest = 99.9
               image = Image.new("RGB", (85, 40), "white")
               draw = ImageDraw.Draw(image)
               font = ImageFont.truetype("SF-Pro.ttf", size=25)
               draw.text((5, 5), "{:.1f}".format(latest) + "%", font=font, fill="black")
               image.save("/var/www/html/"+c+"_moisture.png")
               print(c+" moisture saved")

            latest_wind = random.uniform(0.1, 15.0)
            wind_direction = random.choice(["N", "NW", "W", "SW", "S", "SE", "E", "NE"])
            image = Image.new("RGB", (85, 40), "white")
            draw = ImageDraw.Draw(image)
            font = ImageFont.truetype("SF-Pro.ttf", size=20)
            draw.text((5, 10), "{:.1f}".format(latest_wind) + " mph", font=font, fill="black")
            image.save("/var/www/html/apple_wind.png")
            print("apple wind saved")

            for c in crops:
                latest_wind = random.uniform(0.1, 15.0)
                wind_direction = random.choice(["N", "NW", "W", "SW", "S", "SE", "E", "NE"])
                image = Image.new("RGB", (85, 40), "white")
                draw = ImageDraw.Draw(image)
                font = ImageFont.truetype("SF-Pro.ttf", size=20)
                draw.text((5, 10), "{:.1f}".format(latest_wind) + " mph", font=font, fill="black")
                image.save("/var/www/html/"+c+"_wind.png")
                print(c+" wind saved")
            time.sleep(15)
