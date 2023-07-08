---
title: "Building a Weather station using Raspberry pi"
description: "This is a Beginner's Guide to Building a Raspberry Pi Weather Station "
date: 2023-02-07
tags: ["raspberrypi", "iot", "robotics"]
---
![Syste](images/3.jpg)

### Introduction:

*The Raspberry Pi* is a versatile and affordable single-board computer that can be used for various projects. In this tutorial, we will guide you through the process of building your very own Raspberry Pi weather station. By the end of this tutorial, you will have a fully functional weather station that can measure temperature, humidity, and atmospheric pressure. So, let's get started!

**Step 1**: Gather the necessary components
Before diving into the project, make sure you have all the required components. Here's a list of what you'll need:

1.Raspberry Pi (any model with GPIO pins)
2.DHT11 temperature and humidity sensor
3.BMP180 barometric pressure sensor
4.Breadboard and jumper wires
5.MicroSD card with Raspbian installed
6.Power supply for the Raspberry Pi
7.Computer with an SD card reader

![img](images/download.jpeg)

For more information related these components click here!!
[link](https://youtu.be/gPJs9Qqexc4)

**Step 2**: Set up the Raspberry Pi
First, we need to set up the Raspberry Pi. Follow these steps:

1.Insert the microSD card with Raspbian into the Raspberry Pi.
2.Connect the HDMI cable from the Raspberry Pi to a monitor or TV.
3.Plug in the keyboard and mouse to the USB ports.
4.Connect the power supply to the Raspberry Pi to turn it on.
4.Follow the on-screen instructions to complete the initial setup of Raspbian.

**Step 3**: Connect the sensors
Now, let's connect the sensors to the Raspberry Pi using the breadboard and jumper wires:

Place the DHT11 sensor on the breadboard and connect its VCC pin to the 3.3V pin on the Raspberry Pi.
Connect the DHT11 sensor's GND pin to any of the GND pins on the Raspberry Pi.
Connect the DHT11 sensor's DATA pin to GPIO pin 4 on the Raspberry Pi.
Next, connect the BMP180 sensor to the breadboard and connect its VCC pin to the 3.3V pin on the Raspberry Pi.
Connect the BMP180 sensor's GND pin to any of the GND pins on the Raspberry Pi.
Connect the BMP180 sensor's SDA pin to GPIO pin 2 (SDA) on the Raspberry Pi.
Connect the BMP180 sensor's SCL pin to GPIO pin 3 (SCL) on the Raspberry Pi.

**Step 4**: Install necessary libraries
To interact with the sensors, we need to install some libraries. Open the Terminal on the Raspberry Pi and run the following commands:

Update the package lists: sudo apt-get update
Install the required libraries: sudo apt-get install python3-dev python3-pip
Install the Adafruit DHT library: sudo pip3 install Adafruit_DHT
Install the BMP library: sudo pip3 install adafruit-circuitpython-bmp

**Step 5**: Write the code
Create a new **Python script** on the Raspberry Pi using your preferred text editor. 

Here's a sample Python program that reads data from the sensor and displays it on the console:
---
```py
import Adafruit_DHT
import time

# Set up the sensor model and GPIO pin
sensor = Adafruit_DHT.DHT22
pin = 4
while True:
    # Read the temperature and humidity from the sensor
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

    # Check if the sensor reading was successful
    if humidity is not None and temperature is not None:
        print('Temperature: {0:0.1f}°C'.format(temperature))
        print('Humidity: {0:0.1f}%'.format(humidity))
    else:
        print('Failed to retrieve sensor data.')

    # Wait for some time before taking the next reading
    time.sleep(2)
```
---
**To run the program, follow these steps :**

Set up your Raspberry Pi with Raspbian or any other compatible operating system.
Connect the temperature and humidity sensor to the appropriate GPIO pin (in this case, pin 4).
Install the required libraries by running the following commands in the terminal:

![alt text](images/4.png)

Create a new Python file, e.g., weather_station.py, and copy the above code into it.
Save the file and execute it by running python3 weather_station.py in the terminal.
The program continuously reads the temperature and humidity values from the sensor using the Adafruit_DHT library. It then prints the values on the console. You can modify the code to display the data on an LCD display or store it in a database for further analysis.

**Note**: Make sure you have the appropriate libraries installed and the sensor connected correctly to the Raspberry Pi before running the program.