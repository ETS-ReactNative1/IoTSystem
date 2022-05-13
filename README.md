# IoTSystem

Note: Some of the functionality is not always available e.g the live camera runs on raspberry pi and cannot be connected perpetually for just this project

# CMPE 195 - Smart Agriculture Mobile Application
University Name: San Jose State University

Course: Enterprise Software

Students:
  -  Nkono Andrew, Mwase
  -  Batbaatar, Tulgaa
  -  Liu, Yang 
  -  Whitehead, William
 
## Project Introduction
Intelligent agricultural management system that pulls data from IoT sensors and monitoring equipment.
Utilizes soil sensors to measure pH, moisture, etc., weather sensors to track climate conditions, and cameras for remote monitoring
Allows farmers to obtain “at a glance” information about their farm in real-time.


 
## Sample Demo Screenshots

![Simulator Screen Shot - iPhone 13 - 2022-05-13 at 12 08 00](https://user-images.githubusercontent.com/46858191/168374904-69e71fce-1cb5-40e3-aa44-559962a63ca7.png)

![Simulator Screen Shot - iPhone 13 - 2022-05-13 at 12 08 19](https://user-images.githubusercontent.com/46858191/168375134-1e2f9f3b-8a24-4da3-97c0-c906dc22ca6e.png)

![Simulator Screen Shot - iPhone 13 - 2022-05-13 at 12 08 22](https://user-images.githubusercontent.com/46858191/168375182-aec9d099-624e-48f2-92ea-8dadcf950112.png)

![Simulator Screen Shot - iPhone 13 - 2022-05-13 at 12 08 30](https://user-images.githubusercontent.com/46858191/168375237-73c849dd-862b-40dc-b3ca-2af369af2912.png)

![Simulator Screen Shot - iPhone 13 - 2022-05-13 at 12 08 37](https://user-images.githubusercontent.com/46858191/168375359-c1704ca6-d3d0-4da7-8265-c2e66499bd16.png)

![Simulator Screen Shot - iPhone 13 - 2022-05-13 at 12 08 43](https://user-images.githubusercontent.com/46858191/168375399-170ceadb-fce8-446a-98aa-3a1dd8277f65.png)

![Simulator Screen Shot - iPhone 13 - 2022-05-13 at 12 08 58](https://user-images.githubusercontent.com/46858191/168375446-e05d2cfa-2382-44f9-97af-930b27fe76a4.png)

## Project Components
- Frontend 
  - ReactNative
- Backend 
  - MySQL
  - Physical Sensors
    - ESP-32 Microcontroller
      Raspberry Pi micro camera
      DHT-11 Weather sensor
      YL-69 Soil sensor
      Azure IoT Central
      Telemetry Collection
      Data Export
      Hardware Status

  - Virtual Sensors
    - Microsoft Azure
      - MS Azure IoT Central
      - Weather Stations
      - Soil Sensors
      - MS Azure Stream Analytics
      - Process telemetry Data
      - MS Azure SQL Database



## How to run locally

Prerequisites: A fully set up environment for running React Native on pn an IoS Simulator

1. Clone or down a zip of the repo
2. Run "npm install" in the project root
3. Run "cd ios"
4. Run "pod install"




 
